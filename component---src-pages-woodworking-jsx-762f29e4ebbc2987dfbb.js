(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(t,e,n){"use strict";n.r(e),n.d(e,"Woodworking",function(){return b}),n.d(e,"default",function(){return m});var r=n(186),a=n(180),o=n(181),i=n(174),c=n(178),u=n(0),l=n.n(u),s=n(175),f=n(172),d=n.n(f),p=n(154),h=n.n(p);function b(){var t=r.data,e=Object(a.a)(t.allMarkdownRemark.edges);return l.a.createElement("section",{className:d()(h.a.section)},l.a.createElement("header",{className:h.a.sectionHeader},l.a.createElement("h1",null,l.a.createElement(i.a.Tool,{height:"1em",width:"1em"})," ","Woodworking projects"),l.a.createElement("p",null,"Sometimes I build furniture, and these are the guides I wrote for them.")),l.a.createElement(o.a,Object(a.b)(e["marble-top-chessboard-end-table"]),"I made a custom end-table with an old marble chessboard and some two-by-fours. This guide covers how it was done, and some tips for building your own."),l.a.createElement(o.a,Object(a.b)(e["standing-desk-converter-diy"]),"I turned a old, regular desk into a fancy new standing desk. This covers how I did it, how you can make your own, and some general tips about standing desks."))}function m(){return l.a.createElement(c.a,null,l.a.createElement(s.a,{title:"Woodworking",postSEO:!0}),l.a.createElement("main",{id:"main",className:"site-main page-content"},l.a.createElement(b,null)))}},171:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(173),a=n(176);function o(t){return function e(n,o){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(n)?e:Object(r.a)(function(e){return t(n,e)});default:return Object(a.a)(n)&&Object(a.a)(o)?e:Object(a.a)(n)?Object(r.a)(function(e){return t(e,o)}):Object(a.a)(o)?Object(r.a)(function(e){return t(n,e)}):t(n,o)}}}},173:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(176);function a(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},175:function(t,e,n){"use strict";var r=n(177),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(182),l=n.n(u);function s(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,c=t.title,u=r.data.site,s=e||u.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=s},176:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",function(){return r})},177:function(t){t.exports={data:{site:{siteMetadata:{title:"John Jackson",description:"Librarian portfolio & other projects.",author:"John Jackson"}}}}},180:function(t,e,n){"use strict";n(74);function r(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var a="function"==typeof Object.assign?Object.assign:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1,a=arguments.length;n<a;){var o=arguments[n];if(null!=o)for(var i in o)r(i,o)&&(e[i]=o[i]);n+=1}return e},o=n(173),i=Object(o.a)(function(t){return a.apply(null,[{}].concat(t))}),c=n(171),u=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),a=r.pop();if(!u(a)){for(var o=0;o<t.length;){if("function"==typeof a[t[o]])return a[t[o]].apply(a,r);o+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(a))return e.apply(null,r)(a)}return n.apply(this,arguments)}}var s=Object(o.a)(function(t){return!!u(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),f=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();function d(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,a){return e.apply(this,arguments)};case 5:return function(t,n,r,a,o){return e.apply(this,arguments)};case 6:return function(t,n,r,a,o,i){return e.apply(this,arguments)};case 7:return function(t,n,r,a,o,i,c){return e.apply(this,arguments)};case 8:return function(t,n,r,a,o,i,c,u){return e.apply(this,arguments)};case 9:return function(t,n,r,a,o,i,c,u,l){return e.apply(this,arguments)};case 10:return function(t,n,r,a,o,i,c,u,l,s){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}var p=Object(c.a)(function(t,e){return d(t.length,function(){return t.apply(e,arguments)})});function h(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function b(t,e,n,r){return t["@@transducer/result"](n[r](p(t["@@transducer/step"],t),e))}var m="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function g(t,e,n){if("function"==typeof t&&(t=function(t){return new f(t)}(t)),s(n))return function(t,e,n){for(var r=0,a=n.length;r<a;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return b(t,e,n,"fantasy-land/reduce");if(null!=n[m])return h(t,e,n[m]());if("function"==typeof n.next)return h(t,e,n);if("function"==typeof n.reduce)return b(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var y=function(){return this.xf["@@transducer/init"]()},w=function(t){return this.xf["@@transducer/result"](t)},j=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=y,t.prototype["@@transducer/result"]=w,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),O=Object(c.a)(function(t,e){return new j(t,e)}),v=n(176);var E=Object(c.a)(function(t,e){return 1===t?Object(o.a)(e):d(t,function t(e,n,r){return function(){for(var a=[],o=0,i=e,c=0;c<n.length||o<arguments.length;){var u;c<n.length&&(!Object(v.a)(n[c])||o>=arguments.length)?u=n[c]:(u=arguments[o],o+=1),a[c]=u,Object(v.a)(u)||(i-=1),c+=1}return i<=0?r.apply(this,a):d(i,t(e,a,r))}}(t,[],e))}),k=Object.prototype.toString,x=function(){return"[object Arguments]"===k.call(arguments)?function(t){return"[object Arguments]"===k.call(t)}:function(t){return r("callee",t)}}(),S=!{toString:null}.propertyIsEnumerable("toString"),T=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=function(){return arguments.propertyIsEnumerable("length")}(),N=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},R="function"!=typeof Object.keys||I?Object(o.a)(function(t){if(Object(t)!==t)return[];var e,n,a=[],o=I&&x(t);for(e in t)!r(e,t)||o&&"length"===e||(a[a.length]=e);if(S)for(n=T.length-1;n>=0;)r(e=T[n],t)&&!N(a,e)&&(a[a.length]=e),n-=1;return a}):Object(o.a)(function(t){return Object(t)!==t?[]:Object.keys(t)}),L=Object(c.a)(l(["fantasy-land/map","map"],O,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return E(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return g(function(n,r){return n[r]=t(e[r]),n},{},R(e));default:return function(t,e){for(var n=0,r=e.length,a=Array(r);n<r;)a[n]=t(e[n]),n+=1;return a}(t,e)}})),A=Object(c.a)(function(t,e){var n={};return n[t]=e,n});n.d(e,"a",function(){return M}),n.d(e,"b",function(){return J});var M=function(t){return i(L(function(t){return A(t.node.fields.slug.split("/")[2],t.node)},t))},J=function(t){return{slug:t.fields.slug,thumbnailURL:t.frontmatter.thumbnail?t.frontmatter.thumbnail.publicURL:null,title:t.frontmatter.title}}},181:function(t,e,n){"use strict";n(33);var r=n(174),a=n(179),o=n(4),i=n.n(o),c=n(0),u=n.n(c),l=n(184),s=n(172),f=n.n(s),d=n(171),p=Object(d.a)(function(t,e){for(var n={},r={},a=0,o=t.length;a<o;)r[t[a]]=1,a+=1;for(var i in e)r.hasOwnProperty(i)||(n[i]=e[i]);return n}),h=n(155),b=n.n(h);function m(t){return t.isExternal?u.a.createElement("a",Object.assign({rel:"external",href:t.to},p(["isExternal","to"],t)),t.children):u.a.createElement(a.a,p(["isExternal"],t),t.children)}m.propTypes={children:i.a.node,isExternal:i.a.bool,to:i.a.string};var g=function(t){var e,n=t.isExternal,a=t.slug,o=t.title,i=t.thumbnailURL,c=t.children,s=t.className;return u.a.createElement("article",{className:f()(b.a.excerpt,s,(e={},e[""+b.a.hasThumbnail]=null!==i,e))},u.a.createElement("header",{className:"has-ui-font"},u.a.createElement("h3",{className:f()("has-body-font","has-medium-font-size","has-no-text-transform",b.a.title)},u.a.createElement(m,{to:a,rel:"bookmark",isExternal:n},o," ",n&&u.a.createElement(r.a.ExternalLink,null)))),u.a.createElement("div",{className:b.a.content},i&&u.a.createElement("figure",{className:f()("full-bleed",b.a.coverFigure)},u.a.createElement(m,{to:a,className:b.a.coverLink,"aria-hidden":"true",tabIndex:"-1",isExternal:n},u.a.createElement("img",{width:"128",height:"96",src:i,className:b.a.coverImg,alt:""}))),u.a.createElement("p",{className:f()("has-small-font-size",b.a.text)},c),u.a.createElement(l.a,null,u.a.createElement(m,{to:a,className:f()("button-link__link"),rel:"bookmark",isExternal:n},"Open ",o))))};g.propTypes={children:i.a.node,className:i.a.string,isExternal:i.a.bool,slug:i.a.string,thumbnailURL:i.a.string,title:i.a.string};e.a=g},186:function(t){t.exports={data:{allMarkdownRemark:{totalCount:2,edges:[{node:{fields:{category:"woodworking",slug:"/woodworking/marble-top-chessboard-end-table/"},excerpt:"A while back, I inherited a marble chessboard that had once been the top to a beautiful table. The metal base had rusted away long ago, but…",timeToRead:3,frontmatter:{title:"Marble-top Chessboard End Table",date:"May 13, 2018",ISODate:"2018-05-13T00:00:00.000Z",thumbnail:{publicURL:"/static/IMG_0293-e1c2191d671ab7ba64a21303f731afcc.jpg"}}}},{node:{fields:{category:"woodworking",slug:"/woodworking/standing-desk-converter-diy/"},excerpt:"If you’re like me, you’ve thought about joining the standing desk trend, but the price of entry is a turn-off. Why spend hundreds of dollars…",timeToRead:8,frontmatter:{title:"Standing Desk Converter with Scrap Wood",date:"January 11, 2019",ISODate:"2019-01-11T00:00:00.000Z",thumbnail:{publicURL:"/static/final-14fceb5fb7cdce8160f969a939d5f8cb.png"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-woodworking-jsx-762f29e4ebbc2987dfbb.js.map