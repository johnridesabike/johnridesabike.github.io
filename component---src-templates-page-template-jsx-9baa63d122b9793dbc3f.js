(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{172:function(e,t,a){"use strict";a.r(t);a(33),a(207);var n=a(180),r=a(0),o=a.n(r),c=a(176),i=function(e){var t=e.author;return o.a.createElement("span",{className:"author byline"},o.a.createElement(c.a.Person,null)," ",t)},l=a(174),s=a.n(l),m=function(e){var t=e.date,a=e.ISODate,n=e.classes;return o.a.createElement("span",{className:s.a.apply(void 0,n)},o.a.createElement("time",{dateTime:a},o.a.createElement(c.a.Calendar,null)," Posted on ",t))},p=a(4),d=a.n(p),u=a(177),f=a(168),h=a.n(f);function g(e){var t,a=e.pageContext,r=e.children,c=e.location,l=a.frontmatter,p=l.caption,d=l.title,f=l.author,g=l.date,E=l.ISODate,y=l.updated,v=l.thumbnail,w=l.ISOUpdated,b=l.attachments,N=a.slug?a.slug:c.pathname,k="string"==typeof r?o.a.createElement("div",{className:"page-content",dangerouslySetInnerHTML:{__html:r}}):o.a.createElement("div",{className:"page-content"},r);return o.a.createElement(n.a,{entryHeader:o.a.createElement("div",{className:s()("has-ui-font",h.a.header,(t={},t[""+h.a.hasThumbnail]=v,t))},v&&o.a.createElement("figure",{className:s()("full-bleed",h.a.coverFigure)},o.a.createElement("img",{src:v.publicURL,className:h.a.coverImg,alt:p}),p&&o.a.createElement("figcaption",{className:s()(h.a.coverFigureCaption,"has-xsmall-font-size")},o.a.createElement("span",{className:h.a.captionText},p))),o.a.createElement("div",{className:h.a.headerWrap},o.a.createElement("h1",{className:s()("has-title-font",h.a.title)},d),o.a.createElement("div",{className:h.a.meta},o.a.createElement("div",{className:h.a.metaWrapper},f&&o.a.createElement(i,{author:f}),g&&o.a.createElement(m,{date:g,ISODate:E})))))},o.a.createElement(u.a,{postPath:N,title:d,postSEO:!0}),o.a.createElement("main",{id:"main",className:"site-main"},o.a.createElement("article",null,k,b&&o.a.createElement("div",{id:"attachments",className:"attachments has-ui-font"},o.a.createElement("h3",null,"Downloads"),b.map(function(e){return o.a.createElement("div",{key:e.publicURL,className:"wp-block-file"},o.a.createElement("a",{href:e.publicURL},e.name,".",e.extension)," ",o.a.createElement("a",{href:e.publicURL,className:"wp-block-file__button",download:!0},"Download"))})),o.a.createElement("footer",{className:h.a.footer+" has-ui-font"},o.a.createElement("div",{className:s()(h.a.postTime,h.a.footerItem)},o.a.createElement("time",{dateTime:w},"Updated on ",y||g))))))}function E(e){var t=e.pageContext,a=e.data,n=e.location,r=a.markdownRemark;return o.a.createElement(g,{location:n,pageContext:Object.assign({},r,{pageContext:t})},r.html)}g.propTypes={children:d.a.node,location:d.a.any,pageContext:d.a.any},a.d(t,"default",function(){return E}),a.d(t,"pageQuery",function(){return y}),E.propTypes={data:d.a.object,location:d.a.any,pageContext:d.a.any};var y="2498852341"},177:function(e,t,a){"use strict";var n=a(179),r=a(0),o=a.n(r),c=a(4),i=a.n(c),l=a(184),s=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,l=n.data.site,m=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m},179:function(e){e.exports={data:{site:{siteMetadata:{title:"John Jackson",description:"Librarian portfolio & other projects.",author:"John Jackson"}}}}},207:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-9baa63d122b9793dbc3f.js.map