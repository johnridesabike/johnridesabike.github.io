(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8oxB":function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,c=[],s=!1,f=-1;function d(){s&&l&&(s=!1,l.length?c=l.concat(c):f=-1,c.length&&m())}function m(){if(!s){var e=u(d);s=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||s||u(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},HtXJ:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){})),n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return l}));var r={buffer:"",output:function(t,n){var r=n.length-1|0;return void 0!==e&&e.stdout&&e.stdout.write?e.stdout.write(n):void("\n"===n[r]?console.log(n.slice(0,r)):console.log(n))}},i={buffer:"",output:function(e,t){var n=t.length-1|0;"\n"===t[n]?console.log(t.slice(0,n)):console.log(t)}};function a(e){if(""!==e.buffer)return e.output(e,e.buffer),void(e.buffer="")}function o(t,n,i,o){var u=0===i&&o===n.length?n:n.slice(i,o);if(void 0!==e&&e.stdout&&e.stdout.write&&t===r)return e.stdout.write(u);var l=u.lastIndexOf("\n");l<0?t.buffer=t.buffer+u:(t.buffer=t.buffer+u.slice(0,l+1|0),a(t),t.buffer=t.buffer+u.slice(l+1|0))}function u(e,t){return o(e,String.fromCharCode(t),0,1)}function l(e){return{hd:r,tl:{hd:i,tl:0}}}}).call(this,n("8oxB"))},I4Gx:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;if(void 0!==this)return this;throw new Error("Unable to locate global `this`")},i=function(e){var t=r();if(void 0===t[e])throw new Error(e+" not polyfilled by BuckleScript yet\n");return t[e]}}).call(this,n("yLpj"))},SFCQ:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));function r(t){if(void 0!==e)return e.exit(t)}}).call(this,n("8oxB"))},dpRb:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p})),n.d(t,"make",(function(){return b})),n.d(t,"$$default",(function(){return w})),n.d(t,"default",(function(){return w}));var r=n("dh8l"),i=n("q1tI"),a=n("6I2+"),o=n("9eSz"),u=n.n(o),l=n("6ETi"),c=n("VPEV"),s=n("8jdK");n("FVz9");n("gqRx");var f=n("HtXJ");n("SFCQ"),n("Ww59"),n("SKj6");n("4dUD");var d=n("oXm1");n("Tcjq"),n("I4Gx");d.b("Pervasives.Exit");f.f,f.g,f.e;f.a,f.d,f.d;function m(e){var t=function(e){if("string"==typeof e)return e}(e);return void 0!==t?t:function(e){throw{RE_EXN_ID:"Failure",_1:e,Error:new Error}}("DateTime.parse")}var v=n("bSv4");function h(e){var t=e.date,n=e.isoDate;return i.createElement("span",void 0,i.createElement("time",{dateTime:n},i.createElement(c.a.make,{})," Updated on "+t))}var p="1399615279";function g(e){var t=function(e){var t,n=e.markdownRemark;if(null==n)t=void 0;else{var r,i=n.html,a=n.frontmatter,o=a.thumbnail;if(null==o)r=void 0;else{var u,l=o.image,c=l.publicURL,s=l.sharpImg;if(null==s)u=void 0;else{var f=s.fluid;u={fluid:null!=f?v.b.verifyArgsAndParse("ImageFluid",f):void 0}}r={caption:o.caption,image:{publicURL:null!=c?c:void 0,sharpImg:u}}}var d=a.attachments;t={html:null!=i?i:void 0,frontmatter:{date:m(a.date),isoDate:m(a.isoDate),title:a.title,description:a.description,thumbnail:r,attachments:null!=d?d.map((function(e){var t=e.publicURL;return{publicURL:null!=t?t:void 0,name:e.name,extension:e.extension}})):void 0}}}return{markdownRemark:t}}(e.data).markdownRemark;if(void 0===t)return null;var n=t.html;if(void 0===n)return null;var o,c=t.frontmatter,f=c.attachments,d=c.thumbnail,p=c.title;if(void 0!==d){var g,b=d.image,w=b.sharpImg,E=b.publicURL,_=d.caption,T=0;if(void 0!==w){var y=w.fluid;void 0!==y?g=i.createElement(u.a,{fluid:y,alt:_,className:"page__coverImg"}):T=1}else T=1;1===T&&(g=void 0!==E?i.createElement("img",{className:"page__coverImg",alt:_,src:E}):null),o=i.createElement("figure",{className:r.a("full-bleed","page__coverFigure")},g,i.createElement("figcaption",{className:"page__coverFigureCaption has-xsmall-font-size"},i.createElement("span",{className:"page__captionText"},_)))}else o=null;return i.createElement(s.a,{children:null,entryHeader:i.createElement("div",{className:r.a(r.a("has-ui-font","page__header"),r.c("page__hasThumbnail",d))},o,i.createElement("div",{className:"page__headerWrap"},i.createElement("h1",{className:"has-title-font page__title"},p)))},i.createElement(l.a,{title:{NAME:"Str",VAL:p},description:{NAME:"Str",VAL:c.description}}),i.createElement("main",{className:"site-main",id:"main"},i.createElement("article",void 0,i.createElement("div",{className:"page-content",dangerouslySetInnerHTML:{__html:n}}),void 0!==f?i.createElement("div",{className:"attachments has-ui-font",id:"attachments"},i.createElement("h3",void 0,"Downloads"),a.b(f,(function(e){var t=e.publicURL;return void 0!==t?i.createElement("div",{key:t,className:"wp-block-file"},i.createElement("a",{href:t},e.name+"."+e.extension)," ",i.createElement("a",{className:"wp-block-file__button",download:"true",href:t},"Download")):null}))):null,i.createElement("footer",{className:"page__footer has-ui-font"},i.createElement("div",{className:"page__postTime page__footerItem"},i.createElement(h,{date:c.date,isoDate:c.isoDate}))))))}var b=g,w=g}}]);
//# sourceMappingURL=component---src-template-page-bs-js-29e3e51e49b84048d3b6.js.map