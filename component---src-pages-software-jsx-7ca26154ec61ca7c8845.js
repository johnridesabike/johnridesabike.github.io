(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(e,t,o){"use strict";o.r(t),o.d(t,"Software",function(){return y}),o.d(t,"default",function(){return m});o(17);var n=o(216),a=o(211),r=o(212),i=o(205),s=o(209),u=o(0),l=o.n(u),c=o(206),h=o(203),d=o.n(h),f=o(186),p=o.n(f);function y(){var e=n.data,t=Object(a.a)(e.allMarkdownRemark.edges);return l.a.createElement("section",{className:d()(p.a.section)},l.a.createElement("header",{className:p.a.sectionHeader},l.a.createElement("h1",null,l.a.createElement(i.a.Software,{height:"1em",width:"1em"})," ","Software projects"),l.a.createElement("p",null,"The sundry software projects I've dabbled in over the years. I do mostly coding and web design.")),l.a.createElement("h2",{className:p.a.divider},"Apps and scripts"),l.a.createElement(r.a,Object(a.b)(t.coronate),"I created my own Swiss chess tournament manager with JavaScript and React. It's free and open source for anyone to use, but especially designed for the needs of libraries and small clubs."),l.a.createElement(r.a,Object.assign({},Object(a.b)(t["ios-shortcuts"]),{isWide:!1}),"These are a few iOS shortcut scripts that I've made."),l.a.createElement(r.a,Object(a.b)(t["wordroom-a-pythonista-dictionary-app"]),'This is an iOS dictionary "app" built with Pythonista. It saves the words you look up and your notes on them.'),l.a.createElement("h2",{className:p.a.divider},"Web development"),l.a.createElement(r.a,Object(a.b)(t["weracoba-wordpress-theme"]),"(Currently defunct.) This is a custom WordPress theme I created from scratch. I don't update it anymore since I stopped using WordPress for this site."),l.a.createElement(r.a,Object.assign({},Object(a.b)(t["literacy-alliance-wordpress"]),{isWide:!1}),"In 2017, I redesigned a website for the local nonprofit Literacy Alliance using WordPress and SquareSpace."))}function m(){return l.a.createElement(s.a,null,l.a.createElement(c.a,{title:"Software",postSEO:!0}),l.a.createElement("main",{id:"main",className:"site-main page-content"},l.a.createElement(y,null)))}},202:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o(204),a=o(207);function r(e){return function t(o,r){switch(arguments.length){case 0:return t;case 1:return Object(a.a)(o)?t:Object(n.a)(function(t){return e(o,t)});default:return Object(a.a)(o)&&Object(a.a)(r)?t:Object(a.a)(o)?Object(n.a)(function(t){return e(t,r)}):Object(a.a)(r)?Object(n.a)(function(t){return e(o,t)}):e(o,r)}}}},204:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o(207);function a(e){return function t(o){return 0===arguments.length||Object(n.a)(o)?t:e.apply(this,arguments)}}},206:function(e,t,o){"use strict";var n=o(208),a=o(0),r=o.n(a),i=o(10),s=o.n(i),u=o(213),l=o.n(u);function c(e){var t=e.description,o=e.lang,a=e.meta,i=e.keywords,s=e.title,u=n.data.site,c=t||u.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:o},title:s,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},207:function(e,t,o){"use strict";function n(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}o.d(t,"a",function(){return n})},208:function(e){e.exports={data:{site:{siteMetadata:{title:"John Jackson",description:"Librarian portfolio & other projects.",author:"John Jackson"}}}}},211:function(e,t,o){"use strict";o(34),o(17);function n(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var a="function"==typeof Object.assign?Object.assign:function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),o=1,a=arguments.length;o<a;){var r=arguments[o];if(null!=r)for(var i in r)n(i,r)&&(t[i]=r[i]);o+=1}return t},r=o(204),i=Object(r.a)(function(e){return a.apply(null,[{}].concat(e))}),s=(o(82),o(12),o(202)),u=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function l(e,t,o){return function(){if(0===arguments.length)return o();var n=Array.prototype.slice.call(arguments,0),a=n.pop();if(!u(a)){for(var r=0;r<e.length;){if("function"==typeof a[e[r]])return a[e[r]].apply(a,n);r+=1}if(function(e){return null!=e&&"function"==typeof e["@@transducer/step"]}(a))return t.apply(null,n)(a)}return o.apply(this,arguments)}}o(59),o(45);var c=Object(r.a)(function(e){return!!u(e)||!!e&&("object"==typeof e&&(!function(e){return"[object String]"===Object.prototype.toString.call(e)}(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))}),h=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();function d(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,o){return t.apply(this,arguments)};case 3:return function(e,o,n){return t.apply(this,arguments)};case 4:return function(e,o,n,a){return t.apply(this,arguments)};case 5:return function(e,o,n,a,r){return t.apply(this,arguments)};case 6:return function(e,o,n,a,r,i){return t.apply(this,arguments)};case 7:return function(e,o,n,a,r,i,s){return t.apply(this,arguments)};case 8:return function(e,o,n,a,r,i,s,u){return t.apply(this,arguments)};case 9:return function(e,o,n,a,r,i,s,u,l){return t.apply(this,arguments)};case 10:return function(e,o,n,a,r,i,s,u,l,c){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}var f=Object(s.a)(function(e,t){return d(e.length,function(){return e.apply(t,arguments)})});function p(e,t,o){for(var n=o.next();!n.done;){if((t=e["@@transducer/step"](t,n.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n=o.next()}return e["@@transducer/result"](t)}function y(e,t,o,n){return e["@@transducer/result"](o[n](f(e["@@transducer/step"],e),t))}var m="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function g(e,t,o){if("function"==typeof e&&(e=function(e){return new h(e)}(e)),c(o))return function(e,t,o){for(var n=0,a=o.length;n<a;){if((t=e["@@transducer/step"](t,o[n]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n+=1}return e["@@transducer/result"](t)}(e,t,o);if("function"==typeof o["fantasy-land/reduce"])return y(e,t,o,"fantasy-land/reduce");if(null!=o[m])return p(e,t,o[m]());if("function"==typeof o.next)return p(e,t,o);if("function"==typeof o.reduce)return y(e,t,o,"reduce");throw new TypeError("reduce: list must be array or iterable")}var b=function(){return this.xf["@@transducer/init"]()},w=function(e){return this.xf["@@transducer/result"](e)},v=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=b,e.prototype["@@transducer/result"]=w,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),k=Object(s.a)(function(e,t){return new v(e,t)}),I=o(207);var O=Object(s.a)(function(e,t){return 1===e?Object(r.a)(t):d(e,function e(t,o,n){return function(){for(var a=[],r=0,i=t,s=0;s<o.length||r<arguments.length;){var u;s<o.length&&(!Object(I.a)(o[s])||r>=arguments.length)?u=o[s]:(u=arguments[r],r+=1),a[s]=u,Object(I.a)(u)||(i-=1),s+=1}return i<=0?n.apply(this,a):d(i,e(t,a,n))}}(e,[],t))}),j=(o(28),o(22),o(44),Object.prototype.toString),S=function(){return"[object Arguments]"===j.call(arguments)?function(e){return"[object Arguments]"===j.call(e)}:function(e){return n("callee",e)}}(),T=!{toString:null}.propertyIsEnumerable("toString"),x=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],E=function(){return arguments.propertyIsEnumerable("length")}(),A=function(e,t){for(var o=0;o<e.length;){if(e[o]===t)return!0;o+=1}return!1},W="function"!=typeof Object.keys||E?Object(r.a)(function(e){if(Object(e)!==e)return[];var t,o,a=[],r=E&&S(e);for(t in e)!n(t,e)||r&&"length"===t||(a[a.length]=t);if(T)for(o=x.length-1;o>=0;)n(t=x[o],e)&&!A(a,t)&&(a[a.length]=t),o-=1;return a}):Object(r.a)(function(e){return Object(e)!==e?[]:Object.keys(e)}),P=Object(s.a)(l(["fantasy-land/map","map"],k,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return O(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return g(function(o,n){return o[n]=e(t[n]),o},{},W(t));default:return function(e,t){for(var o=0,n=t.length,a=Array(n);o<n;)a[o]=e(t[o]),o+=1;return a}(e,t)}})),C=Object(s.a)(function(e,t){var o={};return o[e]=t,o});o.d(t,"a",function(){return L}),o.d(t,"b",function(){return R});var L=function(e){return i(P(function(e){return C(e.node.fields.slug.split("/")[2],e.node)},e))},R=function(e){return{isWide:null!==e.frontmatter.thumbnail,slug:e.fields.slug,thumbnailURL:e.frontmatter.thumbnail?e.frontmatter.thumbnail.publicURL:null,title:e.frontmatter.title}}},212:function(e,t,o){"use strict";o(17);var n=o(205),a=o(210),r=o(10),i=o.n(r),s=o(0),u=o.n(s),l=o(215),c=o(203),h=o.n(c),d=o(202),f=Object(d.a)(function(e,t){for(var o={},n={},a=0,r=e.length;a<r;)n[e[a]]=1,a+=1;for(var i in t)n.hasOwnProperty(i)||(o[i]=t[i]);return o}),p=o(187),y=o.n(p);function m(e){return e.isExternal?u.a.createElement("a",Object.assign({rel:"external",href:e.to},f(["isExternal","to"],e)),e.children):u.a.createElement(a.a,f(["isExternal"],e),e.children)}m.propTypes={children:i.a.node,isExternal:i.a.bool,to:i.a.string};var g=function(e){var t,o=e.isExternal,a=e.isWide,r=e.slug,i=e.title,s=e.thumbnailURL,c=e.children,d=e.className;return u.a.createElement("article",{className:h()(y.a.excerpt,d,(t={},t[""+y.a.isWide]=a,t))},u.a.createElement("header",{className:"has-ui-font"},u.a.createElement("h3",{className:h()("has-body-font","has-medium-font-size","has-no-text-transform",y.a.title)},u.a.createElement(m,{to:r,rel:"bookmark",isExternal:o},i," ",o&&u.a.createElement(n.a.ExternalLink,null)))),u.a.createElement("div",{className:y.a.content},s&&u.a.createElement("figure",{className:h()("full-bleed-small",y.a.coverFigure)},u.a.createElement(m,{to:r,className:y.a.coverLink,"aria-hidden":"true",tabIndex:"-1",isExternal:o},u.a.createElement("img",{width:"128",height:"96",src:s,className:y.a.coverImg,alt:""}))),u.a.createElement("p",{className:h()("has-small-font-size",y.a.text)},c),u.a.createElement(l.a,null,u.a.createElement(m,{to:r,className:h()("button-link__link"),rel:"bookmark",isExternal:o},"Open ",i))))};g.propTypes={children:i.a.node,className:i.a.string,isExternal:i.a.bool,isWide:i.a.bool,slug:i.a.string,thumbnailURL:i.a.string,title:i.a.string};t.a=g},216:function(e){e.exports={data:{allMarkdownRemark:{totalCount:7,edges:[{node:{fields:{category:"software",slug:"/software/contextual-feed-widget-wordpress-plugin/"},excerpt:"My “Contextual Feed Widget” plugin is now live on the WordPress Plugin Directory. Now you can easily add it to your own website. Contextual Feed Widget (and I’m open to suggestions for a better name) is a Wordpress plugin that displays a list of feed links that are appropriate for the page that’s currently open. For example, you’ll see a link to a category feed when viewing a category. I developed it for johnridesa.bike, and you can see it active on almost every page here (including this page). It’s a simple plugin and I doubt anyone will have much of a problem using it. If you do have any issues or feature suggestions, you can browse the code or submit an issue on the GitHub repository, which is where I do most of my development.",timeToRead:1,frontmatter:{title:"Contextual Feed Widget WordPress Plugin",date:"November 13, 2018",ISODate:"2018-11-13T00:00:00.000Z",thumbnail:null}}},{node:{fields:{category:"software",slug:"/software/weracoba-wordpress-theme/"},excerpt:"Weracoba is my custom-built theme based on Underscores. Until I switched away from WordPress, I used it to power the site here on johnridesa.bike. A few key ideas guide its design: minimal use of widgets, major use of categories, and a focus on reading content. Since I keep more than just typical \"blog\" content on my website, this theme helps organize the different categories. Current status I was heavily developing this theme for about a year while I used it on my website. Since I stopped using WordPress, development has officially ended. Feel free to download or fork the original, but be aware that there are a few lingering bugs that I'll probably never fix. I tried to follow best practices and introduce a few cutting-edge ideas (at the time). I hope the code is useful to someone learning to develop their own theme.  A lot of the ideas and stylesheets are still present on this website's design, although without the WordPress baggage.",timeToRead:1,frontmatter:{title:"Weracoba WordPress Theme",date:"August 16, 2018",ISODate:"2018-08-16T00:00:00.000Z",thumbnail:null}}},{node:{fields:{category:"software",slug:"/software/ios-shortcuts/"},excerpt:"These are a few shortcut scripts I've made for Apple's iOS Shortcuts app. You know how some websites will include a helpful \"this article takes X minutes to read\" message? I wanted that feature on every website, so I made the Reading Time shortcut. It does exactly what you'd expect: takes an article, does some math on the number of words, and outputs a rough estimate of how long it will take you to read it. This shortcut sends anything to your inbox. No frills, no nonsense. Send to Inbox is probably my most-used shortcut. Send Photo to Inbox opens your camera to snap a photo and then sends it to your inbox. It’s useful for when you come across a poster or other visual bit of information that you need to process later On a bike, the weather can become harsh without proper clothing. Cold air can numb your hands, the hot sun can soak you in sweat, and rain can just plain soak you. To make it more complicated,  you can’t always trust the weather when you walk out the door. It may be drastically different during your ride home. Bike Commute Clothes will look at your calendar and give you the important weather details for the times that matter. It then provides clothing recommendations, such as if you should bring a rain jacket, or if it’s too hot to wear your office clothes. This shortcut is probably my most subjective. It’s based on my climate, my biking habits, and my preferences. It probably won’t be suitable if you plan on biking for an hour through a blizzard, but you are free to customize it to suit your own lifestyle The Roman Catholic teaching on abstaining from meat is fairly straightforward, except for when it’s not (canons 1249-1253). If you’re having trouble keeping up with solemnities, Can I Eat Meat Today? checks if today falls on a Friday or other day of abstinence, and then it checks if today is a solemnity which would overrule the abstinence obligation. This won’t account for any of your local rules or exceptions (e.g. USCCB). So if you follow a non-meat-related fasting practice, just edit that into the shortcut instead. Powered by the Church Calendar API. About my shortcuts As the iOS Shortcuts app inspires a new generation of script junkies to program their iPhones and iPads, I’ve seen a lot of shortcuts plagued by bloat and unneeded complexity. Although I understand the urge to use Shortcuts as a means to make your own “app,” I see this as ultimately an attempt to square a circle. By the time you’ve hacked together a user setting panel, iCloud storage, updater, and subroutines, you’ve created neither a good app nor a good shortcut. Like writing a sonnet, writing a good shortcut means only using the exact number of lines you need to reach the final couplet. My shortcuts are as trim as they can afford. They aren’t versioned. Because iOS Shortcuts makes editing them so easy, I assume that every download is essentially a fork. My analogy is that each shortcut is like the knowledge of a real-life shortcut. If I figure out a faster way of completing a task and then share it with someone, that person is free to use that knowledge however they want.  So I hope you find these useful. Feel free to change, or do whatever else, you want with them.",timeToRead:3,frontmatter:{title:"iOS Shortcuts",date:"October 08, 2018",ISODate:"2018-10-08T00:00:00.000Z",thumbnail:{publicURL:"/static/ios-shortcuts-53ab6e7fc8042b74eba77f815b511448.jpg"}}}},{node:{fields:{category:"software",slug:"/software/literacy-alliance-wordpress/"},excerpt:"The Literacy Alliance is a nonprofit organization dedicated to literacy education in Columbus, Georgia. Beginning in 2017, I redesigned their website (theliteracyalliance.org) from the ground up with WordPress. The new website highlights their current impact, their history, and streamlines the ability of users to volunteer, donate, or find educational resources. It's designed with modern web technologies, for users on desktop or mobile browsers.",timeToRead:1,frontmatter:{title:"Literacy Alliance WordPress Redesign",date:"August 15, 2018",ISODate:"2018-08-15T00:00:00.000Z",thumbnail:{publicURL:"/static/LA-logo-2018-dbb22961f216b3547d160f91bdeecb4c.png"}}}},{node:{fields:{category:"software",slug:"/software/wordroom-a-pythonista-dictionary-app/"},excerpt:"I just finished the first release of my iOS app, WordRoom. You can download it here. If you don’t have Pythonista for iOS, you can get it here. WordRoom is a bit different than other dictionary apps. While it does fetch definitions of words that you look up, it’s designed to create custom entries. You can write your own definitions, examples, or any other kind of notes. By using it, you build your own personal dictionary. This is based on an idea I’ve had for several years but never had the time or skills to create until now. When I look up a word, I always want to add to the definition. Often, the dictionary entry is dry and doesn’t match the word’s usage as I found it in the wild. I jot down notes such as the author who used it, the context, the time period when it was written, any ironic or humorous usage, what I like or dislike about the word, and so on. If I look up the same word again later, these notes are much more useful to me than what the dictionary offers. I tried keeping these notes on flash cards, notebooks, digital text documents, but every solution was too clunky. A dedicated app was what I needed. There are a lot of excellent dictionary apps on the market, so I don’t want to waste time duplicating their work. I’m especially fond of Terminology (which also supports writing custom notes, but in a more limited way). WordRoom is intended to be more of a companion to other apps rather than a replacement. I’ve open-sourced the code, which you can browse on GitHub. If you have any suggestions or bug reports, pease don’t hesitate to open an issue. Tips WordRoom includes a basic offline dictionary (from this repository). To get access to the complete online definitions, you'll need WordNik API Key, which is free for personal use. Once you have one, follow the instructions in WordRoom. Since this is just a free personal project, I’m not including my own API key with the app. To keep the code light, I haven't written any features like tags, categories, or favorites. If you want a better way of organizing your words, you can take advantage of the search feature. It will recognize #HashTags in your notes. Screenshots",timeToRead:2,frontmatter:{title:"WordRoom: A Dictionary App for iOS + Pythonista",date:"May 25, 2018",ISODate:"2018-05-25T00:00:00.000Z",thumbnail:null}}},{node:{fields:{category:"software",slug:"/software/coronate/"},excerpt:"Coronate is a free, open-source app for managing Swiss-style chess tournaments. 🧐 About I began working on Coronate shortly after hosting a tournament at Chattahoochee Valley Libraries. I discovered a dearth of free software, so I and decided to change that. Library employees deal with limited budgets and restrictive computer access, so purchasing, installing, and learning to use specialized tournament software is usually a considerable barrier-to-entry. Coronate aims to solve this problem. It’s free, open source, and runs on almost any system. Although it (probably) won’t replace a professional app in a rated tournament, it fills the gap for small clubs or public events. 🔧 Setup Coronate is built on top of the React web technology, so you can run a copy of it right in your browser, no installation required. You can also download the standalone version. It is literally the same code as the web version, except it’s wrapped in Electron. ♟ How to use it Tournaments use the Swiss-style system. For the unfamiliar, my article on running your first chess tournament can explain how the logistics work. While understanding those is helpful, Coronate should effortlessly manage the nitty-gritty for you. Rounds After you make a tournament and add your players, you can create a new round. There is a basic interface to help you pair players, but you should almost always use the “auto-pair players” button. Typically, just resort to manual pairing if the auto-pair results cause a problem. Once the players are paired, the pairings will be listed in a numbered order. These numbers would typically correspond to specific tables or chess sets you have. The round screen provides controls to rearrange these pairings, swap players’ colors, or unpair the players. Of course, you can also set the result of each match. Once each match has been completed, you can begin pairing the next round. You can add or remove players from your tournament at any time (such as late entries or players who have left).  Other tournament pages Besides the rounds, there are a few other pages for each tournament: Tournament status displays the current standings alongside the most recent round’s matches. This serves as a quick overview of the most pertinent information, something to display in the background while the tournament is in progress. Crosstable displays a table showing every player’s results with every other player, along with their rating gain or loss. Score detail displays exactly how the standings are calculated: which tiebreak methods are used, what order they’re in, and what the result of each scoring method is for each player. Players Outside of tournaments, there is also a page for managing players. If you open a player profile, you can specify which other players they should never be paired with. For example, you can use this to prevent matches between family members. Ratings are calculated after each match and saved to each player’s profile. This uses a very basic rating algorithm, and isn’t predictive of a USCF or FIDE rating. You can edit other player data as well, but you typically won’t need to. 🗃 Managing tournament data Unlike most web apps, Coronate doesn’t keep your data in “the cloud” (e.g. someone else’s computer). Instead, your data is saved to your browser’s storage. This mostly works quite well, but it comes with caveats: a) moving data from one device to another is frustrating, b) backing up and making copies of data is frustrating, and c) browsers manage their data differently from each other and are sometimes eager to quietly delete or restrict storage. Coronate addresses these in a couple of ways. First, you can manually load and save your data through its “options” screen. If you create a tournament on your work laptop and want to ensure its records are preserved, just go to the options and save the file somewhere safe. At any point, you can open Coronate again and load the data. Second, you can use the portable Electron version for Windows (only the Windows version is portable). This will give you a standalone .exe file and a data folder that you can save where you want: a USB drive, your DropBox, wherever. 🤓 Behind the scenes Scoring I modeled the scorekeeping code after the specifications by the USCF. When appropriate, the code should have comments indicating the specific section of the rulebook they come from. Not all scoring rules are implemented (yet), just the commonly used ones. USCF’s scoring guidelines can be found on their rulebook, which is freely downloadable here. Pairing Similar to scoring, the auto-pairing functions aim to comply with USCF recommendations. Pairing is a much trickier beast than scoring, however. The current implementation is “good enough” for now, and still needs more work. Source code All code is AGPL v3.0 licensed which allows anyone the freedom to download and modify it. I welcome contributions in code, as well as suggestions and bug reports. Visit the repository page to get started. Screenshots",timeToRead:4,frontmatter:{title:"Coronate: a Swiss chess tournament manager",date:"June 08, 2019",ISODate:"2019-06-08T00:00:00.000Z",thumbnail:{publicURL:"/static/logo_wide-55686f5ba063932537bf051684cd8df1.svg"}}}},{node:{fields:{category:"software",slug:"/software/librarything-svg-icon-code/"},excerpt:"I created my own version of the LibraryThing SVG icon, and below is the code so you can reuse it for your own project. On platforms that support SVG, this should be the most versatile and portable version of their logo. You can insert it directly into HTML documents, change the colors to match your theme, resize it, or make any other edits manually. And here's what it looks like: LibraryThing Icon This code will render the logo with a transparent “L,” which is useful for font-style icons that can blend into your own website’s theme (which is how I'm using it). If you prefer to preserve the white color, you can simply insert this line just before the  element: Download both styles of icon So why use this code? Although LibraryThing has several good graphics available on their press page, I needed something a bit different. The official LibraryThing SVG code is simply the text “L” styled with the Thomas Paine font. But since that’s only usable on devices that already have the font installed, we need something more portable. To make this icon, I downloaded the Thomas Paine font, converted it into SVG, and used that data to make the iconic “L.” After a little bit of tweaking, voilà! A new-and-improved LibraryThing SVG logo was ready to go. My own website uses the icon for my social links (I didn’t want LibraryThing to feel left out with just a generic icon), but I’m sure you can find other functions for it. Feel free to copy the code, modify it, use it for your own project, or do whatever you want. I obviously own nothing about this. Any copyrights and trademarks belong to their respective owners. Much thanks goes to LibraryThing for their ongoing work in making an independent and useful site for all of us bibliophiles.",timeToRead:7,frontmatter:{title:"LibraryThing SVG Icon",date:"January 24, 2019",ISODate:"2019-01-24T00:00:00.000Z",thumbnail:{publicURL:"/static/librarything-35f1fe7010463579ec9c7ff51201bba4.svg"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-software-jsx-7ca26154ec61ca7c8845.js.map