"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/09/14/2024-09-14-impromptu-brand-work/impromptu-brand-work","metadata":{"permalink":"/blog/2024/09/14/2024-09-14-impromptu-brand-work/impromptu-brand-work","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-impromptu-brand-work/2024-09-14-impromptu-brand-work.mdx","source":"@site/blog/2024-09-14-impromptu-brand-work/2024-09-14-impromptu-brand-work.mdx","title":"Impromptu Brand Work","description":"I didn\'t intend to create a bunch of brand graphics. I just knew I was going to","date":"2024-09-14T16:41:00.000Z","tags":[],"readingTime":6.375,"hasTruncateMarker":true,"authors":[{"name":"Iain Davis","title":"Software Engineer, Principal @ IainDavis.dev","url":"https://iaindavis.dev","email":"iain@iaindavis.dev","imageURL":"/img/authors/idavis.jpg","key":"iain","page":null}],"frontMatter":{"title":"Impromptu Brand Work","date":"2024-09-14T16:41","authors":["iain"]},"unlisted":false,"nextItem":{"title":"Challenges Getting Docusaurus Styles Into Storybook","permalink":"/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook"}},"content":"import Logo from \'../../src/components/brand/logo/Logo\';\\nimport FavIcon from \'/img/logo-favicon.svg\'\\n\\nexport const containerStyle = {\\n    display: \'flex\',\\n    justifyContent: \'center\',\\n    width: \'500px\',\\n}\\n\\nexport const paneStyle = {\\n    width: \'250px\',\\n    height: \'200px\',\\n    padding: \'2em\',\\n    display: \'flex\',\\n    justifyContent: \'flex-start\',\\n    alignItems: \'center\',\\n    flexDirection: \'column\',\\n}\\n\\nexport const contraLightStyle = {\\n    background: \'#1f1f1f\',\\n    color: \'#ffffff\',\\n}\\n\\nexport const contraDarkStyle = {\\n    background: \'#ffffff\',\\n    color: \'#1f1f1f\',\\n}\\n\\nexport const wrapperStyle = {\\n    margin: \'auto\',\\n}\\n\\nI didn\'t intend to create a bunch of brand graphics. I just knew I was going to\\nhave to replace the default docusaurus logos with _something_.\\n\\n<Logo />\\n\\n\x3c!-- truncate --\x3e\\n\\nI spent some time prompting AI to suggest me some logos. It didn\'t really\\nget what I was after. But it did stir some ideas in me. In the end I settled on\\nthe UML \'lollipop\' notation for an interface.\\n\\nFor anybody not familiar with UML, that looks like this:\\n\\n![UML Component Diagram Interface/Contract relationship notation, or\\n\\"Lollipop\\"](./_resources/lollipop.png)\\n\\nThe element on the right is going to perform some function. As part of that\\nfunction, it needs to use another element. Before it can use the other element,\\nit needs to know that that element _has certain things_ or _can do certain\\nthings_.\\n\\nThat set of needed things is called an interface. The element on the left wants\\nto use that interface, the one on the right provides an implementation of that\\ninterface. Usually an interface will have a name indicating what an object that\\nimplements it is supposed to do. An object that fulfills a `Downloadable`\\ninterface probably has a function on it called `Download()`. Different\\n`Downloadable` objects might do that operation in different ways, though.\\n\\nI landed on this rough concept:\\n\\n![UML Object \'IainDavis\' which provides interface \'dev\'](_resources/iaindavis.dev%20lollipop.png)\\n\\nConceptually, what that says is \\"IainDavis\\" is an entity that can do the set of\\nthings identified by the name \\"dev\\". It\'s graphically nice and clean, and it\\nsays something about what I do to people who are familiar with that kind of\\nwork.\\n\\nGood so far. But then, it\'s a little TOO clean isn\'t it? Just sort of boring in\\nblack and white and default fonts.\\n\\nThe next thing I needed is some colors. I have some experience in colors and\\naesthetics, but I really kind of want to move along quickly with this thing and\\nnot get so hung up in every detail. What I really needed is a pre-defined set of\\ncolors that are going to look reasonably attractive together, be distinctive,\\nand recognizable from a distance. Ideally, they should also relate to my work in\\nsome way, and they should be themable, since I want this website to be a\\nshowcase for what I can do. I should make the most of what Docusaurus offers,\\nincluding dark and light themes.\\n\\nIt didn\'t take me long to land on using syntax highlighting colors. The ones I\\nchose are from VS Code. The dark theme colors are from the default dark theme,\\nand the light theme colors are from the Solarized Light theme.\\n\\nThe last thing I needed was fonts. I just picked a couple reasonably attractive\\nmonospace fonts: JetBrains Mono and Fira Code. The rest of my styles are just\\nthe Docusaurus defaults.\\n\\nAlright, where are we at?\\n\\n<div style={containerStyle}>\\n    <div style={{...contraLightStyle, ...paneStyle}} data-theme=\\"light\\">\\n        <h3>Light theme</h3>\\n        <div style={wrapperStyle}>\\n            <Logo />\\n        </div>\\n    </div>\\n    <div style={{...contraDarkStyle, ...paneStyle}} data-theme=\\"dark\\">\\n        <h3>Dark theme</h3>\\n        <div style={wrapperStyle} >\\n            <Logo />\\n        </div>\\n    </div>\\n</div>\\n\\n<br/>\\nHey, that\'s pretty good! I will definitely use that. But it\'s a bit too wide to\\nreplace the Docusaurus logo in the navbar with. I need something more compact.\\n\\nafter some adjustments:\\n\\n<div style={containerStyle}>\\n    <div style={{...contraLightStyle, ...paneStyle}} data-theme=\\"light\\">\\n        <h3>Light theme</h3>\\n        <div style={wrapperStyle}>\\n            <Logo variant=\\"compact\\"/>\\n        </div>\\n    </div>\\n    <div style={{...contraDarkStyle, ...paneStyle}} data-theme=\\"dark\\">\\n        <h3>Dark theme</h3>\\n        <div style={wrapperStyle} >\\n            <Logo variant=\\"compact\\"/>\\n        </div>\\n    </div>\\n</div>\\n\\nOkay, that\'s good for the remaining stuff. But I still need a favIcon. The\\ndetail in that logo just gets completely lost at the resolution of a browser\\ntab. I think I can probably just get away with the dark theme for this, though.\\n\\n<div style={containerStyle}>\\n    <div style={{...contraDarkStyle, ...paneStyle}} data-theme=\\"light\\">\\n        <FavIcon/>\\n    </div>\\n</div>\\n\\nAlright! Clearly part of the same family of icons, but simple enough to read on\\na browser tab.\\n\\nCool. I think I\'m done!\\n\\nUntil I have too long to sit in a Zoom meeting. Jeez this room looks cluttered.\\nEven with the picture blurred. I look disorganized and messy. I should probably\\ndo some zoom backgrounds. I don\'t just want flat color though... and I _did_\\njust upgrade my ChatGPT to plus, which means I can use DALL-E. Ah well, I\'ve got\\nfifteen minutes left in this workshop. Let\'s see what I can come up.\\n\\n_a couple hours later..._\\n\\n![greyscale abstract image evoking aspects of software design: whiteboards, charts, sticky notes, arranged in an isometric space](/img/zoom/zoom-bg-01.png \\"Isometric Whiteboards\\")\\n\\n![greyscale abstract image of planet viewed from space with geometric shapes in the foreground](/img/zoom/zoom-bg-02.png \\"Planet Stickynote\\")\\n\\n![Impressionistic combination of cloud forms and a rectilinear grid, in greyscale with accents in terra cotta and cadet blue](/img/zoom/zoom-bg-03.png \\"Gridspace Nebula\\")\\n\\n![Impressionistic image evoking a planet in near-eclipse rising from cloud forms. The image is mostly grayscale, but with accents in terra cotta and cadet blue](/img/zoom/zoom-bg-04.png)\\n\\n![Abstract image of squares in grayscale with yellow and blue highlights](/img/zoom/zoom-bg-05.png)\\n\\n![Abstract image featuring round forms against a rectilinear background in\\nshades of grey with blue and orange highlights](/img/zoom/zoom-bg-06.png);\\n\\n\\nI had a lot of fun doing all these things, and as a result I have more\\nconsistent branding across my digital presences: LinkedIn, GitHub, this here \\nwebsite.\\n\\nInitially, I thought I\'d get by using the tools I already know best which, for\\nme, meant draw.io and Inkscape. Unfortunately `draw.io` does some strange stuff\\nwhen exporting SVGs with text content, and it doesn\'t readily give you a way to\\nconvert text content into regular vectors, more\'s the pity. And Inkscape, while\\npowerful, proved unequal to the task of correcting draw.io\'s shortcomings.\\n\\nOkay, so great for diagrams with loads of annotations, not so good for visual\\narts.\\n\\nIn the end I opted to go for Figma. It\'s what all the design-type people at\\nIntuit use, and I\'m glad I chose it. It made the whole process easier. I\\nactually re-implemented all of the above graphics all over again from scratch in\\nFigma, and I learned a lot about that tool along the way.\\n\\n## What I learned doing this\\n### AI\\nI\'m always learning more about how to get AI to do things I want it to do. I\\nnever really _did_ get it to do precisely what I wanted... getting DALL-E to\\ngive you something _without_ a point of focus that _doesn\'t_ try to make use of the full\\nspectrum from light to dark is surprisingly difficult. It\'s learned a lot of\\nrules about what makes a picture \'good\' that it doesn\'t want to unlearn. But I\\ndidn\'t want \\"art\\" so much as \\"texture\\". **I** want to be the focus in my Zoom call.\\n\\nI did ask it to give me things that evoke technology, and particular the process\\nof designing software, and it did surprisingly well at that task, I think.\\n\\n### Figma\\nFigma is pretty great! I think by far my favorite thing was discovering I could\\ndo theme-ing right in the tool. If you look at my Figma for this work, there\'s a\\ndark and light version of each logo... those are actually copies of the exact\\nsame object, just with a different set of variables applied. I was so interested\\nin that, I shelled out the $144 for a paid license for a year. Super cool.\\n\\nAnd now I have all my brand materials consolidated in one place, which is nice."},{"id":"/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook","metadata":{"permalink":"/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx","source":"@site/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx","title":"Challenges Getting Docusaurus Styles Into Storybook","description":"I thought it would be a good idea to have a central location to showcase","date":"2024-09-14T14:40:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"},{"inline":true,"label":"storybook","permalink":"/blog/tags/storybook"},{"inline":true,"label":"stylesheets","permalink":"/blog/tags/stylesheets"}],"readingTime":2.665,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Challenges Getting Docusaurus Styles Into Storybook","date":"2024-09-14T14:40","tags":["docusaurus","storybook","stylesheets"]},"unlisted":false,"prevItem":{"title":"Impromptu Brand Work","permalink":"/blog/2024/09/14/2024-09-14-impromptu-brand-work/impromptu-brand-work"},"nextItem":{"title":"Expandable!","permalink":"/blog/2024/09/14/2024-09-14-expandable/expandable"}},"content":"import Expandable from \'@site/src/components/Expandable\';\\n\\nI thought it would be a good idea to have a central location to showcase\\nwhatever components I add to the Docusaurus repertoire.\\n\\nI\'d worked with [Storybook](https://storybook.js.org/) before, and found it\\npretty handy. During development, it gives you a way to interact with a component-in-progress and\\nsee that it works as intended. It can serve as a beginning basis for unit and\\ncomponent tests, and it can be a really handy tool for communicating with\\nnon-technical stakeholders... clicking on a component and seeing immediately how\\nit responds is much easier to grasp than an engineer trying to explain something\\nto you in non-engineer-speak as best they can. The proof is in the pudding, as\\nthey say.\\n\\n\x3c!-- truncate --\x3e\\n\\nAnother nice feature is its extensibility. If it doesn\'t do something you want\\nit to do, you can often create an addon or a decorator that will accomplish it.\\n\\nSo I downloaded the dependency, and began writing stories for my shiny new\\n\'Expandable\' component.\\n\\nImagine my distress when I started up the development server for the first time\\nand saw that my themes weren\'t being applied to the custom element. I worked\\nhard to include those themes!\\n\\n(I promise, I\'m clicking the button in the screen recording shown below)\\n\\n![screen capture showing theme button being clicked, and nothing changing in the\\ndisplay](./_screengrabs/broken.gif \\"Oh Noes!\\")\\n\\nIt took me a little while to track down the problem. It turns out that\\nDocusaurus and Storybook drive their theme-based styles off of different\\nconditions. Docusaurus applies a data attribute at the root of the HTML\\ndocument, which it then uses as the selector for its CSS styles. Storybook uses\\nthe built-in `class` attribute.\\n\\nI didn\'t want to pollute my code with a bunch of redundant attributes that\\naccomplish the same thing. Happily, I was able to leverage Storybook\'s\\nextensibility to solve that problem.\\n\\nI created a Decorator... an object that Storybook, in essence, wraps _around_\\nyour stories to provide new functionality. In this case, I captured the current\\ntheme from the Storybook context, and set the `data-theme` attribute at the root\\nof the preview pane accordingly.\\n\\nHere\'s my very simple decorator:\\n```typescript title=\'withDocusaurusStyles.ts\'\\nimport React from \\"react\\";\\nimport { useEffect } from \\"react\\";\\n\\n// apply a data attribute (\'data-theme\') at the root element of the\\n// Storybook preview iframe so that Docusaurus styles are applied\\n// within the preview\\nexport default (Story, context) => {\\n    const { theme=\'light\' } = context?.globals;\\n    useEffect(() => {\\n        const themeRoot = document.querySelector(\'html\');\\n        themeRoot && themeRoot.setAttribute(\'data-theme\', theme);\\n    }, [theme])\\n\\n    return <Story />\\n}\\n```\\n\\nI applied those to every published story via my `.storybook/preview.ts` file, and now my\\nthemed Docusaurus components respond to the dark/light theme in Storybook!\\n\\n```typescript title=\\".storybook/preview.ts\\"\\nimport type { Preview } from \\"@storybook/react\\";\\nimport \'./assets/styles/docusaurus_global.css\'\\nimport withDocusaurusStyles from \'./decorators/withDocusaurusStyles\';\\nimport { withThemeByClassName } from \\"@storybook/addon-themes\\";\\n\\nconst preview: Preview = {\\n  decorators: [\\n    // highlight-next-line\\n    withDocusaurusStyles,\\n    withThemeByClassName({\\n      themes: {\\n        light: \'light\',\\n        dark: \'dark\' ,\\n      },\\n      defaultTheme: \'light\',\\n    })\\n  ],\\n  parameters: {\\n    controls: {\\n      matchers: {\\n        color: /(background|color)$/i,\\n        date: /Date$/i,\\n      },\\n    },\\n  },\\n};\\n\\nexport default preview;\\n```\\n\\nPretty pleased.\\n\\n![Screen capture showing theme button being clicked and colors being applied as expected](./_screengrabs/fixed.gif \\"Thats more like it\\")"},{"id":"/2024/09/14/2024-09-14-expandable/expandable","metadata":{"permalink":"/blog/2024/09/14/2024-09-14-expandable/expandable","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-expandable/2024-09-14-expandable.mdx","source":"@site/blog/2024-09-14-expandable/2024-09-14-expandable.mdx","title":"Expandable!","description":"I really like Docusaurus, but I also find there are some things it\'s missing.","date":"2024-09-14T11:28:00.000Z","tags":[{"inline":true,"label":"storybook","permalink":"/blog/tags/storybook"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"},{"inline":true,"label":"custom components","permalink":"/blog/tags/custom-components"}],"readingTime":4.465,"hasTruncateMarker":true,"authors":[{"name":"Iain Davis","title":"Software Engineer, Principal @ IainDavis.dev","url":"https://iaindavis.dev","email":"iain@iaindavis.dev","imageURL":"/img/authors/idavis.jpg","key":"iain","page":null}],"frontMatter":{"title":"Expandable!","date":"2024-09-14T11:28","authors":["iain"],"tags":["storybook","docusaurus","custom components"]},"unlisted":false,"prevItem":{"title":"Challenges Getting Docusaurus Styles Into Storybook","permalink":"/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook"},"nextItem":{"title":"Catch-Up Post","permalink":"/blog/2024/09/14/2024-09-14-catch-up/catch-up"}},"content":"import Expandable from \'@site/src/components/Expandable\'\\n\\nI really like Docusaurus, but I also find there are some things it\'s missing.\\nHappily, one of the _best_ things about it is that it is, at bottom, React,\\nwhich means you can add the things you find missing.\\n\\n\x3c!-- truncate --\x3e\\n\\nOne of the things I run into most frequently that strikes me as a glaring and\\npuzzling ommission is the lack of a collapsible section of content. To be sure,\\nmarkdown generally (and Docusaurus specifically) supports using the `details`\\nelement. But Docusaurus handling of it adds styling I would not choose to add by\\ndefault, like so:\\n\\n> ```\\n> <details>\\n> <summary>This is an expandable block</summary>\\n> \\n> It has some additional content that you may opt-in to, or simply pass over as you please.\\n> It\'s also obnoxiously removed from the primary flow of the document.\\n> </details>\\n> ```\\n>\\n> <details>\\n> <summary>This is an expandable block</summary>\\n> \\n> It has some additional content that you may opt-into, or simply pass over as you please.\\n> \\n> It\'s also obnoxiously shifted out of the primary flow of the document by\\n> excessive default styling.\\n> </details>\\n\\nThis is fine and good if what you want is to highlight something. But very often\\nwhat I want is to _elide_ something -- to give the reader only the information\\nthey need at the time, and not bury it in unnecessary content. An example might\\nbe instructions on installing Java. Some subset of your team might need those\\ninstructions if they are new joiners, and it should be there in the flow of the\\ndocument where they would expect to find it. But most folks who\'ve been on your\\nteam a while will probably know how to install Java, and can quite happily skip\\nover those instructions.\\n\\nSo I came up with my own little Expandable component:\\n\\n---\\n### Expandable!\\n<Expandable>\\n\\nIt\'s discreet, and it leaves the elided content in place in the regular flow of\\nthe document. It also features simple visual elements to clarify the extent of\\nthe expanded portion. It supports content in:\\n\\n* text\\n* JSX\\n* markdown\\n\\n<h2>Here\'s some JSX</h2>\\n</Expandable>\\n---\\n\\nHere\'s what the code/markdown looks like:\\n```markdown\\n### Expandable\\n<Expandable>\\n\\nIt\'s discreet, and it leaves the elided content in place in the regular flow of\\nthe document. It also features simple visual elements to clarify the extent of\\nthe expanded portion. It supports content in:\\n\\n* text\\n* JSX\\n* markdown\\n\\n<h2>Here\'s some JSX</h2>\\n</Expandable>\\n```\\n\\nIn addition to the above, it supports starting in the expanded state, and custom\\nexpand/collapse prompts. See the [Storybook](http://localhost:3000/storybook/iaindavis.dev/?path=/docs/custom-components-expandable--docs)\\n\\n### What I learned from building this component\\n#### CSS Modules\\nCSS Modules is the default assumption of Docusaurus. I hadn\'t much used it\\nyet... I\'ve used CSS in JS a bit, and `styled-components` a bit. I like CSS\\nModules for keeping things, well, modular. And the simplicity and directness of\\nit is nice. I do like the dynamism that `styled-components` provides though.\\n\\n#### CSS Pseudo-Selectors\\nI also had to give myself a little bit of a refresher on pseudo-selectors. I\\nused `:before` and `:after` to inject the little ornamental circles at the top\\nand bottom of the left-hand line showing the extent of the expandable section.\\n\\n### What I still want to do\\n* I\'d love to introduce an \'exclusive\' option so that you can assign each one to a\\ngroup, and then expanding one block in the group causes the rest to\\nautomatically collapse. Not really sure what the best way to go about producing\\nthe shared state is yet. I suppose maybe swapping out my functional react\\ncomponent with a class component and storing some of the state on the class\\ndefinition, but I\'ll give it some more thought before I jump in. For now, I\'m\\nhappy with how it is.\\n\\n* I also initially played around with a \'title\' property that caused some text to\\nbe rendered above the expandable portion. I eventually landed on the decision\\nthat the surrounding markdown was already suitable for that purpose, but I may\\nchange my mind some time in the future and reintroduce that feature.\\n\\n* Eventually, I\'d like to move this and any other component I build for this\\n  purpose into their own Docusaurus component library so that I can use them in\\n  other repositories as well.\\n\\n* Still need to sort out testing. I\'ve had some difficulty converting my\\n  Storybook stories to Jest tests. Mostly with the import of various assets\\n  being handled differently by Storybook, Jest, and Docusaurus. I\'m working with\\n  several tiers of pre-processing (TypeScript, React/JSX, Storybook, Jest) and\\n  several kinds of files being treated as modules that are not usually (CSS,\\n  MDX). Getting all those things to work in concert has been something of a\\n  challenge. I may do another blog post just on that. But in the mean-time, I\'m\\n  thinking of just using Storybook as a showcase, and relying on something\\n  purpose built for testing. I\'m considering giving Playwright a go for\\n  component testing. Or maybe I\'ll use the Storybook environment directly,\\n  rather than running it through Jest, if I can figure out how to automate that.\\n\\n  Time will tell. For now, I\'m happy to have my new little component that makes\\n  Docusaurus just that little bit more useful to me.\\n\\n[storybook.expandable]:\\n    \'/storybook/iaindavis.dev/?path=/story/custom-components-expandable--default\\n    \\"Expandable component Storybook showcase\\""},{"id":"/2024/09/14/2024-09-14-catch-up/catch-up","metadata":{"permalink":"/blog/2024/09/14/2024-09-14-catch-up/catch-up","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-catch-up/2024-09-14-catch-up.mdx","source":"@site/blog/2024-09-14-catch-up/2024-09-14-catch-up.mdx","title":"Catch-Up Post","description":"This post is a catch-up post to explain the purpose of this website, and how I got to this point. Going forward, I intend to post","date":"2024-09-14T11:23:00.000Z","tags":[],"readingTime":2.76,"hasTruncateMarker":true,"authors":[{"name":"Iain Davis","title":"Software Engineer, Principal @ IainDavis.dev","url":"https://iaindavis.dev","email":"iain@iaindavis.dev","imageURL":"/img/authors/idavis.jpg","key":"iain","page":null}],"frontMatter":{"title":"Catch-Up Post","date":"2024-09-14T11:23","authors":["iain"]},"unlisted":false,"prevItem":{"title":"Expandable!","permalink":"/blog/2024/09/14/2024-09-14-expandable/expandable"}},"content":"import React from \'react\';\\nimport { LinkedIn } from \'../../common/links.tsx\';\\n\\nThis post is a catch-up post to explain the purpose of this website, and how I got to this point. Going forward, I intend to post\\nwhatever is going on with development of this website here.\\n\\n\x3c!-- truncate --\x3e\\n\\nThe intent of this site is to provide a landing place for anybody\\nlooking into me as a potential hire, where they could view work I had done and\\nsee engagement with software and the industry in an ongoing way. And to \\nlearn something about me beyond what\'s in my CV. I thought it\\nwould be a good place to showcase:\\n\\n  * Personal projects\\n  * Code katas\\n  * Design katas\\n  \\nWith the design katas in particular, I see an opportunity to showcase the things\\nan employer might want to know about a prospect: how do they think about design?\\nHow do they communicate ideas to technical and non-technical stakeholders? How\\ndo they make decisions? To be sure, this is an area where I have significant\\nroom for growth, and the hope is that the work done for this site will serve as\\nmuch for learning and practice as demonstration.\\n\\nI started a project a little while ago to help me mitigate some of the\\nthings in GMail that I find to be shortcomings.  (That project isn\'t\\nfinished, but the progress will be shared here when I get back to it).\\n\\nWhile I was working on that, I knew I should be documenting the work. What I\'m\\nselling isn\'t the product, but the process, and the organization. I\'m not\\nselling the projects I build, I\'m selling _how I build projects_. I wasn\'t\\nreally making the most of the project I was working on until I could say I\\nwas doing that.\\n\\nFor that, I needed a **place** to document the work.  Setting up this\\npersonal showcase space has always been on my agenda, but I figured I needed to\\nmake it a priority to help with my job search.\\n\\nI already had a personal domain set up. I was using it for email forwarding --\\nto give me a professional email address distinct from my personal one, without\\nalso having to manage separate Google accounts (with separate billing,\\nsubscriptions, _etc._). I had experience using Docusaurus, and publishing it via\\nGitHub pages; I maintained a \\"notes\\" repository at Intuit, both for organizing\\nmy own thoughts as I worked on something, and also for sharing out certain\\nthings. Also, part of what I want to showcase is well-organized documentation,\\nso these things are a natural fit.\\n\\nTo be sure, I have a lot still to do here. But I think I\'ve got things to a\\npoint where I need to start worrying about content as much as about my\\nrepositories. People can get here from <LinkedIn label=\\"my LinkedIn profile\\" />\\nnow, so there better be something here for them to see, even if it\'s not really\\nany projects (beyond the site itself) just yet.\\n\\nHence this catch-up post and getting this blog going.\\n\\nI\'ll post a couple more times today, about decisions I\'ve already made, and\\nabout what\'s coming next for this site. Then the intent is to update this\\nperiodically with my thoughts and decisions related to the development of this\\npage.\\n\\nThanks for visiting!"}]}}')}}]);