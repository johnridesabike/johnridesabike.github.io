---
title:
  "The Acutis template language, or: how I over-engineered a program that just
  prints text"
date: 2024-07-04
description: |
  This is the story of how and why I built the Acutis template language. It
  explains the decisions I made, the problems I solved, and the technical
  details involved.
layout: Page.acutis
tags: acutisArticle
templateEngineOverride: md # Don't process Acutis code.
---

Almost every software project needs to generate text, and it usually has a
specialized language to do it. From printf to PHP, we keep inventing new ways to
print text again and again. But, for each one I used, I always felt like we
could do better.

Finally I did what every coder with too much free time does and built my own.
(Thanks, 2020.) The result is Acutis. Maybe it's better than its predecessors,
but I'll let you decide that yourself. Either way, it's certainly different.


I wrote the following document to share what I learned along the way. This isn't
so much of a tutorial or a guide as is it the story of my journey. I'm not a
computer scientist by education or profession, and I'm sure that much of the
knowledge herein is elementary to compiler experts. Some of it also may also
seem a bit sophisticated to beginner coders. Regardless of the reader's skill
level, I hope to convey my decisions and the problems I solved more than merely
the technical details.

<figure>
  <a href="https://johnridesa.bike/acutis/">
    <img src="https://johnridesa.bike/acutis/icon.svg" alt="The Acutis icon." height=128 width=128>
  </a>
  <figcaption>
    To see Acutis in action,
    <a href="https://johnridesa.bike/acutis/">visit its home page here</a>
    or
    <a href="https://github.com/johnridesabike/acutis">check out its source code here</a>.
 </figcaption>
</figure>

[[toc]]

## What Acutis is, or: what makes this language different than any other language

Acutis is a simple language based on sophisticated ideas. What sets Acutis apart
from its peer template languages is that it's statically compiled using a
structural type system, and it automatically validates its input to guarantee
predictable behavior.

An Acutis template consists of text that renders as-is, sections that
conditionally render, and sections that render variables from the input data.

This is a basic Acutis template:

```acutis
Hello {% name %},

{% match hasMetBefore with false ~%}
  It's my pleasure to meet you.
{%~ with true ~%}
  I'm happy to to see you again.
{%~ /match %}
```

Given a JSON input of `{"name": "John", "hasMetBefore": false}` this template
will render:

```txt
Hello John,

It's my pleasure to meet you.
```

So far, this is nothing too special. We use `match` and `with` instead of the
more-common `if` and `else`, but in this example that difference is only
cosmetic.

Things get more interesting once you begin pattern-matching larger data
structures. Consider this template:

```acutis
{% match article
   with {published: true, title, dates: {posted, updated}} %}
  {% title %} was posted on {% posted %} and updated on {% updated %}.
{% with {published: false} %}
  {* Don't render unpublished articles. *}
{% /match %}
```

Now we aren't just introducing different code paths, we're also describing the
exact structure of the input for each path and using the names from that
description to print variables.

The compiler uses this structural information to infer a type scheme for your
template. With that type scheme, it can parse your input data to ensure that it
conforms.

A template is rarely useful on its own. We can include template components with
an XML-esque syntax:

```acutis
{% Header title=siteTitle description / %}

{% Article date=articleDate %}
  Write your article text here.
{% /Article %}
```

This all may seem elementary, and indeed simplicity is by design. But the story
of how I ended up with this design is long and sinuous.

### Further reading

