"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[643],{5124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(6540),n=a(4164),r=a(4586),i=a(1213),c=a(7559),m=a(3841),o=a(7713),h=a(1463),s=a(3892),v=a(5260),d=a(4096);function q(e){const t=(0,d.kJ)(e);return l.createElement(v.A,null,l.createElement("script",{type:"application/ld+json"},JSON.stringify(t)))}function u(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:n,blogTitle:c,permalink:m}=t,o="/"===m?a:c;return l.createElement(l.Fragment,null,l.createElement(i.be,{title:o,description:n}),l.createElement(h.A,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:n}=e;return l.createElement(m.A,{sidebar:n},l.createElement(s.A,{items:a}),l.createElement(o.A,{metadata:t}))}function p(e){return l.createElement(i.e3,{className:(0,n.A)(c.G.wrapper.blogPages,c.G.page.blogListPage)},l.createElement(u,e),l.createElement(q,e),l.createElement(g,e))}},7713:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(6540),n=a(1312),r=a(9022);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.A,{permalink:a,title:l.createElement(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer entries")}),i&&l.createElement(r.A,{permalink:i,title:l.createElement(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older entries"),isNext:!0}))}},5476:(e,t,a)=>{a.d(t,{A:()=>H});var l=a(6540),n=a(4164),r=a(4096);function i(e){let{children:t,className:a}=e;return l.createElement("article",{className:a},t)}var c=a(8774);const m={title:"title_f1Hy"};function o(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.e7)(),{permalink:o,title:h}=a,s=i?"h1":"h2";return l.createElement(s,{className:(0,n.A)(m.title,t)},i?h:l.createElement(c.A,{to:o},h))}var h=a(1312),s=a(5846),v=a(6266);const d={container:"container_mt6G"};function q(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,s.W)();return t=>{const a=Math.ceil(t);return e(a,(0,h.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function u(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t},a)}function g(){return l.createElement(l.Fragment,null," \xb7 ")}function p(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:i,readingTime:c}=a,m=(0,v.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return l.createElement("div",{className:(0,n.A)(d.container,"margin-vert--md",t)},l.createElement(u,{date:i,formattedDate:(o=i,m.format(new Date(o)))}),void 0!==c&&l.createElement(l.Fragment,null,l.createElement(g,null),l.createElement(q,{readingTime:c})));var o}var E=a(1031);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.e7)();if(0===a.length)return null;const c=a.every((e=>{let{name:t}=e;return!t})),m=1===a.length;return l.createElement("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",c?f.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.A)(!c&&(m?"col col--12":"col col--6"),c?f.imageOnlyAuthorCol:f.authorCol),key:t},l.createElement(E.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function w(){return l.createElement("header",null,l.createElement(o,null),l.createElement(p,null),l.createElement(b,null))}var A=a(440),z=a(1467);function V(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.e7)();return l.createElement("div",{id:i?A.LU:void 0,className:(0,n.A)("markdown",a)},l.createElement(z.A,null,t))}var y=a(7559),M=a(5406),x=a(9679),k=a(8168);function N(){return l.createElement("b",null,l.createElement(h.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read more"))}function O(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.A,(0,k.A)({"aria-label":(0,h.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(N,null))}function T(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:i,editUrl:c,hasTruncateMarker:m,lastUpdatedBy:o,lastUpdatedAt:h}=e,s=!t&&m,v=a.length>0;if(!(v||s||c))return null;if(t){const e=!!(c||h||o);return l.createElement("footer",{className:"docusaurus-mt-lg"},v&&l.createElement("div",{className:(0,n.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow)},l.createElement("div",{className:"col"},l.createElement(x.A,{tags:a}))),e&&l.createElement(M.A,{className:(0,n.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:h,lastUpdatedBy:o}))}return l.createElement("footer",{className:"row docusaurus-mt-lg"},v&&l.createElement("div",{className:(0,n.A)("col",{"col--9":s})},l.createElement(x.A,{tags:a})),s&&l.createElement("div",{className:(0,n.A)("col text--right",{"col--3":v})},l.createElement(O,{blogPostTitle:i,to:e.permalink})))}function H(e){let{children:t,className:a}=e;const c=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return l.createElement(i,{className:(0,n.A)(c,a)},l.createElement(w,null),l.createElement(V,null,t),l.createElement(T,null))}},3892:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(6540),n=a(4096),r=a(5476);function i(e){let{items:t,component:a=r.A}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.in,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},3865:(e,t,a)=>{a.d(t,{at:()=>I,CX:()=>L,Xf:()=>F,qC:()=>_,wZ:()=>j,Ay:()=>Z});var l,n,r,i,c,m=a(6540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(null,arguments)}const h=e=>{let{title:t,titleId:a,...h}=e;return m.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:180,height:50,fill:"none",viewBox:"0 0 180 50","aria-labelledby":a},h),t?m.createElement("title",{id:a},t):null,l||(l=m.createElement("rect",{width:180,height:50,"data-fill":"background",rx:8})),n||(n=m.createElement("path",{d:"M10 9.76h130v30H10zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),r||(r=m.createElement("path",{d:"M8.5 8.26h133V23.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H8.5zm3 3v27h127v-27zM159 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),i||(i=m.createElement("path",{d:"M150.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),c||(c=m.createElement("path",{d:"M19.89 32.76v-2.31h3.087V19.74H19.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T37.039 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V21.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V17.43H74.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588h-4.557Zm2.625-2.415H74.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H82.66q.189-1.638 1.47-2.604T87.406 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M98.17 32.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.105-.399.273-1.071t.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))};var s,v,d,q;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(null,arguments)}const g=e=>{let{title:t,titleId:a,...l}=e;return m.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:161,height:36,fill:"none",viewBox:"0 0 161 36","aria-labelledby":a},l),t?m.createElement("title",{id:a},t):null,s||(s=m.createElement("path",{d:"M2 3.76h130v30H2zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),v||(v=m.createElement("path",{d:"M.5 2.26h133V17.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H.5zm3 3v27h127v-27zM151 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),d||(d=m.createElement("path",{d:"M142.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),q||(q=m.createElement("path",{d:"M11.89 26.76v-2.31h3.087V13.74H11.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T29.039 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V15.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V11.43H66.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588zm2.625-2.415H66.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H74.66q.189-1.638 1.47-2.604T79.406 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M90.17 26.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.104-.399.273-1.071.168-.672.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))};var p,E,f,b,w;function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},A.apply(null,arguments)}const z=e=>{let{title:t,titleId:a,...l}=e;return m.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:82,height:50,fill:"none",viewBox:"0 0 82 50","aria-labelledby":a},l),t?m.createElement("title",{id:a},t):null,p||(p=m.createElement("rect",{width:82,height:50,"data-fill":"background",rx:8})),E||(E=m.createElement("path",{d:"M10 9.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),f||(f=m.createElement("path",{d:"M8.5 8.26h43V23.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),b||(b=m.createElement("path",{d:"M60.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),w||(w=m.createElement("path",{d:"M18.89 32v-2.31h3.087V18.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V32zm12.277 0V16.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 32 35.724 32zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))};var V,y,M,x,k;function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},N.apply(null,arguments)}const O=e=>{let{title:t,titleId:a,...l}=e;return m.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:82,height:82,fill:"none",viewBox:"0 0 82 82","aria-labelledby":a},l),t?m.createElement("title",{id:a},t):null,V||(V=m.createElement("rect",{width:82,height:82,"data-fill":"background",rx:8})),y||(y=m.createElement("path",{d:"M10 27.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),M||(M=m.createElement("path",{d:"M8.5 26.26h43V41.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 47.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),x||(x=m.createElement("path",{d:"M60.196 32.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V24h1.5v8.76h-1.464V31.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),k||(k=m.createElement("path",{d:"M18.89 50v-2.31h3.087V36.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V50zm12.277 0V34.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 50 35.724 50zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))};var T,H,P,R;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},B.apply(null,arguments)}const C=e=>{let{title:t,titleId:a,...l}=e;return m.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:71,height:36,fill:"none",viewBox:"0 0 71 36","aria-labelledby":a},l),t?m.createElement("title",{id:a},t):null,T||(T=m.createElement("path",{d:"M2 3.76h40v30H2zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),H||(H=m.createElement("path",{d:"M.5 2.26h43V17.5h9.599a8 8 0 1 1 .091 3H43.5v14.76H.5zm3 3v27h37v-27zM61 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),P||(P=m.createElement("path",{d:"M52.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),R||(R=m.createElement("path",{d:"M10.89 26v-2.31h3.087V12.98H10.89v-2.31h8.82v2.31h-3.087v10.71h3.087V26zm12.277 0V10.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q29.278 26 27.724 26zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))},U={},_=()=>m.createElement(h,{style:U}),j=()=>m.createElement(g,{style:U}),I=()=>m.createElement(z,{style:U}),F=()=>m.createElement(O,{style:U}),L=()=>m.createElement(C,{style:U}),Z=e=>{let{variant:t="expanded",hideBackground:a=!1}=e;switch(t){case"expanded":return a?m.createElement(j,null):m.createElement(_,null);case"compact":return a?m.createElement(L,null):m.createElement(I,null);case"compact-square":return a?m.createElement(L,null):m.createElement(F,null)}}},9777:(e,t,a)=>{a.d(t,{A:()=>r});var l=a(6540),n=a(3865);const r={React:l,...l,Logo:n.Ay}}}]);