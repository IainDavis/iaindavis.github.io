"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[249],{5476:(e,t,n)=>{n.d(t,{A:()=>T});var a=n(6540),l=n(4164),r=n(4096);function i(e){let{children:t,className:n}=e;return a.createElement("article",{className:n},t)}var c=n(8774);const o={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,r.e7)(),{permalink:m,title:s}=n,d=i?"h1":"h2";return a.createElement(d,{className:(0,l.A)(o.title,t)},i?s:a.createElement(c.A,{to:m},s))}var s=n(1312),d=n(5846),h=n(6266);const u={container:"container_mt6G"};function v(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,d.W)();return t=>{const n=Math.ceil(t);return e(n,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function g(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t},n)}function q(){return a.createElement(a.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:n}=(0,r.e7)(),{date:i,readingTime:c}=n,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return a.createElement("div",{className:(0,l.A)(u.container,"margin-vert--md",t)},a.createElement(g,{date:i,formattedDate:(m=i,o.format(new Date(m)))}),void 0!==c&&a.createElement(a.Fragment,null,a.createElement(q,null),a.createElement(v,{readingTime:c})));var m}var p=n(1031);const E={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,r.e7)();if(0===n.length)return null;const c=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return a.createElement("div",{className:(0,l.A)("margin-top--md margin-bottom--sm",c?E.imageOnlyAuthorRow:"row",t)},n.map(((e,t)=>a.createElement("div",{className:(0,l.A)(!c&&(o?"col col--12":"col col--6"),c?E.imageOnlyAuthorCol:E.authorCol),key:t},a.createElement(p.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function A(){return a.createElement("header",null,a.createElement(m,null),a.createElement(f,null),a.createElement(b,null))}var w=n(440),y=n(1467);function x(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,r.e7)();return a.createElement("div",{id:i?w.LU:void 0,className:(0,l.A)("markdown",n)},a.createElement(y.A,null,t))}var H=n(7559),z=n(5406),N=n(9679),V=n(8168);function M(){return a.createElement("b",null,a.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read more"))}function L(e){const{blogPostTitle:t,...n}=e;return a.createElement(c.A,(0,V.A)({"aria-label":(0,s.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(M,null))}function k(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:n,title:i,editUrl:c,hasTruncateMarker:o,lastUpdatedBy:m,lastUpdatedAt:s}=e,d=!t&&o,h=n.length>0;if(!(h||d||c))return null;if(t){const e=!!(c||s||m);return a.createElement("footer",{className:"docusaurus-mt-lg"},h&&a.createElement("div",{className:(0,l.A)("row","margin-top--sm",H.G.blog.blogFooterEditMetaRow)},a.createElement("div",{className:"col"},a.createElement(N.A,{tags:n}))),e&&a.createElement(z.A,{className:(0,l.A)("margin-top--sm",H.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:s,lastUpdatedBy:m}))}return a.createElement("footer",{className:"row docusaurus-mt-lg"},h&&a.createElement("div",{className:(0,l.A)("col",{"col--9":d})},a.createElement(N.A,{tags:n})),d&&a.createElement("div",{className:(0,l.A)("col text--right",{"col--3":h})},a.createElement(L,{blogPostTitle:i,to:e.permalink})))}function T(e){let{children:t,className:n}=e;const c=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return a.createElement(i,{className:(0,l.A)(c,n)},a.createElement(A,null),a.createElement(x,null,t),a.createElement(k,null))}},3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(6540),l=n(4164),r=n(1213),i=n(7559),c=n(4096),o=n(3841),m=n(5476),s=n(8168),d=n(1312),h=n(9022);function u(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(h.A,(0,s.A)({},n,{subLabel:a.createElement(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer post")})),t&&a.createElement(h.A,(0,s.A)({},t,{subLabel:a.createElement(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older post"),isNext:!0})))}function v(){const{assets:e,metadata:t}=(0,c.e7)(),{title:n,description:l,date:i,tags:o,authors:m,frontMatter:s}=t,{keywords:d}=s,h=e.image??s.image;return a.createElement(r.be,{title:n,description:l,keywords:d,image:h},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:i}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&a.createElement("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")}))}var g=n(5260);function q(){const e=(0,c.J_)();return a.createElement(g.A,null,a.createElement("script",{type:"application/ld+json"},JSON.stringify(e)))}var f=n(321),p=n(1689);function E(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,c.e7)(),{nextItem:i,prevItem:s,frontMatter:d}=l,{hide_table_of_contents:h,toc_min_heading_level:v,toc_max_heading_level:g}=d;return a.createElement(o.A,{sidebar:t,toc:!h&&r.length>0?a.createElement(f.A,{toc:r,minHeadingLevel:v,maxHeadingLevel:g}):void 0},a.createElement(p.A,{metadata:l}),a.createElement(m.A,null,n),(i||s)&&a.createElement(u,{nextItem:i,prevItem:s}))}function b(e){const t=e.content;return a.createElement(c.in,{content:e.content,isBlogPostPage:!0},a.createElement(r.e3,{className:(0,l.A)(i.G.wrapper.blogPages,i.G.page.blogPostPage)},a.createElement(v,null),a.createElement(q,null),a.createElement(E,{sidebar:e.sidebar},a.createElement(t,null))))}},2234:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(6540),l=n(4164),r=n(4084),i=n(7559),c=n(518);function o(e){let{className:t}=e;return a.createElement(c.A,{type:"caution",title:a.createElement(r.Rc,null),className:(0,l.A)(t,i.G.common.unlistedBanner)},a.createElement(r.Uh,null))}function m(e){return a.createElement(a.Fragment,null,a.createElement(r.AE,null),a.createElement(o,e))}},1689:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(6540),l=n(4164),r=n(4084),i=n(7559),c=n(518);function o(e){let{className:t}=e;return a.createElement(c.A,{type:"caution",title:a.createElement(r.Yh,null),className:(0,l.A)(t,i.G.common.draftBanner)},a.createElement(r.TT,null))}var m=n(2234);function s(e){let{metadata:t}=e;const{unlisted:n,frontMatter:l}=t;return a.createElement(a.Fragment,null,(n||l.unlisted)&&a.createElement(m.A,null),l.draft&&a.createElement(o,null))}},321:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(8168),l=n(6540),r=n(4164),i=n(5195);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},o="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function s(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.A)(c.tableOfContents,"thin-scrollbar",t)},l.createElement(i.A,(0,a.A)({},n,{linkClassName:o,linkActiveClassName:m})))}},5195:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(8168),l=n(6540),r=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function m(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function s(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=s();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:n.current}),s=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var h=n(8774);function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement(h.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:s,maxHeadingLevel:h,...u}=e;const g=(0,r.p)(),q=s??g.tableOfContents.minHeadingLevel,f=h??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:q,maxHeadingLevel:f});return d((0,l.useMemo)((()=>{if(o&&m)return{linkClassName:o,linkActiveClassName:m,minHeadingLevel:q,maxHeadingLevel:f}}),[o,m,q,f])),l.createElement(v,(0,a.A)({toc:p,className:n,linkClassName:o},u))}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,TT:()=>s,Uh:()=>c,Yh:()=>m});var a=n(6540),l=n(1312),r=n(5260);function i(){return a.createElement(l.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title"},"Unlisted page")}function c(){return a.createElement(l.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function o(){return a.createElement(r.A,null,a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}function m(){return a.createElement(l.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title"},"Draft page")}function s(){return a.createElement(l.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message"},"This page is a draft. It will only be visible in dev and be excluded from the production build.")}},3865:(e,t,n)=>{n.d(t,{at:()=>U,CX:()=>F,Xf:()=>j,qC:()=>R,wZ:()=>I,Ay:()=>G});var a,l,r,i,c,o=n(6540);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(null,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:180,height:50,fill:"none",viewBox:"0 0 180 50","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,a||(a=o.createElement("rect",{width:180,height:50,"data-fill":"background",rx:8})),l||(l=o.createElement("path",{d:"M10 9.76h130v30H10zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),r||(r=o.createElement("path",{d:"M8.5 8.26h133V23.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H8.5zm3 3v27h127v-27zM159 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),i||(i=o.createElement("path",{d:"M150.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),c||(c=o.createElement("path",{d:"M19.89 32.76v-2.31h3.087V19.74H19.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T37.039 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V21.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V17.43H74.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588h-4.557Zm2.625-2.415H74.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H82.66q.189-1.638 1.47-2.604T87.406 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M98.17 32.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.105-.399.273-1.071t.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))};var d,h,u,v;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(null,arguments)}const q=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:161,height:36,fill:"none",viewBox:"0 0 161 36","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,d||(d=o.createElement("path",{d:"M2 3.76h130v30H2zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),h||(h=o.createElement("path",{d:"M.5 2.26h133V17.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H.5zm3 3v27h127v-27zM151 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),u||(u=o.createElement("path",{d:"M142.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),v||(v=o.createElement("path",{d:"M11.89 26.76v-2.31h3.087V13.74H11.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T29.039 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V15.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V11.43H66.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588zm2.625-2.415H66.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H74.66q.189-1.638 1.47-2.604T79.406 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M90.17 26.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.104-.399.273-1.071.168-.672.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))};var f,p,E,b,A;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(null,arguments)}const y=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:82,height:50,fill:"none",viewBox:"0 0 82 50","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,f||(f=o.createElement("rect",{width:82,height:50,"data-fill":"background",rx:8})),p||(p=o.createElement("path",{d:"M10 9.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),E||(E=o.createElement("path",{d:"M8.5 8.26h43V23.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),b||(b=o.createElement("path",{d:"M60.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),A||(A=o.createElement("path",{d:"M18.89 32v-2.31h3.087V18.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V32zm12.277 0V16.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 32 35.724 32zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))};var x,H,z,N,V;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(null,arguments)}const L=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:82,height:82,fill:"none",viewBox:"0 0 82 82","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,x||(x=o.createElement("rect",{width:82,height:82,"data-fill":"background",rx:8})),H||(H=o.createElement("path",{d:"M10 27.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),z||(z=o.createElement("path",{d:"M8.5 26.26h43V41.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 47.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),N||(N=o.createElement("path",{d:"M60.196 32.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V24h1.5v8.76h-1.464V31.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),V||(V=o.createElement("path",{d:"M18.89 50v-2.31h3.087V36.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V50zm12.277 0V34.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 50 35.724 50zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))};var k,T,C,O;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(null,arguments)}const P=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:71,height:36,fill:"none",viewBox:"0 0 71 36","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,k||(k=o.createElement("path",{d:"M2 3.76h40v30H2zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),T||(T=o.createElement("path",{d:"M.5 2.26h43V17.5h9.599a8 8 0 1 1 .091 3H43.5v14.76H.5zm3 3v27h37v-27zM61 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),C||(C=o.createElement("path",{d:"M52.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),O||(O=o.createElement("path",{d:"M10.89 26v-2.31h3.087V12.98H10.89v-2.31h8.82v2.31h-3.087v10.71h3.087V26zm12.277 0V10.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q29.278 26 27.724 26zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))},B={},R=()=>o.createElement(s,{style:B}),I=()=>o.createElement(q,{style:B}),U=()=>o.createElement(y,{style:B}),j=()=>o.createElement(L,{style:B}),F=()=>o.createElement(P,{style:B}),G=e=>{let{variant:t="expanded",hideBackground:n=!1}=e;switch(t){case"expanded":return n?o.createElement(I,null):o.createElement(R,null);case"compact":return n?o.createElement(F,null):o.createElement(U,null);case"compact-square":return n?o.createElement(F,null):o.createElement(j,null)}}},9777:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540),l=n(3865);const r={React:a,...a,Logo:l.Ay}}}]);