"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[401],{2234:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(6540),l=n(4164),r=n(4084),c=n(7559),i=n(518);function o(e){let{className:t}=e;return a.createElement(i.A,{type:"caution",title:a.createElement(r.Rc,null),className:(0,l.A)(t,c.G.common.unlistedBanner)},a.createElement(r.Uh,null))}function s(e){return a.createElement(a.Fragment,null,a.createElement(r.AE,null),a.createElement(o,e))}},1689:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(6540),l=n(4164),r=n(4084),c=n(7559),i=n(518);function o(e){let{className:t}=e;return a.createElement(i.A,{type:"caution",title:a.createElement(r.Yh,null),className:(0,l.A)(t,c.G.common.draftBanner)},a.createElement(r.TT,null))}var s=n(2234);function m(e){let{metadata:t}=e;const{unlisted:n,frontMatter:l}=t;return a.createElement(a.Fragment,null,(n||l.unlisted)&&a.createElement(s.A,null),l.draft&&a.createElement(o,null))}},3473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var a=n(6540),l=n(1213),r=n(9532);const c=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(c.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(c);if(null===e)throw new r.dV("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=o();return a.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(4164),d=n(4581),h=n(8168),u=n(1312),v=n(9022);function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v.A,(0,h.A)({},t,{subLabel:a.createElement(u.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v.A,(0,h.A)({},n,{subLabel:a.createElement(u.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function q(){const{metadata:e}=o();return a.createElement(b,{previous:e.previous,next:e.next})}var f=n(4586),p=n(8774),E=n(4070),g=n(7559),A=n(3886),x=n(3025);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(u.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(u.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=C[e.versionMetadata.banner];return a.createElement(t,e)}function N(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(u.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(p.A,{to:n,onClick:l},a.createElement(u.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function w(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,f.A)(),{pluginId:r}=(0,E.vT)({failfast:!0}),{savePreferredVersionName:c}=(0,A.g1)(r),{latestDocSuggestion:i,latestVersionSuggestion:o}=(0,E.HW)(r),s=i??(d=o).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,m.A)(t,g.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(L,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(N,{versionLabel:o.label,to:s.path,onClick:()=>c(o.name)})))}function H(e){let{className:t}=e;const n=(0,x.r)();return n.banner?a.createElement(w,{className:t,versionMetadata:n}):null}function V(e){let{className:t}=e;const n=(0,x.r)();return n.badge?a.createElement("span",{className:(0,m.A)(t,g.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(u.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}var M=n(9679),T=n(5406);function y(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,tags:r}=e,c=r.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,m.A)(g.G.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement("div",{className:(0,m.A)("row margin-top--sm",g.G.docs.docFooterTagsRow)},a.createElement("div",{className:"col"},a.createElement(M.A,{tags:r}))),i&&a.createElement(T.A,{className:(0,m.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l})):null}var k=n(1422),z=n(5195);const _={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function O(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,h.A)({type:"button"},n,{className:(0,m.A)("clean-btn",_.tocCollapsibleButton,!t&&_.tocCollapsibleButtonExpanded,n.className)}),a.createElement(u.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const B={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function I(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:c,toggleCollapsed:i}=(0,k.u)({initialState:!0});return a.createElement("div",{className:(0,m.A)(B.tocCollapsible,!c&&B.tocCollapsibleExpanded,n)},a.createElement(O,{collapsed:c,onClick:i}),a.createElement(k.N,{lazy:!0,className:B.tocCollapsibleContent,collapsed:c},a.createElement(z.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const R={tocMobile:"tocMobile_ITEo"};function P(){const{toc:e,frontMatter:t}=o();return a.createElement(I,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(g.G.docs.docTocMobile,R.tocMobile)})}var j=n(321);function G(){const{toc:e,frontMatter:t}=o();return a.createElement(j.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var S=n(7425),U=n(1467);function F(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=o();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.A)(g.G.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(S.A,{as:"h1"},n)),a.createElement(U.A,null,t))}var D=n(6972),Z=n(9169),Q=n(6025);function Y(e){return a.createElement("svg",(0,h.A)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const $={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function X(){const e=(0,Q.Ay)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(p.A,{"aria-label":(0,u.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(Y,{className:$.breadcrumbHomeIcon})))}const W={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function J(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(p.A,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function K(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,h.A)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ee(){const e=(0,D.OF)(),t=(0,Z.Dt)();return e?a.createElement("nav",{className:(0,m.A)(g.G.docs.docBreadcrumbs,W.breadcrumbsContainer),"aria-label":(0,u.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(X,null),e.map(((t,n)=>{const l=n===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return a.createElement(K,{key:n,active:l,index:n,addMicrodata:!!r},a.createElement(J,{href:r,isLast:l},t.label))})))):null}var te=n(1689);const ne={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ae(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=o(),n=(0,d.l)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(P,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(G,null)}}(),{metadata:l}=o();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.A)("col",!n.hidden&&ne.docItemCol)},a.createElement(te.A,{metadata:l}),a.createElement(H,null),a.createElement("div",{className:ne.docItemContainer},a.createElement("article",null,a.createElement(ee,null),a.createElement(V,null),n.mobile,a.createElement(F,null,t),a.createElement(y,null)),a.createElement(q,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function le(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.e3,{className:t},a.createElement(s,null),a.createElement(ae,null,a.createElement(n,null))))}},321:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(8168),l=n(6540),r=n(4164),c=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},o="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.A)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(c.A,(0,a.A)({},n,{linkClassName:o,linkActiveClassName:s})))}},5195:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(8168),l=n(6540),r=n(6342);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),o=s(i,{anchorTopOffset:n.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var h=n(8774);function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement(h.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:h,...u}=e;const b=(0,r.p)(),q=m??b.tableOfContents.minHeadingLevel,f=h??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:q,maxHeadingLevel:f});return d((0,l.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:q,maxHeadingLevel:f}}),[o,s,q,f])),l.createElement(v,(0,a.A)({toc:p,className:n,linkClassName:o},u))}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>c,TT:()=>m,Uh:()=>i,Yh:()=>s});var a=n(6540),l=n(1312),r=n(5260);function c(){return a.createElement(l.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title"},"Unlisted page")}function i(){return a.createElement(l.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function o(){return a.createElement(r.A,null,a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}function s(){return a.createElement(l.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title"},"Draft page")}function m(){return a.createElement(l.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message"},"This page is a draft. It will only be visible in dev and be excluded from the production build.")}},3865:(e,t,n)=>{n.d(t,{at:()=>j,CX:()=>S,Xf:()=>G,qC:()=>R,wZ:()=>P,Ay:()=>U});var a,l,r,c,i,o=n(6540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(null,arguments)}const m=e=>{let{title:t,titleId:n,...m}=e;return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:180,height:50,fill:"none",viewBox:"0 0 180 50","aria-labelledby":n},m),t?o.createElement("title",{id:n},t):null,a||(a=o.createElement("rect",{width:180,height:50,"data-fill":"background",rx:8})),l||(l=o.createElement("path",{d:"M10 9.76h130v30H10zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),r||(r=o.createElement("path",{d:"M8.5 8.26h133V23.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H8.5zm3 3v27h127v-27zM159 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),c||(c=o.createElement("path",{d:"M150.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),i||(i=o.createElement("path",{d:"M19.89 32.76v-2.31h3.087V19.74H19.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T37.039 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V21.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V17.43H74.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588h-4.557Zm2.625-2.415H74.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H82.66q.189-1.638 1.47-2.604T87.406 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M98.17 32.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.105-.399.273-1.071t.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))};var d,h,u,v;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(null,arguments)}const q=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:161,height:36,fill:"none",viewBox:"0 0 161 36","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,d||(d=o.createElement("path",{d:"M2 3.76h130v30H2zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),h||(h=o.createElement("path",{d:"M.5 2.26h133V17.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H.5zm3 3v27h127v-27zM151 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),u||(u=o.createElement("path",{d:"M142.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),v||(v=o.createElement("path",{d:"M11.89 26.76v-2.31h3.087V13.74H11.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T29.039 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V15.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V11.43H66.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588zm2.625-2.415H66.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H74.66q.189-1.638 1.47-2.604T79.406 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M90.17 26.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.104-.399.273-1.071.168-.672.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))};var f,p,E,g,A;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(null,arguments)}const C=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:82,height:50,fill:"none",viewBox:"0 0 82 50","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,f||(f=o.createElement("rect",{width:82,height:50,"data-fill":"background",rx:8})),p||(p=o.createElement("path",{d:"M10 9.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),E||(E=o.createElement("path",{d:"M8.5 8.26h43V23.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),g||(g=o.createElement("path",{d:"M60.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),A||(A=o.createElement("path",{d:"M18.89 32v-2.31h3.087V18.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V32zm12.277 0V16.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 32 35.724 32zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))};var L,N,w,H,V;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(null,arguments)}const T=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:82,height:82,fill:"none",viewBox:"0 0 82 82","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,L||(L=o.createElement("rect",{width:82,height:82,"data-fill":"background",rx:8})),N||(N=o.createElement("path",{d:"M10 27.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),w||(w=o.createElement("path",{d:"M8.5 26.26h43V41.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 47.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),H||(H=o.createElement("path",{d:"M60.196 32.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V24h1.5v8.76h-1.464V31.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),V||(V=o.createElement("path",{d:"M18.89 50v-2.31h3.087V36.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V50zm12.277 0V34.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 50 35.724 50zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))};var y,k,z,_;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(null,arguments)}const B=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:71,height:36,fill:"none",viewBox:"0 0 71 36","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,y||(y=o.createElement("path",{d:"M2 3.76h40v30H2zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),k||(k=o.createElement("path",{d:"M.5 2.26h43V17.5h9.599a8 8 0 1 1 .091 3H43.5v14.76H.5zm3 3v27h37v-27zM61 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),z||(z=o.createElement("path",{d:"M52.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),_||(_=o.createElement("path",{d:"M10.89 26v-2.31h3.087V12.98H10.89v-2.31h8.82v2.31h-3.087v10.71h3.087V26zm12.277 0V10.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q29.278 26 27.724 26zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))},I={},R=()=>o.createElement(m,{style:I}),P=()=>o.createElement(q,{style:I}),j=()=>o.createElement(C,{style:I}),G=()=>o.createElement(T,{style:I}),S=()=>o.createElement(B,{style:I}),U=e=>{let{variant:t="expanded",hideBackground:n=!1}=e;switch(t){case"expanded":return n?o.createElement(P,null):o.createElement(R,null);case"compact":return n?o.createElement(S,null):o.createElement(j,null);case"compact-square":return n?o.createElement(S,null):o.createElement(G,null)}}},9777:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540),l=n(3865);const r={React:a,...a,Logo:l.Ay}}}]);