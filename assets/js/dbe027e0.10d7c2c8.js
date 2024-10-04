"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[956],{76686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(74848),i=n(28453);const r={title:"Tests",date:"2024-09-30T11:13"},o=void 0,a={id:"projects/iaindavis.dev/implementation/tests/tests",title:"Tests",description:"Unit Tests",source:"@site/docs/projects/iaindavis.dev/03-implementation/04-tests/04-tests.mdx",sourceDirName:"projects/iaindavis.dev/03-implementation/04-tests",slug:"/projects/iaindavis.dev/implementation/tests/",permalink:"/docs/projects/iaindavis.dev/implementation/tests/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/iaindavis.dev/03-implementation/04-tests/04-tests.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Tests",date:"2024-09-30T11:13"},sidebar:"projectsSidebar",previous:{title:"CI/CD",permalink:"/docs/projects/iaindavis.dev/implementation/ci-cd/"},next:{title:"Key Learnings",permalink:"/docs/projects/iaindavis.dev/key-learnings/"}},l={},d=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"CI Tests",id:"ci-tests",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Linting, and Style",id:"linting-and-style",level:3},{value:"Component/Integration/E2E Tests",id:"componentintegratione2e-tests",level:3}];function c(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsx)(t.p,{children:"The site source features a suite of unit tests that exercise the\ncustom React components."}),"\n",(0,s.jsx)(t.p,{children:"Tests are written using"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Vitest"}),"\n",(0,s.jsx)(t.li,{children:"React Testing Library"}),"\n",(0,s.jsx)(t.li,{children:"Storybook"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Tests are run during local development, and during each build (preview\nenvironment on PR events, production environment on merge-to-main).\nFor a production deployment, failing tests will halt the deployment."}),"\n",(0,s.jsx)(t.p,{children:"Test results and coverage results for the\nlatest production deployment are viewable from the website:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://iaindavis.dev/reports/unittest/",title:"Unit test results for most recent production build",children:"unit test results"})," (generated by ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/xunit-viewer",title:"XUnit-Viewer test-report generator",children:"XUnit-Viewer"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://iaindavis.dev/reports/coverage/",title:"Unit test coverage for most recent production build",children:"coverage"})," (Istanbul coverage metrics rendered via Vitest's coverage reporter)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Test results for a PR run are viewable at the equivalent URL within\nthe preview evironment."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://istanbul.js.org/",title:"Istanbul test coverage engine",children:"Istanbul"})," is used for coverage in place of the Vitest\ndefault, V8, for its more precise branch detection."]}),"\n",(0,s.jsx)(t.h2,{id:"ci-tests",children:"CI Tests"}),"\n",(0,s.jsx)(t.p,{children:"The Docusaurus and Storybook content are built prior to any\ndeployment (preview or production). If the build fails, the deployment\nis aborted. Output from a failure is viewable in GitHub actions"}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.h3,{id:"linting-and-style",children:"Linting, and Style"}),"\n",(0,s.jsx)(t.p,{children:"Future additions will add pre-commit linting checks, as well as spell-checks and\nprose checks (with Vale)"}),"\n",(0,s.jsx)(t.h3,{id:"componentintegratione2e-tests",children:"Component/Integration/E2E Tests"}),"\n",(0,s.jsx)(t.p,{children:"For now, Storybook (backed by unit tests) serves as an adequate\ntest-bed for Component testing."}),"\n",(0,s.jsx)(t.p,{children:"At present, this website depends on no back-end services or other\nintegrations that require E2E or integration tests."}),"\n",(0,s.jsx)(t.p,{children:"In the future, this site will explore incorporating some external API\ncalls as a means to automate documentation as much as possible.\nAt that time, the testing approach will be expanded to include more\ntesting categories."}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);