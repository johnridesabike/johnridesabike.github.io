(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(t,e,n){"use strict";n.r(e),n.d(e,"Software",function(){return m}),n.d(e,"default",function(){return y});var r=n(185),a=n(180),o=n(181),i=n(174),c=n(178),u=n(0),s=n.n(u),l=n(175),f=n(172),d=n.n(f),p=n(154),h=n.n(p);function m(){var t=r.data,e=Object(a.a)(t.allMarkdownRemark.edges);return s.a.createElement("section",{className:d()(h.a.section)},s.a.createElement("header",{className:h.a.sectionHeader},s.a.createElement("h1",null,s.a.createElement(i.a.Software,{height:"1em",width:"1em"})," ","Software projects"),s.a.createElement("p",null,"These are the sundry software projects I've dabbled in over the last few years.")),s.a.createElement(o.a,Object(a.b)(e["ios-shortcuts"]),"These are a few iOS shortcut scripts that I've made."),s.a.createElement(o.a,Object(a.b)(e["wordroom-a-pythonista-dictionary-app"]),'This is an iOS dictionary "app" built with Pythonista. It saves the words you look up and your notes on them.'),s.a.createElement(o.a,Object(a.b)(e["weracoba-wordpress-theme"]),"(Currently defunct.) This is a custom WordPress theme I created from scratch. I don't update it anymore since I stopped using WordPress for this site."),s.a.createElement(o.a,Object(a.b)(e["literacy-alliance-wordpress"]),"In 2017, I redesigned a website for the local nonprofit Literacy Alliance using WordPress and SquareSpace."))}function y(){return s.a.createElement(c.a,null,s.a.createElement(l.a,{title:"Software",postSEO:!0}),s.a.createElement("main",{id:"main",className:"site-main page-content"},s.a.createElement(m,null)))}},171:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(173),a=n(176);function o(t){return function e(n,o){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(n)?e:Object(r.a)(function(e){return t(n,e)});default:return Object(a.a)(n)&&Object(a.a)(o)?e:Object(a.a)(n)?Object(r.a)(function(e){return t(e,o)}):Object(a.a)(o)?Object(r.a)(function(e){return t(n,e)}):t(n,o)}}}},173:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(176);function a(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},175:function(t,e,n){"use strict";var r=n(177),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(182),s=n.n(u);function l(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,c=t.title,u=r.data.site,l=e||u.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},176:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",function(){return r})},177:function(t){t.exports={data:{site:{siteMetadata:{title:"John Jackson",description:"Librarian portfolio & other projects.",author:"John Jackson"}}}}},180:function(t,e,n){"use strict";n(74);function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var a="function"==typeof Object.assign?Object.assign:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1,a=arguments.length;n<a;){var o=arguments[n];if(null!=o)for(var i in o)r(i,o)&&(e[i]=o[i]);n+=1}return e},o=n(173),i=Object(o.a)(function(t){return a.apply(null,[{}].concat(t))}),c=n(171),u=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function s(t,e,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),a=r.pop();if(!u(a)){for(var o=0;o<t.length;){if("function"==typeof a[t[o]])return a[t[o]].apply(a,r);o+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(a))return e.apply(null,r)(a)}return n.apply(this,arguments)}}var l=Object(o.a)(function(t){return!!u(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),f=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();function d(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,a){return e.apply(this,arguments)};case 5:return function(t,n,r,a,o){return e.apply(this,arguments)};case 6:return function(t,n,r,a,o,i){return e.apply(this,arguments)};case 7:return function(t,n,r,a,o,i,c){return e.apply(this,arguments)};case 8:return function(t,n,r,a,o,i,c,u){return e.apply(this,arguments)};case 9:return function(t,n,r,a,o,i,c,u,s){return e.apply(this,arguments)};case 10:return function(t,n,r,a,o,i,c,u,s,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}var p=Object(c.a)(function(t,e){return d(t.length,function(){return t.apply(e,arguments)})});function h(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function m(t,e,n,r){return t["@@transducer/result"](n[r](p(t["@@transducer/step"],t),e))}var y="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function b(t,e,n){if("function"==typeof t&&(t=function(t){return new f(t)}(t)),l(n))return function(t,e,n){for(var r=0,a=n.length;r<a;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return m(t,e,n,"fantasy-land/reduce");if(null!=n[y])return h(t,e,n[y]());if("function"==typeof n.next)return h(t,e,n);if("function"==typeof n.reduce)return m(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var g=function(){return this.xf["@@transducer/init"]()},w=function(t){return this.xf["@@transducer/result"](t)},O=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=g,t.prototype["@@transducer/result"]=w,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),j=Object(c.a)(function(t,e){return new O(t,e)}),v=n(176);var E=Object(c.a)(function(t,e){return 1===t?Object(o.a)(e):d(t,function t(e,n,r){return function(){for(var a=[],o=0,i=e,c=0;c<n.length||o<arguments.length;){var u;c<n.length&&(!Object(v.a)(n[c])||o>=arguments.length)?u=n[c]:(u=arguments[o],o+=1),a[c]=u,Object(v.a)(u)||(i-=1),c+=1}return i<=0?r.apply(this,a):d(i,t(e,a,r))}}(t,[],e))}),S=Object.prototype.toString,x=function(){return"[object Arguments]"===S.call(arguments)?function(t){return"[object Arguments]"===S.call(t)}:function(t){return r("callee",t)}}(),T=!{toString:null}.propertyIsEnumerable("toString"),I=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],k=function(){return arguments.propertyIsEnumerable("length")}(),P=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},R="function"!=typeof Object.keys||k?Object(o.a)(function(t){if(Object(t)!==t)return[];var e,n,a=[],o=k&&x(t);for(e in t)!r(e,t)||o&&"length"===e||(a[a.length]=e);if(T)for(n=I.length-1;n>=0;)r(e=I[n],t)&&!P(a,e)&&(a[a.length]=e),n-=1;return a}):Object(o.a)(function(t){return Object(t)!==t?[]:Object.keys(t)}),A=Object(c.a)(s(["fantasy-land/map","map"],j,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return E(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return b(function(n,r){return n[r]=t(e[r]),n},{},R(e));default:return function(t,e){for(var n=0,r=e.length,a=Array(r);n<r;)a[n]=t(e[n]),n+=1;return a}(t,e)}})),L=Object(c.a)(function(t,e){var n={};return n[t]=e,n});n.d(e,"a",function(){return N}),n.d(e,"b",function(){return W});var N=function(t){return i(A(function(t){return L(t.node.fields.slug.split("/")[2],t.node)},t))},W=function(t){return{slug:t.fields.slug,thumbnailURL:t.frontmatter.thumbnail?t.frontmatter.thumbnail.publicURL:null,title:t.frontmatter.title}}},181:function(t,e,n){"use strict";n(33);var r=n(174),a=n(179),o=n(4),i=n.n(o),c=n(0),u=n.n(c),s=n(184),l=n(172),f=n.n(l),d=n(171),p=Object(d.a)(function(t,e){for(var n={},r={},a=0,o=t.length;a<o;)r[t[a]]=1,a+=1;for(var i in e)r.hasOwnProperty(i)||(n[i]=e[i]);return n}),h=n(155),m=n.n(h);function y(t){return t.isExternal?u.a.createElement("a",Object.assign({rel:"external",href:t.to},p(["isExternal","to"],t)),t.children):u.a.createElement(a.a,p(["isExternal"],t),t.children)}y.propTypes={children:i.a.node,isExternal:i.a.bool,to:i.a.string};var b=function(t){var e,n=t.isExternal,a=t.slug,o=t.title,i=t.thumbnailURL,c=t.children,l=t.className;return u.a.createElement("article",{className:f()(m.a.excerpt,l,(e={},e[""+m.a.hasThumbnail]=null!==i,e))},u.a.createElement("header",{className:"has-ui-font"},u.a.createElement("h3",{className:f()("has-body-font","has-medium-font-size","has-no-text-transform",m.a.title)},u.a.createElement(y,{to:a,rel:"bookmark",isExternal:n},o," ",n&&u.a.createElement(r.a.ExternalLink,null)))),u.a.createElement("div",{className:m.a.content},i&&u.a.createElement("figure",{className:f()("full-bleed",m.a.coverFigure)},u.a.createElement(y,{to:a,className:m.a.coverLink,"aria-hidden":"true",tabIndex:"-1",isExternal:n},u.a.createElement("img",{width:"128",height:"96",src:i,className:m.a.coverImg,alt:""}))),u.a.createElement("p",{className:f()("has-small-font-size",m.a.text)},c),u.a.createElement(s.a,null,u.a.createElement(y,{to:a,className:f()("button-link__link"),rel:"bookmark",isExternal:n},"Open ",o))))};b.propTypes={children:i.a.node,className:i.a.string,isExternal:i.a.bool,slug:i.a.string,thumbnailURL:i.a.string,title:i.a.string};e.a=b},185:function(t){t.exports={data:{allMarkdownRemark:{totalCount:6,edges:[{node:{fields:{category:"software",slug:"/software/contextual-feed-widget-wordpress-plugin/"},excerpt:"My “Contextual Feed Widget” plugin is now live on the WordPress Plugin Directory. Now you can easily add it to your own website.Contextual…",timeToRead:1,frontmatter:{title:"Contextual Feed Widget WordPress Plugin",date:"November 13, 2018",ISODate:"2018-11-13T00:00:00.000Z",thumbnail:null}}},{node:{fields:{category:"software",slug:"/software/ios-shortcuts/"},excerpt:"These are a few shortcut scripts I've made for Apple's iOS Shortcuts app.You know how some websites will include a helpful \"this article…",timeToRead:3,frontmatter:{title:"iOS Shortcuts",date:"October 08, 2018",ISODate:"2018-10-08T00:00:00.000Z",thumbnail:{publicURL:"/static/ios-shortcuts-53ab6e7fc8042b74eba77f815b511448.jpg"}}}},{node:{fields:{category:"software",slug:"/software/literacy-alliance-wordpress/"},excerpt:"The Literacy Alliance is a nonprofit organization dedicated to literacy education in Columbus, Georgia. Beginning in 2017, I redesigned…",timeToRead:1,frontmatter:{title:"Literacy Alliance WordPress Redesign",date:"August 15, 2018",ISODate:"2018-08-15T00:00:00.000Z",thumbnail:{publicURL:"/static/LA-logo-2018-dbb22961f216b3547d160f91bdeecb4c.png"}}}},{node:{fields:{category:"software",slug:"/software/weracoba-wordpress-theme/"},excerpt:"Weracoba is my custom-built theme based on Underscores. Until I switched away from WordPress, I used it to power the site here on johnridesa…",timeToRead:1,frontmatter:{title:"Weracoba WordPress Theme",date:"August 16, 2018",ISODate:"2018-08-16T00:00:00.000Z",thumbnail:null}}},{node:{fields:{category:"software",slug:"/software/wordroom-a-pythonista-dictionary-app/"},excerpt:"I just finished the first release of my iOS app, WordRoom. You can download it here. If you don’t have Pythonista for iOS, you can get it…",timeToRead:2,frontmatter:{title:"WordRoom: A Dictionary App for iOS + Pythonista",date:"May 25, 2018",ISODate:"2018-05-25T00:00:00.000Z",thumbnail:null}}},{node:{fields:{category:"software",slug:"/software/librarything-svg-icon-code/"},excerpt:"I created my own version of the LibraryThing SVG icon, and below is the code so you can reuse it for your own project. On platforms that…",timeToRead:7,frontmatter:{title:"LibraryThing SVG Icon",date:"January 24, 2019",ISODate:"2019-01-24T00:00:00.000Z",thumbnail:{publicURL:"/static/librarything-35f1fe7010463579ec9c7ff51201bba4.svg"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-software-jsx-107946597d45197dc735.js.map