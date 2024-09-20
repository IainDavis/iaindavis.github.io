"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[4279],{64889:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(74848),o=n(28453),s=n(30039);const a={title:"Fixing Blog-Post Truncation",date:"2024-09-16T16:01",authors:["iain"],tags:["docusaurus","troubleshooting"]},r=void 0,l={permalink:"/blog/2024/09/16/2024-09-16-fixing-blog-post-truncation/fixing-blog-post-truncation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-16-fixing-blog-post-truncation/2024-09-16-fixing-blog-post-truncation.mdx",source:"@site/blog/2024-09-16-fixing-blog-post-truncation/2024-09-16-fixing-blog-post-truncation.mdx",title:"Fixing Blog-Post Truncation",description:"It's a best-practice in Docusaurus to include a truncation marker in your blog",date:"2024-09-16T16:01:00.000Z",tags:[{inline:!1,label:"Docusaurus",permalink:"/blog/tags/docusaurus",description:"Posts related to working with Docusaurus configuration and components"},{inline:!1,label:"Trouble-shooting",permalink:"/blog/tags/troubleshooting",description:"Posts having to do with solving problems"}],readingTime:2.265,hasTruncateMarker:!0,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Fixing Blog-Post Truncation",date:"2024-09-16T16:01",authors:["iain"],tags:["docusaurus","troubleshooting"]},unlisted:!1,prevItem:{title:"Getting Set-Up For Unit Tests",permalink:"/blog/2024/09/20/2024-09-20-getting-set-up-for-unit-tests/getting-set-up-for-unit-tests"},nextItem:{title:"Switching automation providers",permalink:"/blog/2024/09/16/2024-09-16-switching-automation-provider/switching-automation-provider"}},c={authorsImageUrls:[void 0]},d=[];function h(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"It's a best-practice in Docusaurus to include a truncation marker in your blog\nposts. That way, when you're looking at a list of posts, you just see a brief\nintroduction from each post, instead of the full content of the first post\npushing the second post clear off the page."}),"\n",(0,i.jsxs)(e.p,{children:['It\'s where all those "Read more" links are coming from on the ',(0,i.jsx)(e.a,{href:"/blog",children:"main page for my blog"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"The default truncation marker for markdown files looks like this:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\x3c!-- truncate --\x3e\n"})}),"\n",(0,i.jsx)(e.p,{}),"\n",(0,i.jsx)(e.p,{children:"If you're somebody who's looked even a little under the hood of the\nwebsites you visit, you'll recognize that as a simple XML comment. That's all well and\ngood."}),"\n",(0,i.jsx)(e.p,{children:"Until you try to open that file in VS Code with the MDX plugin installed. Then,\nyour syntax highlighting looks like this:"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"Screen shot showing MDX syntax highlighting showing many error-checking false\npositives",src:n(4902).A+"",title:"Yikes.",width:"1720",height:"1324"}),";"]}),"\n",(0,i.jsx)(e.p,{children:"It's distracting, to say the least."}),"\n",(0,i.jsx)(e.p,{children:"Luckily, Docusaurus gives you a mechanism for overriding the default token.\nThere's a property in the presets for the blog plugin that lets you specify the\ntoken that Docusaurus will use to identify where the summary portion ends:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",metastring:'title="docusaurus.config.ts"',children:"export default config: Config = {\n    presets: {\n        blog: {\n            // this is the default for mdx\n            truncateMarker: /\\s\x3c!-- truncate --\x3e\\s/\n            /* other blog configs*/\n        }\n        /* other preset configs*/\n    }\n    /* other docusaurus configs*/\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["So I updated mine to ",(0,i.jsx)(e.code,{children:"TRUNCATE_HERE"})," (full disclosure, an AI picked the actual\ntoken to use)."]}),"\n",(0,i.jsxs)(e.p,{children:["That worked pretty well! All my blogs are nicely truncated on the main blog\npage, ",(0,i.jsx)(e.em,{children:"and"})," they don't look horrendous in the editor. Cool."]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"editor"}),(0,i.jsx)(e.th,{children:"main blog page"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.img,{alt:"screen capture showing corrected view in editor",src:n(44863).A+"",width:"1720",height:"1320"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.img,{alt:"screen capture showing correct view on website",src:n(6189).A+"",width:"1992",height:"1838"})})]})})]}),"\n",(0,i.jsx)(e.admonition,{title:"There is just... one more thing",type:"caution",children:(0,i.jsx)("img",{style:{height:"200px"},src:s.A,alt:"Freeze frame of Lieutenant Detective Columbo looking disheveled, about\nto wreck your whole dastardly plan"})}),"\n",(0,i.jsx)(e.p,{children:"Everything looks fine until you actually open the blog post:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Screen capture showing the truncate token still visible in the blog\npost",src:n(74918).A+"",width:"1162",height:"1058"})}),"\n",(0,i.jsx)(e.p,{children:"Okay. I can fix this. Can I fix this? I'm pretty sure I can fix this."}),"\n",(0,i.jsx)(e.p,{children:"It turns out yes. Yes, I can."}),"\n",(0,i.jsx)(e.p,{children:"The solution is to add a custom Remark plugin that strips out that line\nmanually. Me and my friendly neighborhood artificial intelligence sorted it out.\nIt steered me a bit wrong, but eventually together we were able to sort it out.\nMuch faster than I'd have done it on my own, I'm sure."}),"\n",(0,i.jsxs)(e.p,{children:["You can see the AI transcript\n",(0,i.jsx)(e.a,{href:"https://chatgpt.com/share/66e7d39f-9b30-8000-a12f-a9b8efa5992a",children:"here"})," (it's\nquite long, I don't actually expect you to look at that, but maybe somebody's\ninterested)."]}),"\n",(0,i.jsxs)(e.p,{children:["And my final solution in ",(0,i.jsx)(e.a,{href:"https://github.com/IainDavis/iaindavis.github.io/pull/6",children:"the PR"})]})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},30039:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/there-is-just-one-more-thing-41282594a909054c59f107266dcda5d4.webp"},44863:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/much-better-editor-13dd7a2cc7921b45a7b0f914f9dfe460.png"},6189:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/much-better-site-86d7e66d9ac0614d1983d4ae119d394a.png"},4902:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/truncate-em-i-hardly-know-em-ce908cdfb67b21284caf362e09ec14b4.png"},74918:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/uhwhut-d7f00fbaa683d8f2ed3292bb17ab115d.png"},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);