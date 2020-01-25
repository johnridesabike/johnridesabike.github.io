---
title: "JohnRidesA.Bike: how I made this website"
author: John Jackson
date: 2020-01-25
updated: 2020-01-25
category: Software
---
I maintain [JohnRidesA.bike](https://johnridesa.bike/) with a combination of
two technologies:

## Gatsby ![](./gatsby.svg)

[Gatsby](https://www.gatsbyjs.org/) is a static site generator (SSR) that uses
[React](https://reactjs.org/) and [GraphQL](https://graphql.org/). I store all
of the site's content in Markdown files.

For a basic site like this, Gatsby sometimes feels like using a sledgehammer
to nail boards together. But despite being an overkill in some areas, it
includes some great features, which is why I stick to it. It's flexible,
hackable, and produces fast websites.

## Reason ![](./reason.svg)

[Reason](https://reasonml.github.io/) is an OCaml syntax and a toolchain that lets you use the JavaScript
ecosystem. Like OCaml, it uses a powerful type system (much safer and more
useful than languages like TypeScript). It also includes first-class support
for React-style JSX syntax. Most of the website's source code is written in
Reason.

Gatsby and GraphQL don't always play nicely with Reason, unfortunately. Gatsby
uses some compiler magic to generate pages and GraphQL queries, so code
written in Reason usually causes problems for it.

By identifying the boundaries of Gatsby's magic, I have been able to work
around it by separating raw JavaScript and Reason where necessary. Two main
problems I found, and their respective solutions, are:

- Gatsby generates its pages from JS files in its `/pages/` directory, but its
  rules for page filenames differs from Reason. I created a `/re/pages/`
  directory and wrote my pages in Reason. In `/pages/`, I created files for
  each page that just import the JS output from the Reason files.
- Gatsby's strict about how you write your GraphQL queries, and Reason doesn't
  play nicely with it. For each my queries, I wrote them in JS files and export
  them with `Gatsby.useStaticQuery` functions. On the Reason side, I just
  needed to bind to those functions.

There may be other ways to make Gatsby and Reason work together, but following
these patterns seems to work nicely. On the Reason side, I had to write some
functions to turn the queries into data useful for my Reason components, but
that wasn't difficult.

## Source Code

[Browse the source code here on GitHub](https://github.com/johnridesabike/johnridesabike.github.io). If you have any interest in exactly how I implemented a feature, the answer is probably there.
