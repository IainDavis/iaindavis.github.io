(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[646],{"./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/DocsRenderer-CFRXHY34.mjs":(e,o,r)=>{"use strict";r.d(o,{DocsRenderer:()=>u});var s=r("./node_modules/react/index.js"),t=r("./node_modules/@storybook/addon-essentials/node_modules/@storybook/blocks/dist/index.mjs"),n=r("./node_modules/react-dom/client.js"),d=new Map,c=({callback:e,children:o})=>{let r=s.useRef();return s.useLayoutEffect((()=>{r.current!==e&&(r.current=e,e())}),[e]),o};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,o=null;return{promise:new Promise(((r,s)=>{e=r,o=s})),resolve:e,reject:o}});var i=async(e,o)=>{let r=d.get(e);return r||(r=n.createRoot(e,o),d.set(e,r)),r},l={code:t.XA,a:t.zE,...t.Sw},a=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:o}=this.props;o(e)}render(){let{hasError:e}=this.state,{children:o}=this.props;return e?null:s.createElement(s.Fragment,null,o)}},u=class{constructor(){this.render=async(e,o,n)=>{let d={...l,...o?.components},u=t.kQ;return new Promise(((t,l)=>{r.e(913).then(r.bind(r,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:r})=>(async(e,o,r)=>{let t=await i(o,r);if(globalThis.IS_REACT_ACT_ENVIRONMENT)return void t.render(e);let{promise:n,resolve:d}=Promise.withResolvers();return t.render(s.createElement(c,{callback:d},e)),n})(s.createElement(a,{showException:l,key:Math.random()},s.createElement(r,{components:d},s.createElement(u,{context:e,docsParameter:o}))),n))).then((()=>t()))}))},this.unmount=e=>{(e=>{let o=d.get(e);o&&(o.unmount(),d.delete(e))})(e)}}};r("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs")},"./node_modules/@storybook/core/dist/components sync recursive":e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="./node_modules/@storybook/core/dist/components sync recursive",e.exports=o},"./node_modules/@storybook/core/dist/theming sync recursive":e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="./node_modules/@storybook/core/dist/theming sync recursive",e.exports=o},"./node_modules/memoizerific sync recursive":e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id="./node_modules/memoizerific sync recursive",e.exports=o}}]);