(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(e,t,a){"use strict";a.r(t);a(181);var n=a(0),r=a.n(n),i=a(167),s=a(164),c=a(168),l=a(162),o=function(e){var t=e.author;return r.a.createElement("span",{className:"author byline"},r.a.createElement(l.l,null)," ",t)};a.d(t,"default",function(){return d}),a.d(t,"pageQuery",function(){return u});var m=function(e){var t=e.thumbnail,a=e.caption,n=e.title,i=e.author,s=e.date,l=e.ISODate,m=e.classNames;return r.a.createElement("div",{className:"entry-header has-ui-font "+m},t&&r.a.createElement("figure",{className:"featured-image featured-image__single full-bleed"},r.a.createElement("img",{src:t.publicURL,className:"attachment-post-thumbnail size-post-thumbnail post-thumbnail__single wp-post-image",alt:a}),a&&r.a.createElement("figcaption",{className:"featured-image__caption"},a)),r.a.createElement("div",{className:"entry-header-wrap"},r.a.createElement("h1",{className:"entry-title has-body-font"},n),r.a.createElement("div",{className:"entry-meta entry-meta__single"},r.a.createElement("div",{className:"entry-meta-wrapper entry-meta-wrapper__single"},i&&r.a.createElement(o,{author:i}),s&&r.a.createElement(c.a,{date:s,ISODate:l})))))};function d(e){var t=e.pageContext,a=e.data,n=t.slug,c=a.markdownRemark,l=c.frontmatter;return console.log(l),r.a.createElement(i.a,{entryHeader:r.a.createElement(m,{thumbnail:l.thumbnail,caption:l.caption,title:l.title,author:l.author,date:l.date,ISODate:l.ISODate,classNames:l.class||"single"}),thumbnail:l.thumbnail,classNames:l.class||"single"},r.a.createElement(s.a,{postPath:n,postNode:c,title:l.title,postSEO:!0}),r.a.createElement("div",{id:"primary",className:"content-area single"},r.a.createElement("main",{id:"main",className:"site-main"},r.a.createElement("article",{className:"post"},r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"entry-content",dangerouslySetInnerHTML:{__html:c.html}}),l.attachments&&r.a.createElement("div",{id:"attachments",className:"attachments has-ui-font"},r.a.createElement("h3",null,"Downloads"),l.attachments.map(function(e){return r.a.createElement("div",{key:e.publicURL,className:"wp-block-file"},r.a.createElement("a",{href:e.publicURL},e.name,".",e.extension)," ",r.a.createElement("a",{href:e.publicURL,className:"wp-block-file__button",download:!0},"Download"))}))),r.a.createElement("footer",{className:"entry-footer entry-footer__single has-ui-font"},r.a.createElement("div",{className:"post-time entry-footer__item"},r.a.createElement("span",{className:"updated-on"},r.a.createElement("time",{className:"updated updated-date published",dateTime:l.ISODate},"Updated on ",l.date))))))))}var u="3876424490"},164:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),s=a(4),c=a.n(s),l=a(166),o=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title,l=n.data.site,m=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},165:function(e){e.exports={data:{site:{siteMetadata:{title:"John Jackson",description:"Librarian portfolio & other projects.",author:"John Jackson"}}}}},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162);t.a=function(e){var t=e.date,a=e.ISODate;return r.a.createElement("span",{className:"posted-on entry-meta__item"},r.a.createElement("time",{className:"entry-date published updated",dateTime:a},r.a.createElement(i.b,null)," Posted on ",t))}},181:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-6cd61f71c606b556271c.js.map