try{(()=>{__STORYBOOK_API__;var{ActiveTabs:e,Consumer:t,ManagerContext:r,Provider:o,RequestResponseError:s,addons:a,combineParameters:n,controlOrMetaKey:l,controlOrMetaSymbol:u,eventMatchesShortcut:i,eventToShortcut:c,experimental_requestResponse:S,isMacLike:y,isShortcutTaken:d,keyToSymbol:m,merge:p,mockChannel:h,optionOrAltSymbol:b,shortcutMatchesShortcut:O,shortcutToHumanString:T,types:_,useAddonState:g,useArgTypes:f,useArgs:A,useChannel:w,useGlobalTypes:k,useGlobals:P,useParameter:v,useSharedState:M,useStoryPrepared:R,useStorybookApi:x,useStorybookState:C}=__STORYBOOK_API__,G=(()=>{let e;return e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{},e})(),I="static-filter";a.register(I,(e=>{let t=Object.entries(G.TAGS_OPTIONS??{}).reduce(((e,t)=>{let[r,o]=t;return o.excludeFromSidebar&&(e[r]=!0),e}),{});e.experimental_setFilter(I,(e=>{let r=e.tags??[];return(r.includes("dev")||"docs"===e.type)&&0===r.filter((e=>t[e])).length}))}))})()}catch(e){console.error("[Storybook] One of your manager-entries failed: "+import.meta.url,e)}