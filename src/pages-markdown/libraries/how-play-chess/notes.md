---
title: "How to Play Chess: end notes"
date: 2019-03-18
description:  I've run a succesful chess program since 2017. At the time, I couldn't find any satisfactory guides to give to participants. This is one that I wrote myself which aims to cover all of the necessary knowledge without being too long or too short.
---
<nav class="post-nav-links">
<a href="../" class="prev">
← Back to main article
</a>
</nav>

To further develop your chess strategy, you should consider the guides on [lichess.org](https://lichess.org/) or any book written by a grandmaster (which I am not). I personally credit my library’s copy of _Bobby Fischer Teaches Chess_ as one of the most rewarding chess books I’ve read.

Feel free to use this text to develop your own handouts or teaching aides. I adapted everything from other resources (not the least of which was [good old Wikipedia](https://en.wikipedia.org/wiki/Glossary_of_chess)).

I generated all of the board diagrams with [python-chess](https://python-chess.readthedocs.io/en/latest/). In the original handout, the diagrams are simply tables made in Microsoft Word, which seemed hardly worth the frustration.

Here’s my Python script which generated the diagrams:

```python
#!/usr/bin/env python3
import chess
import chess.svg
kings = chess.Board('8/1k6/8/8/8/5K2/8/8 w - - 0 0')
queen = chess.Board('8/8/8/8/3Q4/8/8/8 w - - 0 0')
rook = chess.Board('8/8/8/5r2/8/8/8/8 w - - 0 0')
bishop = chess.Board('8/8/8/8/8/4B3/8/8 w - - 0 0')
knight = chess.Board('8/8/3ppp2/4n3/8/8/8/8 w - - 0 0')
pawns = chess.Board('8/8/5p2/8/8/8/2P5/8 w - - 0 0')
boards = {
    'King': {
        'board': kings,
        'squares': kings.attacks(chess.F3) | kings.attacks(chess.B7),
    },
    'Queen': {
        'board': queen,
        'squares': queen.attacks(chess.D4),
    },
    'Rook': {
        'board': rook,
        'squares': rook.attacks(chess.F5),
    },
    'Bishop': {
        'board': bishop,
        'squares': bishop.attacks(chess.E3),
    },
    'Knight': {
        'board': knight,
        'squares': knight.attacks(chess.E5),
    },
    'Pawn': {
        'board': pawns,
        'squares': pawns.attacks(chess.C2) | pawns.attacks(chess.F6),
        'arrows': [
            chess.svg.Arrow(chess.C3, chess.C3),
            chess.svg.Arrow(chess.C4, chess.C4),
            chess.svg.Arrow(chess.F5, chess.F5),
        ],
    },
    'Castling part 1': {
        'board': chess.Board('4k2r/4pppp/8/8/8/8/PPPPP3/R3K3 w - - 0 0'),
    },
    'Castling part 2': {
        'board': chess.Board('5rk1/4pppp/8/8/8/8/PPPPP3/2KR4 w - - 0 0'),
    },
    'En passant part 1': {
        'board': chess.Board('8/8/8/3Pp3/8/8/8/8 w - - 0 0'),
        'arrows': [chess.svg.Arrow(chess.E7, chess.E5)],
    },
    'En passant part 2': {
        'board': chess.Board('8/8/4P3/8/8/8/8/8 w - - 0 0'),
        'squares': [chess.E5],
        'arrows': [chess.svg.Arrow(chess.D5, chess.E6)],
    },
    'Checkmate': {
        'board': chess.Board('kQ6/8/2N5/8/8/8/8/4K3 b - - 1 0'),
        'check': chess.A8
    },
    'Stalemate': {'board': chess.Board('1Q6/8/k1K5/8/2N5/8/8/8 b - - 0 0')},
    'Fork': {
        'board': chess.Board('4k3/8/8/6K1/4n3/8/3Q4/8 b - - 0 0'),
        'check': chess.G5,
        'arrows': [
            chess.svg.Arrow(chess.E4, chess.D2),
            chess.svg.Arrow(chess.E4, chess.G5),
        ],
    },
    'Pin': {
        'board': chess.Board('3q4/5k2/8/3n4/8/8/6K1/3R4 b - - 0 0'),
        'arrows': [chess.svg.Arrow(chess.D1, chess.D8)],
    }
}
svg = '<?xml version="1.0" encoding="utf-8"?>'
svg += chess.svg.board(board=chess.Board(), coordinates=True, size=512)
with open('chess_start.svg', 'w') as file:
    file.write(svg)
for board in boards:
    svg = '<?xml version="1.0" encoding="utf-8"?>'
    svg += chess.svg.board(**boards[board], coordinates=False, size=256)
    with open('chess_' + board + '.svg', "w") as file:
        file.write(svg)
```
