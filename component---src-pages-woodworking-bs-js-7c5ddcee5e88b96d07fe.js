(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1uGm":function(e,t,r){"use strict";r.r(t),r.d(t,"ExcerptList",(function(){return f})),r.d(t,"make",(function(){return v})),r.d(t,"$$default",(function(){return p})),r.d(t,"default",(function(){return p}));var a=r("q1tI"),n=r("Wbzz"),i=r("6ETi"),l=r("224y"),c=r("8jdK"),s=r("s5AI"),o=r("bSv4");function d(e){var t=e.marbleTable,r=e.standingDesk;return{marbleTable:null!=t?o.c.verifyArgsAndParse("PageExcerpt",t):void 0,standingDesk:null!=r?o.c.verifyArgsAndParse("PageExcerpt",r):void 0}}var m={Raw:{},query:"3753442807",parse:d,serialize:function(e){var t=e.standingDesk,r=void 0!==t?o.c.serialize(t):null,a=e.marbleTable;return{marbleTable:void 0!==a?o.c.serialize(a):null,standingDesk:r}},serializeVariables:function(e){},makeVariables:function(e){},makeDefaultVariables:function(e){}};function u(e){var t=d(n.useStaticQuery("3753442807"));return a.createElement("section",{className:"index__section"},a.createElement("header",{className:"index__sectionHeader"},a.createElement("h1",void 0,a.createElement("span",{"aria-hidden":!0,role:"img"},"🛠")," Woodworking projects"),a.createElement("p",void 0,"Sometimes I build furniture, and these are the guides I wrote for\n             them.")),a.createElement("h2",{className:"index__divider"},"Guides"),s.a("Wide",t.marbleTable),s.a("Wide",t.standingDesk))}l.a(m);var f={make:u};function h(e){return a.createElement(c.a,{children:null},a.createElement(i.a,{title:{NAME:"Str",VAL:"Woodworking"},description:"Site"}),a.createElement("main",{className:"site-main page-content",id:"main"},a.createElement(u,{})))}var v=h,p=h},s5AI:function(e,t,r){"use strict";r.d(t,"b",(function(){return x})),r.d(t,"a",(function(){return g}));var a=r("dh8l"),n=r("q1tI"),i=r.n(n),l=r("Wbzz"),c=r("6I2+");r("i8i4"),r("FVz9");function s(e,t,r){var a=[e,t].concat(r);return n.createElement.apply(null,a)}var o=r("9eSz"),d=r.n(o);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=Object(n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,l=void 0===n?24:n,c=u(e,["color","size"]);return i.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i.a.createElement("polyline",{points:"15 3 21 3 21 9"}),i.a.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))}));f.displayName="ExternalLink";var h=f,v=r("mh+Z"),p=r("bSv4");function b(e){var t=e.to,r=e.children,a=e.rel,i=e.className,c=e.ariaHidden,s=e.tabIndex,o=void 0!==a?a:"",d=void 0!==i?i:"",m=void 0!==c&&c,u=void 0!==s?s:0;return"External"===t.NAME?n.createElement("a",{"aria-hidden":m,className:d,tabIndex:u,href:t.VAL,rel:"external"},r):n.createElement("span",{"aria-hidden":m},n.createElement(l.Link,{to:t.VAL,rel:o,className:d,tabIndex:u,children:r}))}function E(e){var t,r=e.className,i=e.size,l=e.fullPath,o=e.title,m=e.thumbnail,u=e.children,f=void 0!==r?r:"";if("number"==typeof m)t=null;else switch(0|m.TAG){case 0:var p=m._0;t=n.createElement("figure",{className:"full-bleed-small excerpt__coverFigure"},n.createElement(b,{to:l,children:s("video",{className:"excerpt__coverImg",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,height:p.height,width:p.width},c.b(p.sources,(function(e){var t=e.src;return n.createElement("source",{key:t,src:t,type:e.type_})}))),className:"excerpt__coverLink",ariaHidden:!0,tabIndex:-1}));break;case 1:var E=m._0;t=n.createElement("figure",{className:"full-bleed-small excerpt__coverFigure"},n.createElement(b,{to:l,children:n.createElement("img",{className:"excerpt__coverImg",alt:E.alt,height:"96",src:E.src,width:"128"}),className:"excerpt__coverLink",ariaHidden:!0,tabIndex:-1}));break;case 2:t=n.createElement("figure",{className:a.a("full-bleed-small","excerpt__coverFigure")},n.createElement(b,{to:l,children:n.createElement(d.a,{fixed:m._0,alt:m._1,style:{height:"inherit",position:"inherit",width:"inherit"}}),className:"excerpt__coverLink",ariaHidden:!0,tabIndex:-1}))}return n.createElement("article",{className:a.a(a.a("excerpt__excerpt",f),a.b("excerpt__isWide","Wide"===i))},n.createElement("header",{className:"has-ui-font"},n.createElement("h3",{className:a.a(a.a(a.a("has-body-font","has-medium-font-size"),"has-no-text-transform"),"excerpt__title")},n.createElement(b,{to:l,children:null,rel:"bookmark"},o,"External"===l.NAME?n.createElement(n.Fragment,{children:null}," ",n.createElement(h,{})):null))),n.createElement("div",{className:"excerpt__content"},t,n.createElement("p",{className:"has-small-font-size excerpt__text"},u),n.createElement(v.a,{children:n.createElement(b,{to:l,children:"Open "+o,rel:"bookmark",className:"button-link__link"})})))}function g(e,t){if(void 0===t)return"ERROR: page not found";var r=t.frontmatter;return n.createElement(E,{size:e,fullPath:{NAME:"Internal",VAL:t.fields.fullPath},title:r.title,thumbnail:p.d.make(r.thumbnail),children:r.description})}var x=E}}]);
//# sourceMappingURL=component---src-pages-woodworking-bs-js-7c5ddcee5e88b96d07fe.js.map