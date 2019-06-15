---
title: "Chessahoochee: a Swiss chess tournament manager"
author: John Jackson
date: 2019-06-08
updated: 2019-06-15
category: Software
thumbnail: ./icon_pretty_wide.svg
caption: The Chessahoochee logo.
---
Chessahoochee is a free, open-source app for managing Swiss-style chess tournaments.

<p><div class="wp-block-button aligncenter download"><a class="wp-block-button__link" href="https://johnridesa.bike/chessahoochee/">Launch Chessahoochee in your browser</a></div></p>

<p><div class="wp-block-button aligncenter download"><a class="wp-block-button__link" href="https://github.com/johnridesabike/chessahoochee">Download or fork on GitHub</a></div></p>

## 🧐 About

I began working on Chessahoochee shortly after hosting a tournament at Chattahoochee Valley Libraries. I discovered a dearth of free software, and decided to change that. Library employees deal with limited budgets and restrictive computer access, so purchasing, installing, and learning to use specialized tournament software is usually a considerable barrier-to-entry.

Chessahoochee aims to solve this problem. It’s free, open source, and runs on almost any system. Although it (probably) won’t replace a professional app in a rated tournament, it fills the gap for small clubs or public events.

## 🔧 Setup

Chessahoochee is built on top of the [React](https://reactjs.org/) web technology, so you can run a copy of it right in your browser, no installation required.

You can also download the standalone version. It is literally the same code as the web version, except it’s wrapped in [Electron](https://electronjs.org/).

## ♟ How to use it

Tournaments use the Swiss-style system. For the unfamiliar, [my article on running your first chess tournament](http://programminglibrarian.org/articles/your-library%E2%80%99s-first-chess-tournament-opening-endgame) can explain how the logistics work. While understanding those is helpful, Chessahoochee should effortlessly manage the nitty-gritty for you.

### Rounds

After you make a tournament and add your players, you can create a new round. There is a basic interface to help you pair players, but you should almost always use the “auto-pair players” button. Typically, just resort to manual pairing if the auto-pair results cause a problem.

Once the players are paired, the pairings will be listed in a numbered order. These numbers would typically correspond to specific tables or chess sets you have. The round screen provides controls to rearrange these pairings, swap players’ colors, or unpair the players. Of course, you can also set the result of each match.

Once each match has been completed, you can begin pairing the next round.

You can add or remove players from your tournament at any time (such as late entries or players who have left). 

### Other tournament pages

Besides the rounds, there are a few other pages for each tournament:

- **Tournament status** displays the current standings alongside the most recent round’s matches. This serves as a quick overview of the most pertinent information, something to display in the background while the tournament is in progress.
- **Crosstable** displays a table showing every player’s results with every other player, along with their rating gain or loss.
- **Score detail** displays exactly how the standings are calculated: which tiebreak methods are used, what order they’re in, and what the result of each scoring method is for each player.

### Players

Outside of tournaments, there is also a page for managing players. If you open a player profile, you can specify which other players they should *never* be paired with. For example, you can use this to prevent matches between family members.

**Ratings** are calculated after each match and saved to each player’s profile. This uses a very basic rating algorithm, and isn’t predictive of a USCF or FIDE rating.

You can edit other player data as well, but you typically won’t need to.

## 🗃 Managing tournament data

Unlike most web apps, Chessahoochee doesn’t keep your data in “the cloud” (e.g. someone else’s computer). Instead, your data is saved to your browser’s storage. This mostly works quite well, but it comes with caveats: a) moving data from one device to another is frustrating, b) backing up and making copies of data is frustrating, and c) browsers manage their data differently from each other and are sometimes eager to quietly delete or restrict storage.

Chessahoochee addresses these in a couple of ways. First, you can manually load and save your data through its “options” screen. If you create a tournament on your work laptop and want to ensure its records are preserved, just go to the options and save the file somewhere safe. At any point, you can open Chessahoochee again and load the data. Second, you can use the portable Electron version for Windows (only the Windows version is portable). This will give you a standalone *.exe* file and a *data* folder that you can save where you want: a USB drive, your DropBox, wherever.

## 🤓 Behind the scenes

### Scoring

I modeled the scorekeeping code after the specifications by the USCF. When appropriate, the code should have comments indicating the specific section of the rulebook they come from. Not all scoring rules are implemented (yet), just the commonly used ones.

[USCF’s scoring guidelines can be found on their rulebook, which is freely downloadable here.](http://www.uschess.org/content/view/7752/369/)

### Pairing

Similar to scoring, the auto-pairing functions aim to comply with USCF recommendations. Pairing is a much trickier beast than scoring, however. The current implementation is “good enough” for now, and still needs more work.

### Source code

All code is [GPL v3.0 licensed](https://github.com/johnridesabike/chessahoochee/blob/master/LICENSE) which allows anyone the freedom to download and modify it. I welcome contributions in code, as well as suggestions and bug reports. [Visit the repository page to get started](https://github.com/johnridesabike/chessahoochee/).

## 🎣 The name

<blockquote style="float:right;border: none;margin-top: 0;">
<p><em>sit still<br>
as an old powerhouse<br>
and mind your moorings<br>
the river roaring</em></p>
<p>
- inscription along<br>
the Chattahoochee.
</p>
</blockquote>

Chattahoochee is a great and beautiful river that flows through the southeastern United States. It’s also the name of the area where I lived when I began working on this app, and it’s the name of public library that the app was created for.

Although I’m not drawn to punny software titles, transforming the name into *Chess*ahoochee was too easy to resist. And in addition to the word’s wonderful history and character, it’s just fun to say.
