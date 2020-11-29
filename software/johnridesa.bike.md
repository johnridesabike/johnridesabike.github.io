---
title: "JohnRidesA.Bike: how I made this website"
date: 2020-01-25
description: |
  This page explains what technology I use to maintain this website, as well
  as how I solved a few problems along the way. It may be of interest to
  similarly-minded web developers.
thumbnail: null
layout: Page.acutis
tags: johnridesabike
---
I maintain [JohnRidesA.Bike] with a combination of two technologies:

[JohnRidesA.Bike]: https://johnridesa.bike/

## Gatsby ![Gatsby logo](/assets/vector/johnridesa.bike/gatsby.svg)

[Gatsby] is a static site generator (SSR) that uses [React] and [GraphQL]. I
store all of the site's content in Markdown files.

[Gatsby]: https://www.gatsbyjs.org/
[React]: https://reactjs.org/
[GraphQL]: https://graphql.org/

For a basic site like this, Gatsby sometimes feels like using a sledgehammer
to nail boards together. But despite being an overkill in some areas, it
includes some great features, which is why I stick to it. It's flexible,
hackable, and produces fast websites.

## Reason ![Reason logo](/assets/vector/johnridesa.bike/reason.svg)

[Reason] is an OCaml syntax and a toolchain that lets you use the JavaScript
ecosystem. Like OCaml, it uses a powerful type system (much safer and more
useful than languages like TypeScript). It also includes first-class support
for React-style JSX syntax. Most of the website's source code is written in
Reason.

[Reason]: https://reasonml.github.io/

Gatsby and GraphQL don't always play nicely with Reason, unfortunately.
Gatsby uses some compiler magic to generate pages and GraphQL queries, so
code written in Reason usually causes problems for it.

By identifying the boundaries of Gatsby's magic, I have been able to work
around it by separating raw JavaScript and Reason where necessary. Two main
problems I found, and their respective solutions, are:

- Gatsby generates its pages from JS files in its `/pages/` directory, but
  its rules for page filenames differs from Reason. I created a `/re/pages/`
  directory and wrote my pages in Reason. In `/pages/`, I created files for
  each page that just import the JS output from the Reason files.
- Gatsby's strict about how you write your GraphQL queries, and Reason
   doesn't play nicely with it. For each my queries, I wrote them in JS files
   and export them with `Gatsby.useStaticQuery` functions. On the Reason
   side, I just needed to bind to those functions.

There may be other ways to make Gatsby and Reason work together, but
following these patterns seems to work nicely. On the Reason side, I had to
write some functions to turn the queries into data useful for my Reason
components, but that wasn't difficult.

## Source Code

[Browse the source code here on GitHub][1]. If you have any interest in
exactly how I implemented a feature, the answer is probably there.

[1]: https://github.com/johnridesabike/johnridesabike.github.io
