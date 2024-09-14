/*! For license information please see 81fd9b3c.560e86f0.js.LICENSE.txt */
"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[331],{6017:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(4848),s=o(8453);o(3954);const r={title:"Challenges Getting Docusaurus Styles Into Storybook",date:"2024-09-14T14:40",tags:["docusaurus","storybook","stylesheets"]},a=void 0,i={permalink:"/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx",source:"@site/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx",title:"Challenges Getting Docusaurus Styles Into Storybook",description:"I thought it would be a good idea to have a central location to showcase",date:"2024-09-14T14:40:00.000Z",tags:[{inline:!1,label:"Docusaurus",permalink:"/blog/tags/docusaurus",description:"Docusaurus tag description"},{inline:!0,label:"storybook",permalink:"/blog/tags/storybook"},{inline:!0,label:"stylesheets",permalink:"/blog/tags/stylesheets"}],readingTime:2.65,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Challenges Getting Docusaurus Styles Into Storybook",date:"2024-09-14T14:40",tags:["docusaurus","storybook","stylesheets"]},unlisted:!1,nextItem:{title:"Expandable!",permalink:"/blog/2024/09/14/expandable"}},c={authorsImageUrls:[]},l=[];function d(e){const t={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"I thought it would be a good idea to have a central location to showcase\nwhatever components I add to the Docusaurus repertoire."}),"\n",(0,n.jsxs)(t.p,{children:["I'd worked with ",(0,n.jsx)(t.a,{href:"https://storybook.js.org/",children:"Storybook"})," before, and found it\npretty handy. During development, it gives you a way to interact with a component-in-progress and\nsee that it works as intended. It can serve as a beginning basis for unit and\ncomponent tests, and it can be a really handy tool for communicating with\nnon-technical stakeholders... clicking on a component and seeing immediately how\nit responds is much easier to grasp than an engineer trying to explain something\nto you in non-engineer-speak as best they can. The proof is in the pudding, as\nthey say."]}),"\n",(0,n.jsx)(t.p,{children:"Another nice feature is its extensibility. If it doesn't do something you want\nit to do, you can often create an addon or a decorator that will accomplish it."}),"\n",(0,n.jsx)(t.p,{children:"So I downloaded the dependency, and began writing stories for my shiny new\n'Expandable' component."}),"\n",(0,n.jsx)(t.p,{children:"Imagine my distress when I started up the development server for the first time\nand saw that my themes weren't being applied to the custom element. I worked\nhard to include those themes!"}),"\n",(0,n.jsx)(t.p,{children:"(I promise, I'm clicking the button in the screen recording shown below)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen capture showing theme button being clicked, and nothing changing in the\ndisplay",src:o(2480).A+"",title:"Oh Noes!",width:"640",height:"507"})}),"\n",(0,n.jsxs)(t.p,{children:["It took me a little while to track down the problem. It turns out that\nDocusaurus and Storybook drive their theme-based styles off of different\nconditions. Docusaurus applies a data attribute at the root of the HTML\ndocument, which it then uses as the selector for its CSS styles. Storybook uses\nthe built-in ",(0,n.jsx)(t.code,{children:"class"})," attribute."]}),"\n",(0,n.jsx)(t.p,{children:"I didn't want to pollute my code with a bunch of redundant attributes that\naccomplish the same thing. Happily, I was able to leverage Storybook's\nextensibility to solve that problem."}),"\n",(0,n.jsxs)(t.p,{children:["I created a Decorator... an object that Storybook, in essence, wraps ",(0,n.jsx)(t.em,{children:"around"}),"\nyour stories to provide new functionality. In this case, I captured the current\ntheme from the Storybook context, and set the ",(0,n.jsx)(t.code,{children:"data-theme"})," attribute at the root\nof the preview pane accordingly."]}),"\n",(0,n.jsx)(t.p,{children:"Here's my very simple decorator:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:"title='withDocusaurusStyles.ts'",children:"import React from \"react\";\nimport { useEffect } from \"react\";\n\n// apply a data attribute ('data-theme') at the root element of the\n// Storybook preview iframe so that Docusaurus styles are applied\n// within the preview\nexport default (Story, context) => {\n    const { theme='light' } = context?.globals;\n    useEffect(() => {\n        const themeRoot = document.querySelector('html');\n        themeRoot && themeRoot.setAttribute('data-theme', theme);\n    }, [theme])\n\n    return <Story />\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["I applied those to every published story via my ",(0,n.jsx)(t.code,{children:".storybook/preview.ts"})," file, and now my\nthemed Docusaurus components respond to the dark/light theme in Storybook!"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title=".storybook/preview.ts"',children:"import type { Preview } from \"@storybook/react\";\nimport './assets/styles/docusaurus_global.css'\nimport withDocusaurusStyles from './decorators/withDocusaurusStyles';\nimport { withThemeByClassName } from \"@storybook/addon-themes\";\n\nconst preview: Preview = {\n  decorators: [\n    // highlight-next-line\n    withDocusaurusStyles,\n    withThemeByClassName({\n      themes: {\n        light: 'light',\n        dark: 'dark' ,\n      },\n      defaultTheme: 'light',\n    })\n  ],\n  parameters: {\n    controls: {\n      matchers: {\n        color: /(background|color)$/i,\n        date: /Date$/i,\n      },\n    },\n  },\n};\n\nexport default preview;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Pretty pleased."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screen capture showing theme button being clicked and colors being applied as expected",src:o(607).A+"",title:"Thats more like it",width:"640",height:"507"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3954:(e,t,o)=>{o.d(t,{A:()=>c});var n=o(6540);const s="container_XrmH",r="hidden_mC2W",a="toggle_Ohix",i="expandableBlock_QjU_",c=e=>{let{startExpanded:t=!1,expandPrompt:o="show more...",collapsePrompt:c="show less",children:l}=e;const[d,h]=(0,n.useState)(t);return n.createElement("div",{className:s},n.createElement("div",{className:`${i} ${d?"":r}`},l),n.createElement("div",{className:a,onClick:()=>{h(!d)}},d?c:o))}},1020:(e,t,o)=>{var n=o(6540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,r={},l=null,d=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},4848:(e,t,o)=>{e.exports=o(1020)},2480:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/broken-4fe89e7d100605a80c880b6d1c94359f.gif"},607:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/fixed-c35545543586568f55c431c0ac093e55.gif"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(6540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);