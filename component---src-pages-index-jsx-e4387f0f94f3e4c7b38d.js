(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(152),n=a(156),l=a(187),o=a(188),c=a.n(o),d=function(){return i.a.createElement(s.StaticQuery,{query:"19096047",render:function(e){return i.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},u=a(153),m=a(160),f=a.n(m),p=a(189);var g=a(157),h=function(e){var t=e.node;return i.a.createElement("article",{className:"excerpt-entry post"},i.a.createElement("header",{className:"entry-header has-ui-font"},i.a.createElement("div",{className:"tab-head"},i.a.createElement(g.l,null)," ",t.fields.category),i.a.createElement("h2",{className:"entry-title has-body-font"},i.a.createElement("a",{href:t.frontmatter.slug,rel:"bookmark",className:"entry-title__link"},t.frontmatter.title))),i.a.createElement("div",{className:"entry-content"},t.excerpt),i.a.createElement("footer",{className:"entry-footer has-ui-font"},i.a.createElement("div",{className:"entry-meta"},i.a.createElement("span",{class:"posted-on entry-meta__item"},i.a.createElement("time",{class:"entry-date published updated",datetime:t.frontmatter.ISODate},i.a.createElement(g.b,null)," Posted on ",t.frontmatter.date))),i.a.createElement("div",{className:"continue-reading"},i.a.createElement(s.Link,{to:t.frontmatter.slug,className:"button-link__link button-open",rel:"bookmark"},"Open"," ",i.a.createElement("span",{className:"screen-reader-text"},t.frontmatter.title),i.a.createElement(g.d,null)))))};t.default=function(){var e=p.data.allMarkdownRemark.edges,t=(e=e.filter(function(e){return null!==e.node.fields})).filter(function(e){return"woodworking"===e.node.fields.category}),a=e.filter(function(e){return"libraries"===e.node.fields.category});return i.a.createElement(n.a,null,i.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(d,null)),i.a.createElement(s.Link,{to:"/page-2/"},"Go to page 2"),i.a.createElement("figure",null,i.a.createElement("img",{src:f.a,alt:"Portrait of John",height:"256",width:"256"}),i.a.createElement("figcaption",{className:"has-large-font-size"},"Hi, I'm John Jackson.")),i.a.createElement("p",null,"I’m a public library staffer who is interested in digital library technologies, web development, and libraries of all types. I like to bike, write, build, and tinker."),i.a.createElement("div",{className:"wp-block-columns has-2-columns"},i.a.createElement("div",{className:"wp-block-column"},i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("strong",null,"Hiring? Here’s a bit about me:")),i.a.createElement("p",null,i.a.createElement("span",{role:"img","aria-label":"check"},"✔️")," ","MLIS Graduate."),i.a.createElement("p",null,i.a.createElement("span",{role:"img","aria-label":"check"},"✔️")," ","Working in libraries since 2015."),i.a.createElement("p",null,i.a.createElement("span",{role:"img","aria-label":"check"},"✔️")," ","Experience in adult services programming, web development, data management, customer service, and more."),i.a.createElement("div",{className:"wp-block-button aligncenter is-style-squared"},i.a.createElement(s.Link,{className:"wp-block-button__link",to:"/resume/"},"View my full résumé"))),i.a.createElement("div",{className:"wp-block-column"},i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("strong",null,"Let’s get in touch.")),i.a.createElement("p",null,"Questions, comments, job offers, jokes, poems, or just to say “hi.”"," "),i.a.createElement("div",{className:"wp-block-button aligncenter is-style-squared"},i.a.createElement("a",{className:"wp-block-button__link",href:"mailto:jbpjackson@icloud.com"},i.a.createElement(g.j,null)," Email me")))),i.a.createElement(g.k,{style:{display:"block",margin:"auto"},className:"has-header-color"}),i.a.createElement("hr",{className:"wp-block-separator is-style-dots"}),i.a.createElement("div",{class:"wp-block-columns alignwide has-2-columns"},i.a.createElement("div",{class:"wp-block-column"},i.a.createElement(g.m,{style:{display:"block",margin:"auto"},className:"has-header-color"}),i.a.createElement("h3",null,"Woodworking"),i.a.createElement("p",null,"Guides for the woodworking projects I’ve done.")),i.a.createElement("div",{class:"wp-block-column"},t.map(function(e){return i.a.createElement(h,{node:e.node,key:e.node.frontmatter.slug})}))),i.a.createElement("hr",{className:"wp-block-separator is-style-dots"}),i.a.createElement("div",{class:"wp-block-columns alignwide has-2-columns"},i.a.createElement("div",{class:"wp-block-column"},i.a.createElement(g.g,{style:{display:"block",margin:"auto"},className:"has-header-color"}),i.a.createElement("h3",null,"Libraries"),i.a.createElement("p",null,"Some of the projects I’ve completed while working at a library and while completing my MLIS.")),i.a.createElement("div",{class:"wp-block-column"},a.map(function(e){return i.a.createElement(h,{node:e.node,key:e.node.frontmatter.slug})}))))}},153:function(e,t,a){"use strict";var r=a(154),i=a(0),s=a.n(i),n=a(4),l=a.n(n),o=a(155),c=a.n(o);function d(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},154:function(e){e.exports={data:{site:{siteMetadata:{title:"John Jackson",description:"Librarian portfolio & other projects.",author:"John Jackson"}}}}},187:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},188:function(e,t,a){"use strict";var r=a(7);t.__esModule=!0,t.default=void 0;var i,s=r(a(8)),n=r(a(35)),l=r(a(75)),o=r(a(55)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},u,{onLoad:n,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:s,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,w=e.durationFadeIn,E=e.Tag,S=e.itemProp,v=this.state.imgLoaded||!1===this.state.fadeIn,k=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:v?1:0,transition:k?"opacity "+w+"ms":"none"},l),T="boolean"==typeof y?"lightgray":y,L={transitionDelay:w+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&L,l,m),A={title:t,alt:this.state.isVisible?"":a,style:R,className:f};if(p){var O=p;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),T&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&L)}),O.base64&&c.default.createElement(b,(0,o.default)({src:O.base64},A)),O.tracedSVG&&c.default.createElement(b,(0,o.default)({src:O.tracedSVG},A)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},O))}}))}if(g){var N=g,x=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},s);return"inherit"===s.display&&delete x.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},T&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:T,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},k&&L)}),N.base64&&c.default.createElement(b,(0,o.default)({src:N.base64},A)),N.tracedSVG&&c.default.createElement(b,(0,o.default)({src:N.tracedSVG},A)),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement(b,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},N))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S},189:function(e){e.exports={data:{allMarkdownRemark:{totalCount:15,edges:[{node:{fields:null,excerpt:"I’m a public library staffer and MLIS graduate who is interested in digital library technologies, web development, and libraries of all…",timeToRead:3,frontmatter:{title:"Résumé",slug:"/resume/",date:"April 03, 2019",ISODate:"2019-04-03T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"In 2017, I began an adult chess library program for Chattahoochee Valley Libraries in Columbus, Georgia. It’s been a hit with our community…",timeToRead:1,frontmatter:{title:"Chess at the Library: my public library chess program",slug:"/libraries/chess-library/",date:"August 15, 2018",ISODate:"2018-08-15T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"",timeToRead:4,frontmatter:{title:"Data Management Plan: Evolving Pronouns",slug:"/libraries/data-management-plan/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"woodworking"},excerpt:"A while back, I inherited a marble chessboard that had once been the top to a beautiful table. The metal base had rusted away long ago, but…",timeToRead:3,frontmatter:{title:"Marble-top Chessboard End Table",slug:"/woodworking/marble-top-chessboard-end-table/",date:"May 13, 2018",ISODate:"2018-05-13T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"The director of a fictional library system is seeking a new OPAC, and I was tasked with writing a recommendation for Ex Libris. This was…",timeToRead:8,frontmatter:{title:"Ex Libris OPAC Analysis",slug:"/libraries/ex-libris-opac-analysis/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"This guide covers all the knowledge required to play a basic game of chess. It’s a quick reference resource, one that can answer questions…",timeToRead:10,frontmatter:{title:"How to Play Chess: a reference for novices and veterans",slug:"/libraries/how-play-chess/",date:"March 13, 2019",ISODate:"2019-03-13T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"Slide: Social Media Analysis of State LibrariesSlide: Importance of Social Media Analysis.With the rise of social media, researchers are not…",timeToRead:8,frontmatter:{title:"Library Twitter Text Analysis With R Presentation",slug:"/libraries/library-twitter-text-analysis-r/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"Open Access and Technical Services.Hello SLIS 702. This John Jackson, and I’m here to present an analysis of open access publishing…",timeToRead:8,frontmatter:{title:"Open Access Presentation",slug:"/libraries/open-access-presentation/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"Summary of ResultsThe purpose of this study was to determine whether high-quality children’s materials featuring Hispanic/Latino themes are…",timeToRead:8,frontmatter:{title:"Researching the Distribution of Hispanic and Latino Children’s Books in United States Public Libraries",slug:"/libraries/researching-hispanic-children-books/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"woodworking"},excerpt:"If you’re like me, you’ve thought about joining the standing desk trend, but the price of entry is a turn-off. Why spend hundreds of dollars…",timeToRead:8,frontmatter:{title:"Standing Desk Converter with Scrap Wood",slug:"/woodworking/standing-desk-converter-diy",date:"January 11, 2019",ISODate:"2019-01-11T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"",timeToRead:12,frontmatter:{title:"Academic Library Faculty Support",slug:"/libraries/academic-library-faculty-support/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"Just as university students are encouraged to find creative solutions to research questions, librarians must also use creativity when aiding…",timeToRead:12,frontmatter:{title:"Academic Library Student Support",slug:"/libraries/academic-library-student-support/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"",timeToRead:9,frontmatter:{title:"Chattahoochee Valley Environmental Analysis",slug:"/libraries/chattahoochee-valley-environmental-analysis/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"",timeToRead:15,frontmatter:{title:"Collection Development Policy",slug:"/libraries/collection-development-policy/",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}},{node:{fields:{category:"libraries"},excerpt:"",timeToRead:15,frontmatter:{title:"Selection Policy & Materials Project",slug:"/libraries/selection-policy-materials",date:"December 19, 2018",ISODate:"2018-12-19T00:00:00.000Z"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e4387f0f94f3e4c7b38d.js.map