---
title: "WordRoom: A Dictionary App for iOS + Pythonista"
author: John Jackson
date: 2018-05-25
updated: 2018-05-25
---
I just finished the first release of my iOS app, WordRoom. [You can download it here](https://github.com/johnridesabike/WordRoom/releases/latest). If you don’t have [Pythonista for iOS, you can get it here](http://omz-software.com/pythonista/).

WordRoom is a bit different than other dictionary apps. While it does fetch definitions of words that you look up, it’s designed to create custom entries. You can write your own definitions, examples, or any other kind of notes. By using it, you build your own personal dictionary.

This is based on an idea I’ve had for several years but never had the time or skills to create until now. When I look up a word, I always want to add to the definition. Often, the dictionary entry is dry and doesn’t match the word’s usage as I found it in the wild. I jot down notes such as the author who used it, the context, the time period when it was written, any ironic or humorous usage, what I like or dislike about the word, and so on. If I look up the same word again later, these notes are much more useful to me than what the dictionary offers. I tried keeping these notes on flash cards, notebooks, digital text documents, but every solution was too clunky. A dedicated app was what I needed.

There are a lot of excellent dictionary apps on the market, so I don’t want to waste time duplicating their work. I’m especially fond of [Terminology](https://agiletortoise.com/terminology/) (which also supports writing custom notes, but in a more limited way). WordRoom is intended to be more of a companion to other apps rather than a replacement.

I’ve open-sourced the code, which [you can browse on GitHub](https://github.com/johnridesabike/WordRoom). If you have any suggestions or bug reports, pease don’t hesitate to open an issue.

## Tips

WordRoom includes a basic offline dictionary ([from this repository](https://github.com/johnridesabike/OPTED-to-JSON)). To get access to the complete online definitions, you'll need [WordNik API Key](https://developer.wordnik.com/), which is free for personal use. Once you have one, follow the instructions in WordRoom. Since this is just a free personal project, I’m not including my own API key with the app.

To keep the code light, I haven't written any features like tags, categories, or favorites. If you want a better way of organizing your words, you can take advantage of the search feature. It will recognize #HashTags in your notes.

## Screenshots

![WordRoom Screenshot 1](./fullsizeoutput_e76.jpeg)

![WordRoom Screenshot 2](./fullsizeoutput_e77.jpeg)

![WordRoom Screenshot 3](./fullsizeoutput_e75.jpeg)

![WordRoom Screenshot 4](./fullsizeoutput_e78.jpeg)