- [The Acutis home page](https://johnridesa.bike/acutis/).
- [The Acutis source code](https://github.com/johnridesabike/acutis).

## Why I made a new language, or: how to scratch your own itch

Most template languages suffer from an unfortunate design where they mash any
inputs together and try to render whatever they can without crashing. Templates
built with JavaScript will gladly print nonsense like "`[Object object]`" while
acting oblivious that anything went wrong. It feels like having an assistant who
does their job wrong often enough that you have to always check behind them.
When you ask them why they did what they did, they can't explain it.

I needed a smarter assistant. It should always output exactly what I specified.
If doing that was impossible, then it would report what was wrong with the
template source or what was wrong with the input data. Could that be so hard?

In no particular order, I wanted:

- A language with a fully specified behavior including clear success and failure
  states, and that never rendered nonsense as a kind of pseudo-error.
- A static analyzer that could guarantee type coherence, find unreachable code,
  and detect conditionals that didn't cover all cases.
- Pattern matching.
- Type inference.
- The ability to use my websites' data without manually converting it.
- A JavaScript runtime.
- Support for asynchronous execution, preferably by using JavaScript promises.
- The warm feeling I get when the pieces of a program all "click" together with
  no room for error.

These are all individually solved problems across many languages, but I hadn't
seen a template language that solved them together in the way I wanted. So I
went to work.

### Further reading

- ["Scratch your own itch" on the Indie Web wiki](https://indieweb.org/scratch_your_own_itch).

## Design decisions, or: loving to crash loud and long and clear

Before we get into the nitty-gritty,
[I wish make you aware of the Acutis language manual](https://johnridesa.bike/acutis/manual/).
It contains much more detail about how the language works, and I don’t want to
bog down this document by repeating that all here. Feel free to reference it if
any of the following information seem scant.

Also, as an aside, I found writing the manual to be both highly rewarding and
helpful for designing the language. When I needed to figure out how a feature
should work, I would try writing about it. If it was hard to describe in
English, then it was probably a bad idea to implement in code as well. Good
ideas are intuitive. Trying to explain bad ideas only reveals how bad they are.

Now, for the language itself, I employed the philosophy of making "impossible
states unrepresentable." A good type-checker can make incoherent types
impossible, and a pattern-matching compiler can identify unused cases. In
Acutis, there's no printing arbitrary values with unspecified outputs. It either
works or it crashes.

<figure>
<pre class="language-txt"><code class="language-txt">File "example.acutis", 1:4-1:33
Matching error.
This pattern-matching is not exhaustive.
Here's an example of a pattern which is not matched:
  []</code></pre>
<figcaption>An example error message.</figcaption>
</figure>

I wanted to improve on the development experience I found in other template
languages. Even with fancy editor features, you still have to continuously
execute the templates and inspect their output to catch bugs while you edit. In
contrast, Acutis "fails loudly." It crashes as soon as it catches a whiff that
something in your code doesn't add up, and it prints a message explaining
exactly why. This lets you write Acutis code using the timeless "edit, compile,
run" cycle. As a bonus, this eliminates (or at least minimizes) the need for
extra tooling for analysis and debugging.

The Acutis language is also deliberately constrained à la the "principle of
least power." Sometimes a less expressive language makes it easier to build what
you need. Acutis lacks conventional functions (or "shortcodes" in the jargon of
other template languages). It doesn't support imperative loops or assigning and
manipulating variables. It doesn't even support recursion, which puts it in a
whole category of unpowerful-ness.

I found that these limitations don't hinder me from building websites using
Acutis. I don't need a Swiss-army knife to make templates, just a really sharp
blade. Any other tools are better taken from more powerful languages. Instead of
using functions or variables to manipulate data within the templates, it's
easier to simply preprocess the data (using any language of my choice). Acutis
supports executing external code as if it was a template component, which works
as an escape hatch for those cases where I need something more sophisticated.

And the hardest design decision for any software is naming it. I settled on
dubbing it after Carlo Acutis. I had started working on it just after his
beautification in 2020, and his patronage seems most appropriate for a compiler
that builds websites.

### Further reading

- [The Acutis manual](https://johnridesa.bike/acutis/manual/).
- [The Principle of Least Power](https://www.w3.org/2001/tag/doc/leastPower-2006-01-23.html).

## Playing the orchestra, or: how Acutis basically works

Acutis is built using OCaml, a functional programming language that's used for
both research and industry. OCaml's features and ecosystem happen to make it
well-suited for creating compilers. I also personally find it pleasant to work
with.

The Acutis compiler all starts with a lexer, which breaks down each template
into discreet tokens. The lexer itself is made with `ocamllex`, an OCaml program
which generates lexical analyzers. Next, we feed the tokens to a parser, which
produces an abstract syntax tree (AST). This parser is made with the parser
generator Menhir.

After the lexer and parser produce an AST, our work has only just begun. The
next step is to feed that AST into a type-checker, which will validate that the
types are coherent and produce a typed tree (like the abstract syntax tree, but
type-ier.) Now that we've warmed up with that, we send the typed tree to the
pattern-matching compiler which reads the matrices of patterns and produces a
decision tree for each. We're almost done, but what do we want to do with it
now? Run it? Print it to a file? We can do either by folding over it with
tagless-final-style language semantics which map to either executable functions
or printers for JavaScript code.

<figure class="alignwide">
<svg viewBox="0.00 0.00 572.00 243.00" style="max-width: 572px; max-height: 243px">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 239)">
<polygon fill="white" stroke="none" points="-4,4 -4,-239 568,-239 568,4 -4,4"/>
<g id="clust1" class="cluster">
<title>cluster_modules</title>
<polygon fill="none" stroke="black" points="8,-109.5 8,-186 556,-186 556,-109.5 8,-109.5"/>
<text text-anchor="middle" x="282" y="-168.7" font-family="Times,serif" font-size="14.00">Compile steps</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_structures</title>
<polygon fill="none" stroke="black" points="39,-8 39,-89.5 369,-89.5 369,-8 39,-8"/>
<text text-anchor="middle" x="204" y="-15.2" font-family="Times,serif" font-size="14.00">Data structures</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_runtimes</title>
<polygon fill="none" stroke="black" points="381,-8 381,-89.5 553,-89.5 553,-8 381,-8"/>
<text text-anchor="middle" x="467" y="-15.2" font-family="Times,serif" font-size="14.00">Runtimes</text>
</g>
<!-- Lexer -->
<g id="node1" class="node">
<title>Lexer</title>
<polygon fill="none" stroke="black" points="58,-147.5 16,-147.5 16,-123.5 58,-123.5 70,-135.5 58,-147.5"/>
<text text-anchor="middle" x="43" y="-130.45" font-family="Times,serif" font-size="14.00">Lexer</text>
</g>
<!-- Tokens -->
<g id="node6" class="node">
<title>Tokens</title>
<polygon fill="none" stroke="black" points="102.88,-79 47.12,-79 47.12,-43 102.88,-43 102.88,-79"/>
<text text-anchor="middle" x="75" y="-55.95" font-family="Times,serif" font-size="14.00">Tokens</text>
</g>
<!-- Lexer&#45;&gt;Tokens -->
<g id="edge2" class="edge">
<title>Lexer&#45;&gt;Tokens</title>
<path fill="none" stroke="black" d="M50.58,-117.32C54.25,-109.01 58.74,-98.84 62.87,-89.49"/>
<polygon fill="black" stroke="black" points="66.02,-91 66.86,-80.44 59.62,-88.18 66.02,-91"/>
</g>
<!-- Parser -->
<g id="node2" class="node">
<title>Parser</title>
<polygon fill="none" stroke="black" points="130,-147.5 88,-147.5 88,-123.5 130,-123.5 142,-135.5 130,-147.5"/>
<text text-anchor="middle" x="115" y="-130.45" font-family="Times,serif" font-size="14.00">Parser</text>
</g>
<!-- Abstract\nsyntax tree -->
<g id="node7" class="node">
<title>Abstract\nsyntax tree</title>
<polygon fill="none" stroke="black" points="196.62,-81.5 121.38,-81.5 121.38,-40.5 196.62,-40.5 196.62,-81.5"/>
<text text-anchor="middle" x="159" y="-64.2" font-family="Times,serif" font-size="14.00">Abstract</text>
<text text-anchor="middle" x="159" y="-47.7" font-family="Times,serif" font-size="14.00">syntax tree</text>
</g>
<!-- Parser&#45;&gt;Abstract\nsyntax tree -->
<g id="edge4" class="edge">
<title>Parser&#45;&gt;Abstract\nsyntax tree</title>
<path fill="none" stroke="black" d="M125.43,-117.32C130.12,-109.59 135.79,-100.25 141.12,-91.46"/>
<polygon fill="black" stroke="black" points="143.95,-93.54 146.15,-83.18 137.97,-89.91 143.95,-93.54"/>
</g>
<!-- Type checker -->
<g id="node3" class="node">
<title>Type checker</title>
<polygon fill="none" stroke="black" points="237.75,-147.5 160.25,-147.5 160.25,-123.5 237.75,-123.5 249.75,-135.5 237.75,-147.5"/>
<text text-anchor="middle" x="205" y="-130.45" font-family="Times,serif" font-size="14.00">Type checker</text>
</g>
<!-- Typed\ntree -->
<g id="node8" class="node">
<title>Typed\ntree</title>
<polygon fill="none" stroke="black" points="269,-81.5 215,-81.5 215,-40.5 269,-40.5 269,-81.5"/>
<text text-anchor="middle" x="242" y="-64.2" font-family="Times,serif" font-size="14.00">Typed</text>
<text text-anchor="middle" x="242" y="-47.7" font-family="Times,serif" font-size="14.00">tree</text>
</g>
<!-- Type checker&#45;&gt;Typed\ntree -->
<g id="edge6" class="edge">
<title>Type checker&#45;&gt;Typed\ntree</title>
<path fill="none" stroke="black" d="M213.77,-117.32C217.63,-109.76 222.28,-100.65 226.68,-92.02"/>
<polygon fill="black" stroke="black" points="229.74,-93.73 231.17,-83.23 223.5,-90.55 229.74,-93.73"/>
</g>
<!-- Pattern matching -->
<g id="node4" class="node">
<title>Pattern matching</title>
<polygon fill="none" stroke="black" points="364.5,-147.5 267.5,-147.5 267.5,-123.5 364.5,-123.5 376.5,-135.5 364.5,-147.5"/>
<text text-anchor="middle" x="322" y="-130.45" font-family="Times,serif" font-size="14.00">Pattern matching</text>
</g>
<!-- Optimized\ntree -->
<g id="node9" class="node">
<title>Optimized\ntree</title>
<polygon fill="none" stroke="black" points="360.88,-81.5 287.12,-81.5 287.12,-40.5 360.88,-40.5 360.88,-81.5"/>
<text text-anchor="middle" x="324" y="-64.2" font-family="Times,serif" font-size="14.00">Optimized</text>
<text text-anchor="middle" x="324" y="-47.7" font-family="Times,serif" font-size="14.00">tree</text>
</g>
<!-- Pattern matching&#45;&gt;Optimized\ntree -->
<g id="edge8" class="edge">
<title>Pattern matching&#45;&gt;Optimized\ntree</title>
<path fill="none" stroke="black" d="M322.47,-117.32C322.67,-110.09 322.91,-101.45 323.14,-93.16"/>
<polygon fill="black" stroke="black" points="326.63,-93.49 323.41,-83.39 319.64,-93.29 326.63,-93.49"/>
</g>
<!-- Tagless&#45;final instructions -->
<g id="node5" class="node">
<title>Tagless&#45;final instructions</title>
<polygon fill="none" stroke="black" points="535.62,-147.5 394.38,-147.5 394.38,-123.5 535.62,-123.5 547.62,-135.5 535.62,-147.5"/>
<text text-anchor="middle" x="471" y="-130.45" font-family="Times,serif" font-size="14.00">Tagless&#45;final instructions</text>
</g>
<!-- Renderer -->
<g id="node10" class="node">
<title>Renderer</title>
<polygon fill="none" stroke="black" points="454.75,-79 389.25,-79 389.25,-43 454.75,-43 454.75,-79"/>
<text text-anchor="middle" x="422" y="-55.95" font-family="Times,serif" font-size="14.00">Renderer</text>
</g>
<!-- Tagless&#45;final instructions&#45;&gt;Renderer -->
<g id="edge10" class="edge">
<title>Tagless&#45;final instructions&#45;&gt;Renderer</title>
<path fill="none" stroke="black" d="M470,-116.5C470,-116.5 457.14,-101.9 444.73,-87.81"/>
<polygon fill="black" stroke="black" points="447.42,-85.57 438.19,-80.38 442.17,-90.2 447.42,-85.57"/>
</g>
<!-- JavaScript\nprinter -->
<g id="node11" class="node">
<title>JavaScript\nprinter</title>
<polygon fill="none" stroke="black" points="545.12,-81.5 472.88,-81.5 472.88,-40.5 545.12,-40.5 545.12,-81.5"/>
<text text-anchor="middle" x="509" y="-64.2" font-family="Times,serif" font-size="14.00">JavaScript</text>
<text text-anchor="middle" x="509" y="-47.7" font-family="Times,serif" font-size="14.00">printer</text>
</g>
<!-- Tagless&#45;final instructions&#45;&gt;JavaScript\nprinter -->
<g id="edge11" class="edge">
<title>Tagless&#45;final instructions&#45;&gt;JavaScript\nprinter</title>
<path fill="none" stroke="black" d="M470,-116.5C470,-116.5 478.79,-104.22 488.02,-91.32"/>
<polygon fill="black" stroke="black" points="490.85,-93.38 493.82,-83.22 485.15,-89.31 490.85,-93.38"/>
</g>
<!-- Tokens&#45;&gt;Parser -->
<g id="edge3" class="edge">
<title>Tokens&#45;&gt;Parser</title>
<path fill="none" stroke="black" d="M84.41,-79.06C89.08,-87.53 94.84,-97.96 100.09,-107.48"/>
<polygon fill="black" stroke="black" points="96.89,-108.93 104.79,-115.99 103.02,-105.55 96.89,-108.93"/>
</g>
<!-- Abstract\nsyntax tree&#45;&gt;Type checker -->
<g id="edge5" class="edge">
<title>Abstract\nsyntax tree&#45;&gt;Type checker</title>
<path fill="none" stroke="black" d="M171.61,-81.88C176.68,-89.86 182.59,-99.18 188.02,-107.74"/>
<polygon fill="black" stroke="black" points="184.97,-109.47 193.29,-116.04 190.89,-105.72 184.97,-109.47"/>
</g>
<!-- Typed\ntree&#45;&gt;Pattern matching -->
<g id="edge7" class="edge">
<title>Typed\ntree&#45;&gt;Pattern matching</title>
<path fill="none" stroke="black" d="M263.94,-81.88C273.41,-90.47 284.6,-100.61 294.62,-109.68"/>
<polygon fill="black" stroke="black" points="292.16,-112.18 301.92,-116.3 296.86,-106.99 292.16,-112.18"/>
</g>
<!-- Optimized\ntree&#45;&gt;Tagless&#45;final instructions -->
<g id="edge9" class="edge">
<title>Optimized\ntree&#45;&gt;Tagless&#45;final instructions</title>
<path fill="none" stroke="black" d="M361.28,-81.53C366.54,-84.24 371.9,-86.96 377,-89.5 392.13,-97.04 408.74,-105.08 423.73,-112.23"/>
<polygon fill="black" stroke="black" points="421.91,-115.25 432.44,-116.38 424.92,-108.92 421.91,-115.25"/>
</g>
<!-- Template\nsource -->
<g id="node12" class="node">
<title>Template\nsource</title>
<polygon fill="none" stroke="black" points="70.88,-235 9.12,-235 9.12,-194 76.88,-194 76.88,-229 70.88,-235"/>
<polyline fill="none" stroke="black" points="70.88,-235 70.88,-229"/>
<polyline fill="none" stroke="black" points="76.88,-229 70.88,-229"/>
<text text-anchor="middle" x="43" y="-217.7" font-family="Times,serif" font-size="14.00">Template</text>
<text text-anchor="middle" x="43" y="-201.2" font-family="Times,serif" font-size="14.00">source</text>
</g>
<!-- Template\nsource&#45;&gt;Lexer -->
<g id="edge1" class="edge">
<title>Template\nsource&#45;&gt;Lexer</title>
<path fill="none" stroke="black" d="M43,-193.67C43,-185.02 43,-174.72 43,-165.25"/>
<polygon fill="black" stroke="black" points="46.5,-165.42 43,-155.42 39.5,-165.42 46.5,-165.42"/>
</g>
</g>
</svg>
<!--
digraph {
  subgraph cluster_modules {
    label = "Compile steps";
    node [shape = cds]
    Lexer;
    Parser;
    "Type checker";
    "Pattern matching";
    "Tagless-final instructions";
  }
  subgraph cluster_structures {
    label = "Data structures";
    labelloc = b;
    node [shape = box];
    Tokens;
    "Abstract\nsyntax tree";
    "Typed\ntree";
    "Optimized\ntree";
  }
  subgraph cluster_runtimes {
    label = "Runtimes";
    labelloc = b;
    node [shape = box]
    "Renderer";
    "JavaScript\nprinter";
  }
  "Template\nsource" [shape = note];
  "Template\nsource" ->
  Lexer ->
  Tokens ->
  Parser ->
  "Abstract\nsyntax tree" ->
  "Type checker" ->
  "Typed\ntree" ->
  "Pattern matching" ->
  "Optimized\ntree" ->
  "Tagless-final instructions";
  "Tagless-final instructions" -> {"Renderer" "JavaScript\nprinter"}
    [sametail = t1];
}
-->
<figcaption>A simplified overview of the Acutis compiler.</figcaption>
</figure>

At least, that's the conductor's viewpoint, watching the instruments play their
parts in the orchestra as a whole. Each of these steps deserves a more detailed
explanation, but first let's look at some of the decisions I was forced to make
along the way.

One fact which became obvious early was that the type definitions, the pattern
matching, and the runtime representation of data were all intertwined. What the
type-checker produced needed to be suitable for building decision trees, which
needed to match how the data is represented during runtime. The choices I made
at each step caused cascades of pieces to rearrange throughout the project.

I took a page from the OCaml book by separating types and values. Types only
exist during compilation, a technique called "type erasure." The values
constructed at runtime carry no type information. This allows for a leaner
runtime, and it creates a starker border between compile-time and runtime, where
certain operations are only possible in either one or the other.

At runtime, everything is either a primitive value (integer, floating-point
number, or string), a tuple, or a hash table. One benefit to this limitation is
that you only need to deal with a few kinds of values, which makes compiling
pattern-matching and doing optimizations much easier.

To give specific examples of what type erasure does: true is represented as `1`,
and false and null are both `0`. Nullable values are "boxed" into a 1-tuple, so
a non-null `a` becomes `(a)`. Lists are represented as nested 2-tuples, so
`[a, b, c]` becomes `(a, (b, (c, 0)))`. An empty list is `0`.

But type erasure like this only works with a compile-time type-checker that is
100% sound, which brings us to the next section.

### Further reading

- [The Acutis lexer implementation](https://github.com/johnridesabike/acutis/blob/master/lib/lexer.mll).
- [The Acutis parser implementation](https://github.com/johnridesabike/acutis/blob/master/lib/parser.mly).
- [The OCaml home page](https://ocaml.org/).
- [The `ocamllex` documentation](https://ocaml.org/manual/latest/lexyacc.html).
- [The Menhir documentation](http://cambium.inria.fr/~fpottier/menhir/).

## The messy world of inference and unification, or: how the Acutis type-checker works

Type-checking at compile time, or "static typing," is one of my favorite ways to
catch programming errors. Unlike most static analysis techniques, which
typically rely on heuristics or case-by-case rules, type-checkers can
mathematically prove a whole category of runtime errors are impossible. The more
that your program is built on disciplined rules with a sound foundation, the
easier it is for both humans and machines to reason about it.

I had looked at several type systems in existing languages, hoping that I could
borrow them without reinventing the wheel, but none fit exactly what I had in
mind. I wanted a system that worked completely by inference so that type
annotations would be unneeded. I needed a structural system where compound types
could be extensible. Finally, the hard part, was that it needed to work
ergonomically with my (and your) messy data.

I started with the JSON specification, which includes some standard types:
number, string, boolean, null, array, and key-value pairs (objects). But you can
only safely model a small subset of real-world data with only those types, at
least with my notion of _safe_. So this required some additions.

The easiest problem to fix was null. In many lanaguages, anything can be
nullable. Acutis instead treats null like the "option" type in OCaml, where it's
a distinct type that can contain other types. This plays well with type erasure
because at runtime the value `null` doesn't necessarily need to exist; you can
represent it as something like `0`. Non-null values get wrapped into a
structure, so nested nullable values is safely possible.

Another problem was with the container types: array and object. You can safely
have a dynamically-sized container containing a homogeneously-typed values or a
fixed-sized container with a heterogeneously-typed values, but a dynamic
heterogenous container breaks soundness. To solve this, I split the containers
into safer definitions. I split array into list (dynamically sized, containing a
single homogenous type) and tuple (fixed-sized, containing multiple heterogenous
types). I split object into dictionary (dynamic, homogenous) and record (fixed,
heterogenous).

The final problem was JSON's lack of sum types. For most practical data, you
need some way to express that different data structures may appear in the same
place. Although it may seem tempting to simply allow unions like `string | int`,
that is only safe in limited situations. It also breaks type erasure, where the
compiler doesn’t preserve certain type information at runtime. Even more
problematic is the need to unify complex records. Although it's possible to
model a union like
`{title: string, pages: int} | {title: string, runtime: int}`, making an
algorithm to do so efficiently and reliably is more trouble than it's worth.
When the type-checker sees a new record structure and tries to unify it with an
existing union, how does it decide which case to use? Or does it add a new case?
How will the pattern-matching runtime determine which case it's handling?

As usual, the simpler and more explicit rules are easier for both humans and
machines. Acutis allows records to unify when they share a "discriminator"
field. Let's add one to our previous example:
`{@type: "book", title: string, pages: int} | {@type: "film", title: string, runtime: int}`.
The `@` labels a field as a discriminator. This rule is not only simple to
implement in the type-checker, but it also naturally fits most practical JSON
data. You very likely want some kind of ad-hoc discriminator field in your data
anyway to help classify variations.

The same type-checking logic also applies to enumeration types, which we write
in Acutis like `@"book" | @"film"` or `@0 | @1 | @2`. I don't personally find
these useful for the kinds of data that gets rendered onto web pages, but
they're easy to add given the presence of record unions already. They also allow
an easy way to implement booleans, where `false | true` is really just an
alternate syntax for `@0 | @1`.

With these features, we now have a basic implementation of what fancy-pants
languages call algebraic data types. The example above is analogous to an OCaml
type like
`Book of {title: string; pages: int} | Film of {title: string; runtime: int}`.
In the OCaml type, the compiler internally manages how each value gets
discriminated. In the Acutis version, the user defines it themselves. This means
that we don't need to rely on special fields (like the GraphQL `__typename`
field). It balances flexibility with soundness.

My highest priority when inventing this type system was guaranteeing soundness
(which is provable), but my second priority was having good ergonomics and
practicality (which is mostly subjective). I like to think I did a decent job at
both.

### Further reading

- [The Acutis type-checker interface](https://johnridesa.bike/acutis/api/acutis/Acutis_internals/Typechecker/index.html).
- [The Acutis type-checker implementation](https://github.com/johnridesabike/acutis/blob/master/lib/typechecker.ml).

## Decisions, decisions, or: how Acutis pattern-matching works

If you've used pattern matching in other languages, then the Acutis version
works probably the same, at least on the surface. You write a sequence of
patterns and the runtime checks to see if any of them match the input data.

```acutis
{% match author with {name, books: [{title}, ..._]} %}
  {% name %}'s latest book is {% title %}.
{% with {name, books: []} %}
  {% name %} hasn't published any books yet.
{% /match %}
```

The above code roughly says: “take the `name` field from `author`. If the
`books` field is a list with at least one item, take the first item's `title`
field and render the first case. If `books` is an empty list, render the second
case.”

My initial implementation of pattern-matching simply checked every single value
on every single pattern until it got a positive hit. This wasn't very efficient,
but worse was that it had no way to analyze the patterns. I needed to detect
partial matches (where a possible case isn't covered) and redundant patterns
(that will never be covered). It turns out that solving those can get
complicated.

The Acutis compiler presently takes each matrix of patterns and creates a
decision tree. In our above example, the tree would describe something like:
"bind the field `name`, if `books` is empty then go to case 2, if `books` is not
empty then bind field `title` and then go to case 1." That's an
oversimplification, since the real tree has instructions like when to open and
close each structure (records, list items, etc.), but it's the basic idea.

The most complicating feature of the Acutis decision trees is how it handles
"wildcards," which are a value that matches anything (e.g. a variable like
`name` or `_`). The example above is simple, but complex cases are common.
Imagine if we matched on a specific value or data structure and then, in a later
case, also matched it with a wildcard.

Consider the tree that these cases would produce:

```acutis
{% match a,  b,  c
   with 10, 11, 12 %} case 0
{% with  _, 21, 22 %} case 1
{% with 30, 31, 32 %} case 2
{% with 30,  _, 42 %} case 3
{% with  _,  _,  _ %} case 4
{% /match %}
```

"If `a = 10` then check if `b = 11` then check if `c = 12`, then..." But what if
`b = 21`? Where do you go from there? What if `c = 32`? Do you need to go back
and test `a` again?

Acutis uses a basic yet effective technique called wildcard expansion. When you
add a wildcard node to a tree, it takes the nodes after the wildcard and copies
them into all of the following nodes in the existing tree. In our example, that
means that after checking for `a = 10` then the next node will check for
`b = 11` as well as `b = 21`, and follow the tree accordingly. If `a = 30` or if
`a` doesn't match any of the given numbers, then it will also check if `b = 21`,
and follow the resulting tree from there.

<figure class="alignwide">
<svg viewBox="0.00 0.00 908.12 290.00" style="max-width: 908px; max-height: 290px">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 286)">
<polygon fill="white" stroke="none" points="-4,4 -4,-286 904.12,-286 904.12,4 -4,4"/>
<!-- a0 -->
<g id="node1" class="node">
<title>a0</title>
<ellipse fill="none" stroke="black" cx="522.88" cy="-264" rx="27" ry="18"/>
<text text-anchor="middle" x="522.88" y="-258.95" font-family="Times,serif" font-size="14.00">a</text>
</g>
<!-- b0 -->
<g id="node2" class="node">
<title>b0</title>
<ellipse fill="none" stroke="black" cx="208.88" cy="-175.5" rx="27" ry="18"/>
<text text-anchor="middle" x="208.88" y="-170.45" font-family="Times,serif" font-size="14.00">b</text>
</g>
<!-- a0&#45;&gt;b0 -->
<g id="edge1" class="edge">
<title>a0&#45;&gt;b0</title>
<path fill="none" stroke="black" d="M498.24,-256.21C442.86,-240.96 308.41,-203.92 244.18,-186.23"/>
<polygon fill="black" stroke="black" points="245.43,-182.94 234.86,-183.66 243.57,-189.69 245.43,-182.94"/>
<text text-anchor="middle" x="400.62" y="-214.7" font-family="Times,serif" font-size="14.00">10</text>
</g>
<!-- b1 -->
<g id="node3" class="node">
<title>b1</title>
<ellipse fill="none" stroke="black" cx="522.88" cy="-175.5" rx="27" ry="18"/>
<text text-anchor="middle" x="522.88" y="-170.45" font-family="Times,serif" font-size="14.00">b</text>
</g>
<!-- a0&#45;&gt;b1 -->
<g id="edge10" class="edge">
<title>a0&#45;&gt;b1</title>
<path fill="none" stroke="black" d="M522.88,-245.91C522.88,-234.26 522.88,-218.55 522.88,-205.02"/>
<polygon fill="black" stroke="black" points="526.38,-205.36 522.88,-195.36 519.38,-205.36 526.38,-205.36"/>
<text text-anchor="middle" x="529.62" y="-214.7" font-family="Times,serif" font-size="14.00">30</text>
</g>
<!-- b2 -->
<g id="node4" class="node">
<title>b2</title>
<ellipse fill="none" stroke="black" cx="755.88" cy="-175.5" rx="27" ry="18"/>
<text text-anchor="middle" x="755.88" y="-170.45" font-family="Times,serif" font-size="14.00">b</text>
</g>
<!-- a0&#45;&gt;b2 -->
<g id="edge22" class="edge">
<title>a0&#45;&gt;b2</title>
<path fill="none" stroke="black" d="M546.07,-254.39C587.41,-239.04 674.01,-206.89 722.02,-189.07"/>
<polygon fill="black" stroke="black" points="723.2,-192.36 731.36,-185.6 720.76,-185.8 723.2,-192.36"/>
<text text-anchor="middle" x="683.5" y="-214.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- c0 -->
<g id="node5" class="node">
<title>c0</title>
<ellipse fill="none" stroke="black" cx="68.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="68.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b0&#45;&gt;c0 -->
<g id="edge2" class="edge">
<title>b0&#45;&gt;c0</title>
<path fill="none" stroke="black" d="M189.41,-162.47C165.59,-147.75 125.05,-122.71 97.63,-105.77"/>
<polygon fill="black" stroke="black" points="99.81,-103 89.46,-100.72 96.13,-108.95 99.81,-103"/>
<text text-anchor="middle" x="157.62" y="-126.2" font-family="Times,serif" font-size="14.00">11</text>
</g>
<!-- c1 -->
<g id="node6" class="node">
<title>c1</title>
<ellipse fill="none" stroke="black" cx="180.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="180.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b0&#45;&gt;c1 -->
<g id="edge5" class="edge">
<title>b0&#45;&gt;c1</title>
<path fill="none" stroke="black" d="M203.34,-157.41C199.51,-145.56 194.32,-129.52 189.89,-115.84"/>
<polygon fill="black" stroke="black" points="193.27,-114.93 186.86,-106.49 186.61,-117.09 193.27,-114.93"/>
<text text-anchor="middle" x="203.62" y="-126.2" font-family="Times,serif" font-size="14.00">21</text>
</g>
<!-- c2 -->
<g id="node7" class="node">
<title>c2</title>
<ellipse fill="none" stroke="black" cx="252.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="252.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b0&#45;&gt;c2 -->
<g id="edge8" class="edge">
<title>b0&#45;&gt;c2</title>
<path fill="none" stroke="black" d="M217.15,-158.23C223.38,-145.98 232.05,-128.93 239.29,-114.7"/>
<polygon fill="black" stroke="black" points="242.39,-116.34 243.8,-105.84 236.15,-113.17 242.39,-116.34"/>
<text text-anchor="middle" x="257.5" y="-126.2" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- c3 -->
<g id="node8" class="node">
<title>c3</title>
<ellipse fill="none" stroke="black" cx="387.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="387.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b1&#45;&gt;c3 -->
<g id="edge11" class="edge">
<title>b1&#45;&gt;c3</title>
<path fill="none" stroke="black" d="M503.82,-162.29C481,-147.67 442.58,-123.05 416.27,-106.19"/>
<polygon fill="black" stroke="black" points="418.42,-103.41 408.11,-100.96 414.64,-109.31 418.42,-103.41"/>
<text text-anchor="middle" x="473.62" y="-126.2" font-family="Times,serif" font-size="14.00">21</text>
</g>
<!-- c4 -->
<g id="node9" class="node">
<title>c4</title>
<ellipse fill="none" stroke="black" cx="522.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="522.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b1&#45;&gt;c4 -->
<g id="edge15" class="edge">
<title>b1&#45;&gt;c4</title>
<path fill="none" stroke="black" d="M522.88,-157.41C522.88,-145.76 522.88,-130.05 522.88,-116.52"/>
<polygon fill="black" stroke="black" points="526.38,-116.86 522.88,-106.86 519.38,-116.86 526.38,-116.86"/>
<text text-anchor="middle" x="529.62" y="-126.2" font-family="Times,serif" font-size="14.00">31</text>
</g>
<!-- c5 -->
<g id="node10" class="node">
<title>c5</title>
<ellipse fill="none" stroke="black" cx="629.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="629.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b1&#45;&gt;c5 -->
<g id="edge19" class="edge">
<title>b1&#45;&gt;c5</title>
<path fill="none" stroke="black" d="M539.59,-160.98C556.95,-146.96 584.31,-124.84 604.36,-108.62"/>
<polygon fill="black" stroke="black" points="606.52,-111.38 612.1,-102.37 602.12,-105.94 606.52,-111.38"/>
<text text-anchor="middle" x="609.5" y="-126.2" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- c6 -->
<g id="node11" class="node">
<title>c6</title>
<ellipse fill="none" stroke="black" cx="755.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="755.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b2&#45;&gt;c6 -->
<g id="edge23" class="edge">
<title>b2&#45;&gt;c6</title>
<path fill="none" stroke="black" d="M755.88,-157.41C755.88,-145.76 755.88,-130.05 755.88,-116.52"/>
<polygon fill="black" stroke="black" points="759.38,-116.86 755.88,-106.86 752.38,-116.86 759.38,-116.86"/>
<text text-anchor="middle" x="762.62" y="-126.2" font-family="Times,serif" font-size="14.00">21</text>
</g>
<!-- c7 -->
<g id="node12" class="node">
<title>c7</title>
<ellipse fill="none" stroke="black" cx="844.88" cy="-87" rx="27" ry="18"/>
<text text-anchor="middle" x="844.88" y="-81.95" font-family="Times,serif" font-size="14.00">c</text>
</g>
<!-- b2&#45;&gt;c7 -->
<g id="edge26" class="edge">
<title>b2&#45;&gt;c7</title>
<path fill="none" stroke="black" d="M770.57,-160.22C784.61,-146.57 805.98,-125.8 822.21,-110.03"/>
<polygon fill="black" stroke="black" points="824.34,-112.84 829.07,-103.36 819.46,-107.82 824.34,-112.84"/>
<text text-anchor="middle" x="831.5" y="-126.2" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit00 -->
<g id="node13" class="node">
<title>exit00</title>
<text text-anchor="middle" x="16.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 0</text>
</g>
<!-- c0&#45;&gt;exit00 -->
<g id="edge3" class="edge">
<title>c0&#45;&gt;exit00</title>
<path fill="none" stroke="black" d="M58.1,-70.1C49.27,-57.07 36.83,-38.71 27.93,-25.57"/>
<polygon fill="black" stroke="black" points="31.04,-23.92 22.54,-17.61 25.25,-27.85 31.04,-23.92"/>
<text text-anchor="middle" x="51.62" y="-37.7" font-family="Times,serif" font-size="14.00">12</text>
</g>
<!-- exit40 -->
<g id="node21" class="node">
<title>exit40</title>
<text text-anchor="middle" x="68.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c0&#45;&gt;exit40 -->
<g id="edge4" class="edge">
<title>c0&#45;&gt;exit40</title>
<path fill="none" stroke="black" d="M68.88,-68.58C68.88,-56.37 68.88,-40.08 68.88,-27.65"/>
<polygon fill="black" stroke="black" points="72.38,-27.96 68.88,-17.96 65.38,-27.96 72.38,-27.96"/>
<text text-anchor="middle" x="92.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit10 -->
<g id="node14" class="node">
<title>exit10</title>
<text text-anchor="middle" x="134.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 1</text>
</g>
<!-- c1&#45;&gt;exit10 -->
<g id="edge6" class="edge">
<title>c1&#45;&gt;exit10</title>
<path fill="none" stroke="black" d="M171.12,-69.72C163.37,-56.8 152.58,-38.8 144.79,-25.8"/>
<polygon fill="black" stroke="black" points="148.01,-24.36 139.87,-17.58 142.01,-27.96 148.01,-24.36"/>
<text text-anchor="middle" x="165.62" y="-37.7" font-family="Times,serif" font-size="14.00">22</text>
</g>
<!-- exit41 -->
<g id="node22" class="node">
<title>exit41</title>
<text text-anchor="middle" x="186.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c1&#45;&gt;exit41 -->
<g id="edge7" class="edge">
<title>c1&#45;&gt;exit41</title>
<path fill="none" stroke="black" d="M182.24,-68.58C183.19,-56.37 184.46,-40.08 185.44,-27.65"/>
<polygon fill="black" stroke="black" points="188.9,-28.19 186.19,-17.95 181.93,-27.65 188.9,-28.19"/>
<text text-anchor="middle" x="207.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit42 -->
<g id="node23" class="node">
<title>exit42</title>
<text text-anchor="middle" x="252.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c2&#45;&gt;exit42 -->
<g id="edge9" class="edge">
<title>c2&#45;&gt;exit42</title>
<path fill="none" stroke="black" d="M252.88,-68.58C252.88,-56.37 252.88,-40.08 252.88,-27.65"/>
<polygon fill="black" stroke="black" points="256.38,-27.96 252.88,-17.96 249.38,-27.96 256.38,-27.96"/>
<text text-anchor="middle" x="276.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit11 -->
<g id="node15" class="node">
<title>exit11</title>
<text text-anchor="middle" x="314.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 1</text>
</g>
<!-- c3&#45;&gt;exit11 -->
<g id="edge12" class="edge">
<title>c3&#45;&gt;exit11</title>
<path fill="none" stroke="black" d="M372.82,-71.55C366.43,-65.32 358.95,-57.89 352.38,-51 344.34,-42.58 335.64,-32.93 328.64,-25.03"/>
<polygon fill="black" stroke="black" points="331.34,-22.8 322.11,-17.6 326.09,-27.42 331.34,-22.8"/>
<text text-anchor="middle" x="358.62" y="-37.7" font-family="Times,serif" font-size="14.00">22</text>
</g>
<!-- exit30 -->
<g id="node18" class="node">
<title>exit30</title>
<text text-anchor="middle" x="366.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 3</text>
</g>
<!-- c3&#45;&gt;exit30 -->
<g id="edge13" class="edge">
<title>c3&#45;&gt;exit30</title>
<path fill="none" stroke="black" d="M380.76,-69.48C378.48,-63.72 376.1,-57.15 374.38,-51 372.26,-43.46 370.61,-34.98 369.4,-27.65"/>
<polygon fill="black" stroke="black" points="372.89,-27.31 367.96,-17.93 365.97,-28.34 372.89,-27.31"/>
<text text-anchor="middle" x="380.62" y="-37.7" font-family="Times,serif" font-size="14.00">42</text>
</g>
<!-- exit43 -->
<g id="node24" class="node">
<title>exit43</title>
<text text-anchor="middle" x="418.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c3&#45;&gt;exit43 -->
<g id="edge14" class="edge">
<title>c3&#45;&gt;exit43</title>
<path fill="none" stroke="black" d="M394.6,-69.35C399.68,-56.78 406.62,-39.59 411.78,-26.81"/>
<polygon fill="black" stroke="black" points="415,-28.2 415.5,-17.61 408.51,-25.57 415,-28.2"/>
<text text-anchor="middle" x="431.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit20 -->
<g id="node17" class="node">
<title>exit20</title>
<text text-anchor="middle" x="470.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 2</text>
</g>
<!-- c4&#45;&gt;exit20 -->
<g id="edge16" class="edge">
<title>c4&#45;&gt;exit20</title>
<path fill="none" stroke="black" d="M512.1,-70.1C503.27,-57.07 490.83,-38.71 481.93,-25.57"/>
<polygon fill="black" stroke="black" points="485.04,-23.92 476.54,-17.61 479.25,-27.85 485.04,-23.92"/>
<text text-anchor="middle" x="504.62" y="-37.7" font-family="Times,serif" font-size="14.00">32</text>
</g>
<!-- exit31 -->
<g id="node19" class="node">
<title>exit31</title>
<text text-anchor="middle" x="522.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 3</text>
</g>
<!-- c4&#45;&gt;exit31 -->
<g id="edge17" class="edge">
<title>c4&#45;&gt;exit31</title>
<path fill="none" stroke="black" d="M522.88,-68.58C522.88,-56.37 522.88,-40.08 522.88,-27.65"/>
<polygon fill="black" stroke="black" points="526.38,-27.96 522.88,-17.96 519.38,-27.96 526.38,-27.96"/>
<text text-anchor="middle" x="529.62" y="-37.7" font-family="Times,serif" font-size="14.00">42</text>
</g>
<!-- exit44 -->
<g id="node25" class="node">
<title>exit44</title>
<text text-anchor="middle" x="574.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c4&#45;&gt;exit44 -->
<g id="edge18" class="edge">
<title>c4&#45;&gt;exit44</title>
<path fill="none" stroke="black" d="M533.65,-70.1C542.48,-57.07 554.92,-38.71 563.82,-25.57"/>
<polygon fill="black" stroke="black" points="566.5,-27.85 569.21,-17.61 560.71,-23.92 566.5,-27.85"/>
<text text-anchor="middle" x="579.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit32 -->
<g id="node20" class="node">
<title>exit32</title>
<text text-anchor="middle" x="628.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 3</text>
</g>
<!-- c5&#45;&gt;exit32 -->
<g id="edge20" class="edge">
<title>c5&#45;&gt;exit32</title>
<path fill="none" stroke="black" d="M629.65,-68.58C629.49,-56.37 629.28,-40.08 629.11,-27.65"/>
<polygon fill="black" stroke="black" points="632.62,-27.91 628.99,-17.96 625.62,-28 632.62,-27.91"/>
<text text-anchor="middle" x="635.62" y="-37.7" font-family="Times,serif" font-size="14.00">42</text>
</g>
<!-- exit45 -->
<g id="node26" class="node">
<title>exit45</title>
<text text-anchor="middle" x="680.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c5&#45;&gt;exit45 -->
<g id="edge21" class="edge">
<title>c5&#45;&gt;exit45</title>
<path fill="none" stroke="black" d="M640.44,-70.1C649.1,-57.07 661.3,-38.71 670.03,-25.57"/>
<polygon fill="black" stroke="black" points="672.7,-27.88 675.32,-17.61 666.87,-24.01 672.7,-27.88"/>
<text text-anchor="middle" x="686.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit12 -->
<g id="node16" class="node">
<title>exit12</title>
<text text-anchor="middle" x="739.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 1</text>
</g>
<!-- c6&#45;&gt;exit12 -->
<g id="edge24" class="edge">
<title>c6&#45;&gt;exit12</title>
<path fill="none" stroke="black" d="M752.32,-68.97C749.73,-56.51 746.21,-39.66 743.58,-27.04"/>
<polygon fill="black" stroke="black" points="747.09,-26.69 741.62,-17.62 740.23,-28.12 747.09,-26.69"/>
<text text-anchor="middle" x="754.62" y="-37.7" font-family="Times,serif" font-size="14.00">22</text>
</g>
<!-- exit46 -->
<g id="node27" class="node">
<title>exit46</title>
<text text-anchor="middle" x="791.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c6&#45;&gt;exit46 -->
<g id="edge25" class="edge">
<title>c6&#45;&gt;exit46</title>
<path fill="none" stroke="black" d="M763.69,-69.35C769.64,-56.65 777.81,-39.24 783.82,-26.42"/>
<polygon fill="black" stroke="black" points="786.89,-28.12 787.97,-17.58 780.55,-25.15 786.89,-28.12"/>
<text text-anchor="middle" x="802.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
<!-- exit47 -->
<g id="node28" class="node">
<title>exit47</title>
<text text-anchor="middle" x="857.88" y="-3.2" font-family="Times,serif" font-size="14.00">case 4</text>
</g>
<!-- c7&#45;&gt;exit47 -->
<g id="edge27" class="edge">
<title>c7&#45;&gt;exit47</title>
<path fill="none" stroke="black" d="M847.76,-68.97C849.85,-56.64 852.66,-40.01 854.8,-27.43"/>
<polygon fill="black" stroke="black" points="858.24,-28.07 856.46,-17.63 851.33,-26.9 858.24,-28.07"/>
<text text-anchor="middle" x="876.5" y="-37.7" font-family="Times,serif" font-size="14.00">wildcard</text>
</g>
</g>
</svg>
<!--
digraph {
  a0 [label = a];
  b0 [label = b];
  b1 [label = b];
  b2 [label = b];
  c0 [label = c];
  c1 [label = c];
  c2 [label = c];
  c3 [label = c];
  c4 [label = c];
  c5 [label = c];
  c6 [label = c];
  c7 [label = c];
  node [shape = plain];
  exit00 [label = "case 0"];
  exit10 [label = "case 1"];
  exit11 [label = "case 1"];
  exit12 [label = "case 1"];
  exit20 [label = "case 2"];
  exit30 [label = "case 3"];
  exit31 [label = "case 3"];
  exit32 [label = "case 3"];
  exit40 [label = "case 4"];
  exit41 [label = "case 4"];
  exit42 [label = "case 4"];
  exit43 [label = "case 4"];
  exit44 [label = "case 4"];
  exit45 [label = "case 4"];
  exit46 [label = "case 4"];
  exit47 [label = "case 4"];
  a0 -> b0 [label = 10];
  b0 -> c0 [label = 11];
  c0 -> exit00 [label = 12];
  c0 -> exit40 [label = wildcard];
  b0 -> c1 [label = 21];
  c1 -> exit10 [label = 22];
  c1 -> exit41 [label = wildcard];
  b0 -> c2 -> exit42 [label = wildcard];
  a0 -> b1 [label = 30];
  b1 -> c3 [label = 21];
  c3 -> exit11 [label = 22];
  c3 -> exit30 [label = 42];
  c3 -> exit43 [label = wildcard];
  b1 -> c4 [label = 31];
  c4 -> exit20 [label = 32];
  c4 -> exit31 [label = 42];
  c4 -> exit44 [label = wildcard];
  b1 -> c5 [label = wildcard];
  c5 -> exit32 [label = 42];
  c5 -> exit45 [label = wildcard];
  a0 -> b2 [label = wildcard];
  b2 -> c6 [label = 21];
  c6 -> exit12 [label = 22];
  c6 -> exit46 [label = wildcard];
  b2 -> c7 -> exit47 [label = wildcard];
}
-->
<figcaption>A decision tree for our "match a, b, c" example.</figcaption>
</figure>

This approach brings us advantages, albeit not without downsides. One benefit is
that its trees guarantee that every value will only need to be tested once at
runtime. We can always move forward at each decision point without backtracking.

We also get some features for "free" with this algorithm. Detecting unused
patterns is simple. When you merge a new pattern into an existing tree, just
check to see if the resulting tree differs from the original. If it doesn't,
then it means that all of the new pattern's cases were covered already, ergo
it's unused.

It's also easy to identify non-exhaustive sequences of patterns. You just need
to traverse the tree until you find a node without a wildcard (or, for unions or
enums, until you find a node missing one of its cases).

This tree also represents everything you need for runtime instructions. It tells
you exactly how to scan the data to find each possible match.

So we have one algorithm that gives us dead code analysis, non-exhaustive match
analysis, and runtime instructions all at once. What's the downside?

Pattern-matching aficionados have probably noticed a glaring issue with this
strategy. Most compilers avoid wildcard expansion because it leads to an
exponential explosion in output size. Just look at the graph above and how many
times the paths to four cases get multiplied. While this is a real concern (my
own tests in the Acutis repository produce some quite large outputs), I decided
that it was a cost I could afford. Acutis’ practical application is with simple
patterns. The problematic templates are mostly pathological, and the mildly
concerning ones have not caused any issues in practice yet.

It's also not an easy algorithm to implement. It's long, is difficult to debug,
uses advanced OCaml features, and is brittle to changes. But, from what I've
seen, pattern-matching compilation is complex no matter what algorithm you use.
So I'll take it.

Either way, it took me long enough to figure this one out, so I'm not in a rush
to invent a new algorithm all over again.

### Further reading

- [The Acutis matching interface](https://johnridesa.bike/acutis/api/acutis/Acutis_internals/Matching/index.html).
- [The Acutis matching implementation](https://github.com/johnridesabike/acutis/blob/master/lib/matching.ml).

## Template components, or: why Acutis doesn't have functions

Acutis templates can include other templates, otherwise known to as components.
It does so with an XML-inspired key-value syntax with a closing backslash.

```acutis
{% Header title="My title" / %}

{% Body %}
  Content can go inside a component like this.
{% /Body %}
```

In the above example, a `Header` and `Body` template are both included using the
data supplied to their parameters ("props"). Components in Acutis only have
access to the data they're directly supplied; they don't automatically inherit
everything in their parent template. I like to keep everything simple and
explicit.

The Acutis language lacks something that's standard in just about every other
template language: functions, filters, shortcodes, or whatever else other
languages call them. In Acutis, template components are analogous to functions,
and can be implemented as functions exactly in your language of choice. You just
need a function that returns a string (or a promise of a string for async
template), and then you can use the Acutis API to define your function's type
scheme.

I believe this design gives Acutis a pragmatic balance to its limited power. If
you want to do something that requires a general-purpose language with more
expressiveness (and you will eventually), then you can just call one and do
whatever you need with that.

After enough trouble building this language that simply prints text, I'm happy
to outsource bigger features to the professionals.

## The many Acutis runtimes, or: how I added more languages into my language

The data structure that represents a compiled Acutis template neatly maps to
runtime instructions. This made it simple for me to compose a set of functions
that takes this structure, takes some input data, and "folds" across it to
render the template.

But there was one problem. I thought this was _too_ simple. A mere interpreter
like this seemed hardly fitting for a statically-typed, compiled language like
Acutis. What was the fun of going through all of these compile steps if the end
result was just a simple fold function? Surely I could do better.

I wanted a compile target, and so I began work on a new module that takes that
same data structure and maps it to another data structure that represents
JavaScript commands. But soon I had more problems. Representing JavaScript (or
any language) as a data structure is quite tedious and error-prone. I had to
juggle two incompatible runtimes along with a structure which needed to fit both
of them. What happens when I change some internal detail in the
pattern-matching, or when I decide to add yet-another compile target?

Fortunately, we have an elegant way to unify all of this together. Using
"tagless final" style, we can write only one set of folding functions and let
them either execute the code, print JavaScript, or do anything else we need.

<figure class="alignwide">
<svg viewBox="0.00 0.00 284.66 251.00" style="max-width: 285px; max-height: 251px;">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 247)">
<polygon fill="white" stroke="none" points="-4,4 -4,-247 280.66,-247 280.66,4 -4,4"/>
<g id="clust1" class="cluster">
<title>cluster_runtime</title>
<polygon fill="lightgrey" stroke="black" points="76,-64 76,-182 208,-182 208,-64 76,-64"/>
</g>
<!-- Decodes into internal\ndata structure -->
<g id="node1" class="node">
<title>Decodes into internal\ndata structure</title>
<text text-anchor="middle" x="142" y="-160.7" font-family="Times,serif" font-size="14.00">Decodes into internal</text>
<text text-anchor="middle" x="142" y="-144.2" font-family="Times,serif" font-size="14.00">data structure</text>
</g>
<!-- Executes template\ninstructions -->
<g id="node2" class="node">
<title>Executes template\ninstructions</title>
<text text-anchor="middle" x="134" y="-91.7" font-family="Times,serif" font-size="14.00">Executes template</text>
<text text-anchor="middle" x="134" y="-75.2" font-family="Times,serif" font-size="14.00">instructions</text>
</g>
<!-- Decodes into internal\ndata structure&#45;&gt;Executes template\ninstructions -->
<g id="edge1" class="edge">
<title>Decodes into internal\ndata structure&#45;&gt;Executes template\ninstructions</title>
<path fill="none" stroke="black" d="M140.18,-141.3C139.28,-133.76 138.17,-124.44 137.14,-115.79"/>
<polygon fill="black" stroke="black" points="140.65,-115.66 135.99,-106.15 133.7,-116.49 140.65,-115.66"/>
</g>
<!-- Error message -->
<g id="node6" class="node">
<title>Error message</title>
<ellipse fill="none" stroke="black" cx="212" cy="-18" rx="64.66" ry="18"/>
<text text-anchor="middle" x="212" y="-12.95" font-family="Times,serif" font-size="14.00">Error message</text>
</g>
<!-- Decodes into internal\ndata structure&#45;&gt;Error message -->
<g id="edge6" class="edge">
<title>Decodes into internal\ndata structure&#45;&gt;Error message</title>
<path fill="none" stroke="black" d="M161.97,-141.14C172.74,-131.82 185.35,-119.03 193,-105 202.58,-87.41 207.34,-65.31 209.69,-47.91"/>
<polygon fill="black" stroke="black" points="213.17,-48.31 210.82,-37.98 206.21,-47.52 213.17,-48.31"/>
</g>
<!-- Result text -->
<g id="node5" class="node">
<title>Result text</title>
<ellipse fill="none" stroke="black" cx="79" cy="-18" rx="50.84" ry="18"/>
<text text-anchor="middle" x="79" y="-12.95" font-family="Times,serif" font-size="14.00">Result text</text>
</g>
<!-- Executes template\ninstructions&#45;&gt;Result text -->
<g id="edge4" class="edge">
<title>Executes template\ninstructions&#45;&gt;Result text</title>
<path fill="none" stroke="black" d="M121.79,-72.3C115.24,-64.14 106.99,-53.87 99.49,-44.52"/>
<polygon fill="black" stroke="black" points="102.26,-42.38 93.27,-36.78 96.81,-46.77 102.26,-42.38"/>
</g>
<!-- Executes template\ninstructions&#45;&gt;Error message -->
<g id="edge5" class="edge">
<title>Executes template\ninstructions&#45;&gt;Error message</title>
<path fill="none" stroke="black" d="M151.31,-72.3C161.09,-63.71 173.52,-52.79 184.59,-43.07"/>
<polygon fill="black" stroke="black" points="186.76,-45.83 191.96,-36.6 182.14,-40.57 186.76,-45.83"/>
</g>
<!-- External\nJSON&#45;like data -->
<g id="node3" class="node">
<title>External\nJSON&#45;like data</title>
<text text-anchor="middle" x="142" y="-229.7" font-family="Times,serif" font-size="14.00">External</text>
<text text-anchor="middle" x="142" y="-213.2" font-family="Times,serif" font-size="14.00">JSON&#45;like data</text>
</g>
<!-- External\nJSON&#45;like data&#45;&gt;Decodes into internal\ndata structure -->
<g id="edge2" class="edge">
<title>External\nJSON&#45;like data&#45;&gt;Decodes into internal\ndata structure</title>
<path fill="none" stroke="black" d="M142,-210.3C142,-202.84 142,-193.65 142,-185.08"/>
<polygon fill="black" stroke="black" points="145.5,-185.16 142,-175.16 138.5,-185.16 145.5,-185.16"/>
</g>
<!-- External\ncomponents -->
<g id="node4" class="node">
<title>External\ncomponents</title>
<text text-anchor="middle" x="33" y="-160.7" font-family="Times,serif" font-size="14.00">External</text>
<text text-anchor="middle" x="33" y="-144.2" font-family="Times,serif" font-size="14.00">components</text>
</g>
<!-- External\ncomponents&#45;&gt;Executes template\ninstructions -->
<g id="edge3" class="edge">
<title>External\ncomponents&#45;&gt;Executes template\ninstructions</title>
<path fill="none" stroke="black" d="M56.17,-141.13C69.64,-132.19 86.83,-120.79 101.62,-110.98"/>
<polygon fill="black" stroke="black" points="103.28,-114.08 109.68,-105.64 99.41,-108.25 103.28,-114.08"/>
</g>
</g>
</svg>
<!--
digraph {
  subgraph cluster_runtime {
    node [shape = plain];
    style = filled;
    "Decodes into internal\ndata structure" ->
    "Executes template\ninstructions";
  }
  node [shape = plain];
  "External\nJSON-like data" -> "Decodes into internal\ndata structure";
  "External\ncomponents" -> "Executes template\ninstructions";
  node [shape = oval];
  "Executes template\ninstructions" -> {"Result text" "Error message"};
  "Decodes into internal\ndata structure" -> "Error message";
}
-->
<figcaption>A simplified overview of the Acutis runtime.</figcaption>
</figure>

To do this, we have to write our functions using semantics for a new, abstract
language. We then define those semantics in terms of OCaml functions. For
example, we define an `if` function which takes a boolean value and two
functions for the `then` and `else` paths. `let` is a function which takes an
expression and a function for what we do with that expression’s result. And so
on.
[You can see the entire semantics I use here](https://github.com/johnridesabike/acutis/blob/master/lib/instruct.ml).

Once we've defined language semantics and have written our folding functions
that use them, the next step is to define implementations. Executing the
semantics as OCaml code is easy. Our `if` function is simply
`fun b ~then_ ~else_ -> if b then then_ () else else_ ()`, a function wrapper
around the built-in `if` expression. Executing our functions like this just
renders the template.

Compiling to JavaScript means defining the language as a pretty-printer.
Executing a function calls the OCaml `Format` module to print code. For example,
our `if` function prints using an OCaml format string like this:
`"@[<hv 2>@[<hv 2>if (@,%a@;<0 -2>)@] {@ %a@;<1 -2>} else {@ %a@;<1 -2>}@]"`.
(That prints `if () {} else {}` with indentation.)

In practice, this composes and scales elegantly. Each component of this process
is independent enough that we can modify each separately, and adding new
features means just writing a couple more functions.

### Further reading

- [The Acutis tagless-final semantics interface](https://johnridesa.bike/acutis/api/acutis/Acutis_internals/Instruct/index.html).
- [The Acutis instructions implementation](https://github.com/johnridesabike/acutis/blob/master/lib/instruct.ml).
- [The Acutis renderer implementation](https://github.com/johnridesabike/acutis/blob/master/lib/render.ml).
- [The Acutis JavaScript printer implementation](https://github.com/johnridesabike/acutis/blob/master/lib/printJs.ml).
- [A tagless-final course](https://okmij.org/ftp/tagless-final/).
- [Using the OCaml Format module](https://ocaml.org/manual/5.2/api/Format_tutorial.html).

## Using Acutis in the real world, or: how I finally made a website out of this

With all of that machinery in place, we can now write some templates to make
some web pages.

Building a website requires more than just templates, though. So I called upon
the Eleventy static-site generator. Eleventy runs on Node.js and has a broad API
that includes support for custom templates engines.

We can package Acutis into JavaScript using the Js_of_ocaml compiler. And,
thanks, to Acutis template components being implementable as functions, we can
call virtually anything in the Node.js ecosystem while building our site. (I use
that for things like image optimization.)

This setup, compiling to JS and piggybacking on Eleventy, honestly adds more
complexity than I’m completely comfortable with. Eleventy itself is very
"JavaScript-y," for lack of a better term, and it relies on quirky JS features
which sometimes cause more harm than good. But it’s undeniably practical, and
implementing a whole static-site generator is not something I’m interested in at
this time. Ultimately, I’m just glad that the Acutis code is flexible enough
that we can plug it into other programs like this with minimal fuss. If it
works, it works.

### Further reading

- [The Acutis Eleventy plugin](https://github.com/johnridesabike/acutis/blob/master/eleventy.js).
- [The Acutis OCaml-to-JavaScript implementation](https://github.com/johnridesabike/acutis/blob/master/js/acutis_js.ml).
- [The acutis-lang npm package](https://www.npmjs.com/package/acutis-lang).
- [The Js_of_ocaml documentation](https://ocsigen.org/js_of_ocaml/latest/manual/overview).
- [The Eleventy documentation](https://www.11ty.dev/).

## The end, for now

And that's how I built the web page that published this text. As usual for these
kinds or projects, it took several years of work to have a mostly-decent program
that does a task that I could have done with an existing tool in a fraction of
the time.

Do you want to use Acutis for your OCaml or JavaScript projects? I’m not
actively encouraging people to work with it, but that’s only because I don’t
have the time to respond to support questions. I also recognize that everything
about its design is based on my personal needs. If you think you could use
Actuis for something, or if you want to learn something from its code, then go
ahead; it's under an open-source license for a reason.

Meanwhile, I need to use Acutis to build a few thousand more websites to
eventually get a return on my time investment. Or maybe the real reward was the
esoteric compiler knowledge I gained along the way.
