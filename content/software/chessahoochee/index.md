---
title: "Chessahoochee: a free Swiss chess tournament manager"
author: John Jackson
date: 2019-06-08
updated: 2019-06-08
category: Software
thumbnail: ./icon_pretty_wide.svg
caption: The Chessahoochee logo.
---
Chessahoochee is a free, open-source app for managing swiss chess tournaments. I began working on it shortly after hosting a tournament at my public library, and I discovered a dearth of free software. Library employees deal with limited budgets and restrictive computer access, so purchasing, installing, and learning to use specialized tournament software is usually asking too much from them.

Chessahoochee aims to solve this problem. It's free, open source, and runs on almost any system. Although it (probably) won't replace a professional app in a rated tournament, it fills the gap for small-scale clubs or public events.

<div class="wp-block-button aligncenter download"><a class="wp-block-button__link" href="https://github.com/johnridesabike/chessahoochee">Download or fork on GitHub</a></div>

## Setup

Chessahoochee is built on top of the [React](https://reactjs.org/) web technology, so you can run a copy of it right in your browser, no installation required.

You can also download the standalone version. It is literally the same code as the web version, except it's wrapped in [Electron](https://electronjs.org/).

## How to use it

Tournaments use the Swiss-style system. For the unfamiliar, I recommend reading this summary of how they work, but Chessahoochee will manage all of the details for you. 

### Rounds

After you make a tournament and add your players, you can create a new round. There is a basic interface to help you pair players, but almost always you should use the "auto-pair players" button. Only resort to manual pairing if the auto-pair results cause a problem.

Once the players are paired, the pairings will be listed in a numbered order. These numbers would typically correspond to specific tables or chess sets you have. The round screen provides controls to rearrange these pairings, swap players' colors, or unmatch the players. Of course, you can also set the result of each match.

Once each match has been completed, you can begin pairing the next round.

You can add or remove players from your tournament at any time (such as late entries or players who have left). 

### Other tournament pages

Besides the rounds, there are a few other pages for each tournament:

- "Tournament status" displays the current standings alongside the most recent round's matches. This serves as a quick overview of the most pertient information, something to display in the background while the tournament is in progress.
- "Crosstable" displays a table showing every player's results with every other player, along with their rating gain or loss.
- "Score detail" displays exactly how the standings are calculated: which tiebreak methods are used, what order they're in, and what the result of each scoring method is for each player.

### Players

Outside of tournaments, there is also a page for managing players. If you open a player profile, you can specify which other players they should *never* be paired with. For example, you can use this to prevent matches between family members.

Ratings are calculated after each match and saved to each player's profile. This uses a very basic rating algorithm, and isn't predictive of a USCF or FIDE rating.

You can edit other player data as well, but you typically won't need to.

## Managing tournament data

Unlike most web apps, Chessahoochee doesn't keep your data in "the cloud" (e.g. someone else's computer). Instead, your data is saved to your brower's storage. This mostly works quite well, but it comes with caveats: a) moving data from one device to another is frustrating, b) backing up and making copies of data is frustrating, and c) browers manage their data differently from each other and are sometimes eager to quietly delete or restrict storage.

Chessahoochee addresses these in a couple of ways. First, you can manually load and save your data through its "options" screen. If you create a tournament on your work laptop and want to ensure its records are preserved, just go to the options and save the file somewhere safe. At any point, you can open Chessahoochee again and load the data. Second, you can use the portable Electron version for Windows (only the Windows version is portable). This will give you a standalone *.exe* file and a *data* folder that you can save where you want: a USB drive, your DropBox, wherever.

