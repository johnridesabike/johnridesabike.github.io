---
title: How I built my blog Bike Walk Life with free & freemium software
date: 2025-12-27
description: |
  I built my blog Bike Walk Life from scratch. This is a summary of the software
  tools I use.
layout: Page.acutis
tags: bikewalklife
---

I run my blog [Bike Walk Life] with a hodgepodge of free software and "freemium"
services. The specific combination of these is sometimes hard for even me to
remember, so this document is here to list what they are and each of their
purposes.

Everything listed here is either free to use or offers a free tier, and my blog
is small enough that the free tiers are always sufficient. I do not necessarily
recommend everything listed. My blog is more complex than it needs to be because
I enjoy experimenting.

This is a big-picture overview. If you want to look at the source code and see
every single dependency and how exactly the code uses them, you can browse it on
[SourceHut] or on [GitHub].

[Bike Walk Life]: https://bikewalk.life/

## Blog post format: Markdown

The meat of the blog is stored in **[Markdown]** files. In the interest of
posterity, I think of these files as the official versions of the blog posts. If
the website ever goes down, anyone can distribute these like any other text
file. No complicated reading software or database is needed.

[Markdown]: https://daringfireball.net/projects/markdown/syntax

## Source code: Git

The source code of the blog is stored and managed with **[Git]**. The Markdown
blog posts are stored in the same Git repository, so as much as possible is
under the same version control.

[Git]: https://git-scm.com/

## Build system: Eleventy

The blog is a static site, so every change rebuilds the entire site from
scratch. **[Eleventy]** is its static site generator, i.e. its build system.
It's very flexible, which I like, and uses the Node.js JavaScript platform,
which I'm ambivalent towards.

Eleventy's flexibility makes it compatible with any template language. I use my
custom language, **[Acutis]**, which is experimental and possibly
over-engineered.

Each change takes a little over a minute to rebuild the site. Most of that time
is not spent on building the site itself, but on secondary things like the
content management system (CMS). I consider the build speed good enough for my
needs.

[Eleventy]: https://www.11ty.dev/
[Acutis]: https://acutis.johnridesa.bike/

## Website hosting: Netlify & Cloudinary

I host the majority of the website on **[Netlify]**. It also includes a few
niceties that go beyond static sites, such as sending HTML form submissions to
my email and hosting custom API "functions" which I use in conjunction with my
CMS to upload images.

I store and host the images on **[Cloudinary]**. After trying to store them in
the Git repository alongside the Markdown files, I decided that images are a
poor fit for that.

[Netlify]: https://www.netlify.com/
[Cloudinary]: https://cloudinary.com/

## Source code hosting: GitHub

The Git project is stored in [this repository on **GitHub**][GitHub]. GitHub
happens to be the one Git platform that works with my CMS.

GitHub grows increasingly unpleasant to use, so I almost consider [this mirror
on SourceHut][SourceHut] to be the more-official version. However, my CMS
doesn't work with SourceHut. (Also, it's the only service here that doesn't have
a free tier.)

[GitHub]: https://github.com/johnridesabike/bikewalklife
[SourceHut]: https://git.sr.ht/~johnridesabike/bikewalk.life

## Content management system (CMS): TinaCMS

I mostly manage content with **[TinaCMS]**, or just Tina for short. Tina is
designed for editing sites stored in Git, like mine. It's reasonably
customizable and also integrates with Cloudinary.

I've considered going without a CMS and writing Markdown files directly. The
biggest reason why I stick to using Tina is because writing metadata for each
post (header images, dates, etc.) manually is tiring and error-prone, and a
proper CMS makes it simple. Being able to edit posts directly in a browser is
also valuable.

I only configured Tina to edit the blog posts and a few other settings. For
other changes to the website design, I use a plain-old text editor, usually
[Vim].

[TinaCMS]: https://tina.io/
[Vim]: https://www.vim.org/

## Usage analytics: GoatCounter

I use **[GoatCounter]** to count page visits. I don't need a lot of data for my
blog, but it's nice to know when a particular page gets traction.

[GoatCounter]: https://www.goatcounter.com/

## Syndication

The blog's syndication is founded on its **[Atom web feed]**. However, since a
lot of my readers don't use web feeds, **[Mailchimp]** provides an
RSS/Atom-to-email service. I configured it to send a digest of new posts on a
weekly schedule.

I manually syndicate links posts onto **[Bluesky]** and **[Mastodon]**, using
the [POSSE] model, "Publish (on your) Own Site, Syndicate Elsewhere." That
brings us to the "social" features...

[Atom web feed]: https://bikewalk.life/feed.xml
[Mailchimp]: https://mailchimp.com/
[Bluesky]: https://bsky.app/profile/bikewalk.life
[Mastodon]: https://indieweb.social/@bikewalklife
[POSSE]: https://indieweb.org/POSSE

## Likes, reposts, and comments

This area is experimental, and probably needing of the most explanation. It
relies on technologies from the "[IndieWeb]" community, whose concepts I find
intriguing and whose implementations I usually find disappointing.

As a static site, my blog does not process or host any interactive features. And
I see little reason to since most people would rather interact on social media
apps instead anyway. To make that experience a little smoother, I use a few
different **[Webmention]** services.

Webmention is a way for web pages to communicate things such as replies,
"likes," other social-media-isms. I use **[Webmention.io]** to receive
Webmentions on my blog's behalf. I also use **[Bridgy]** to "bridge" the blog
directly to social media platforms.

When I post on social media with a link to a blog post, Bridgy considers any
interactions with those social posts as interactions with my original blog post,
and it will send them to Webmention\.io.

(In case you're wondering why I only use Bluesky and Mastodon, those are the two
relevant services that Bridgy happens to currently support.)

I do not store these interactions myself or include them in my website build.
Instead, each page on my blog dynamically queries Webmention\.io and loads any
that exist for that page. It displays them in a familiar comment-section style
of format.

To make it easier for people visiting my blog directly to reply, each post has a
link to its syndicated cross-post to social media.

I frequently write blog posts that comment on news articles or other web pages.
My blog _technically_ sends "reply" Webmentions to linked pages. However, I'm
not aware of any linked page so far that has accepted Webmentions.

[IndieWeb]: https://indieweb.org/
[Webmention]: https://indieweb.org/Webmention
[Webmention.io]: https://webmention.io/
[Bridgy]: https://brid.gy/

## Questions?

Feel free to let me know if you have questions about how I use any of these
tools or services. You can reach me privately by emailing
<a href="{% Hexificate %}mailto:john@johnridesa.bike{% /Hexificate %}">
  {% Hexificate %}john@johnridesa.bike{% /Hexificate %}
</a>, or publicly on the social platforms above if that's your thing.
