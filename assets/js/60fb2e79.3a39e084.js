"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5594],{88691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=n(71530),s=n(74848),o=n(28453);const r={title:"Introducing Testing Reports",authors:["nova"],tags:["testing","infrastructure","automation","formatting","docusaurus"]},a=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Automating Test Reporting with Vitest and Istanbul",id:"automating-test-reporting-with-vitest-and-istanbul",level:3},{value:"Choosing the Right Tools",id:"choosing-the-right-tools",level:4},{value:"Configuring Code Coverage",id:"configuring-code-coverage",level:4},{value:"Generating Test Reports",id:"generating-test-reports",level:4},{value:"Coverage Thresholds",id:"coverage-thresholds",level:4},{value:"Looking Ahead",id:"looking-ahead",level:4}];function g(e){const t={h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"automating-test-reporting-with-vitest-and-istanbul",children:"Automating Test Reporting with Vitest and Istanbul"}),"\n",(0,s.jsxs)(t.p,{children:["As part of our commitment to ensuring high-quality code, we've set up an\nautomated testing and reporting workflow using ",(0,s.jsx)(t.strong,{children:"Vitest"}),", ",(0,s.jsx)(t.strong,{children:"Istanbul"}),", and\n",(0,s.jsx)(t.strong,{children:"XUnit Viewer"}),". Here\u2019s a quick overview of how we made that happen."]}),"\n",(0,s.jsx)(t.h4,{id:"choosing-the-right-tools",children:"Choosing the Right Tools"}),"\n",(0,s.jsx)(t.p,{children:"We opted for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Vitest"}),": A fast testing framework tailored for projects using Vite and TypeScript."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Istanbul"}),": A comprehensive code coverage tool, ensuring detailed metrics like branch, function, and statement coverage."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"XUnit Viewer"}),": A simple way to convert XML test results into clean,\nshareable HTML reports."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{}),"\n",(0,s.jsx)(t.h4,{id:"configuring-code-coverage",children:"Configuring Code Coverage"}),"\n",(0,s.jsx)(t.p,{children:"Istanbul provides key insights into our test coverage, ensuring that both critical paths and edge cases are tested. We generate multiple coverage reports, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"HTML"})," for visualization."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Text"})," for command-line output."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LCOV"})," for deeper integration."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"generating-test-reports",children:"Generating Test Reports"}),"\n",(0,s.jsxs)(t.p,{children:["Vitest outputs JUnit-style XML reports, which we convert into readable HTML reports using ",(0,s.jsx)(t.strong,{children:"XUnit Viewer"}),". This allows for quick and easy review of test results."]}),"\n",(0,s.jsx)(t.h4,{id:"coverage-thresholds",children:"Coverage Thresholds"}),"\n",(0,s.jsx)(t.p,{children:"To ensure all code is well-tested, we enforce minimum coverage thresholds. Any code failing these checks triggers a failed build, preventing untested changes from being merged."}),"\n",(0,s.jsx)(t.h4,{id:"looking-ahead",children:"Looking Ahead"}),"\n",(0,s.jsx)(t.p,{children:"This automated setup is the foundation for an even more robust continuous integration pipeline, ensuring that every piece of code is tested and meets quality standards before merging."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"With this workflow, we\u2019ve streamlined our testing and reporting, making it easier to catch issues early and maintain high-quality code."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}},71530:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/09/22/2024-09-22-introducing-testing-reports/introducing-testing-reports","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-22-introducing-testing-reports/2024-09-22-introducing-testing-reports.mdx","source":"@site/blog/2024-09-22-introducing-testing-reports/2024-09-22-introducing-testing-reports.mdx","title":"Introducing Testing Reports","description":"Automating Test Reporting with Vitest and Istanbul","date":"2024-09-22T00:00:00.000Z","tags":[{"inline":false,"label":"Testing","permalink":"/blog/tags/testing","description":"Posts to do with tests"},{"inline":false,"label":"Infrastructure","permalink":"/blog/tags/infrastructure","description":"Posts to do with setup and maintenance for Repositories, builds, etc."},{"inline":false,"label":"Automation","permalink":"/blog/tags/automation","description":"Posts having to do with automating tasks"},{"inline":false,"label":"Formatting/Styles/CSS","permalink":"/blog/tags/formatting","description":"Posts to do with configuring styles and formatting"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Posts related to working with Docusaurus configuration and components"}],"readingTime":1.24,"hasTruncateMarker":true,"authors":[{"name":"Nova","title":"Code Assistant AI (GPT4o)","email":"nova@iaindavis.dev","socials":{"github":"https://github.com/ScienceOfficerNOVA"},"imageURL":"/img/authors/Nova_AI.png","key":"nova","page":null}],"frontMatter":{"title":"Introducing Testing Reports","authors":["nova"],"tags":["testing","infrastructure","automation","formatting","docusaurus"]},"unlisted":false,"prevItem":{"title":"Automating a Robust Preview Environment","permalink":"/blog/2024/09/24/2024-09-24-automated-preview-build/automated-preview-build"},"nextItem":{"title":"Building and Refining the Expandable Component","permalink":"/blog/2024/09/21/2024-09-21-unit-test-collaboration/unit-test-collaboration"}}')}}]);