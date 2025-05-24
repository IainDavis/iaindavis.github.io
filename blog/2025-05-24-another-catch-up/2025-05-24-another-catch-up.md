---
title: Another Catch-Up Post
date: 2025-05-24T12:22
authors:
    - iain
tags: 
    - react
    - automation
    - storybook
    - troubleshooting
    - testing
    - infrastructure
---

:::note TL;DR
There have been a lot of uncommunicated changes in my codebases.
* I've split off a separate component library called [Docodylus][github-docodylus]
* I've built a custom internationalization layer for Docodylus on top of Polyglot
* refactored it into a monorepo (a couple times, actually), and am now preparing to release it into the wild as an open-source project on NPM (just as soon as get the quality-check-and-release pipeline in place)
:::

It's been a long while. I haven't been posting, and virtually nothing has changed here at IainDavis.dev. But I haven't been idle either. Since I last was regularly updating, I made several decisions that have taken a good long while to carry out, and I abandoned some structure and communication while I was doing it. In retrospect, it was maybe unwise, but at the time it felt like quite enough to be dealing with all the things I was dealing with and also be doing the learning I needed to do to implement the changes I wanted.

TRUNCATE_HERE

And look, it has to be said. Things haven't been great for me. That's not a complaint, just an acknowledgment of my limitations. I'm only human, and the last few months have been a lot.

First I'll give a general recap (at a very broad level) of what I've been up to and then, in another post, I'll discuss more recent updates, with an eye towards resuming regular updates on this blog again.

Here's what I've been doing:

Back when I started adding custom React components to IainDavis.dev, I had a couple of forward-looking notions. The ffirst notion was that it would be smart to make an external library to hold those components, so I could reuse them across projects. In fact, I've had that idea for a long time: that I ought to have a central place to put re-usable units of code, and that could double as a place to share out work that I've done that isn't someone else's intellectual property. The second notion was that I wanted to explore things like internationalization a bit more. I'd used systems already in place, but I'd never had to add it to a greenfield project. In iaindavis.dev, I had configured components with externalized strings as a sort of place-holder for a later, more robust internationalization approach.

I decided that it wasn't going to be any easier to migrate components from iaindavis.dev to an external library if I waited until there were more of them, and [Docodylus][github-docodylus] was born.

![Docodylus logo - A bipedal crocodile wearing a suit and oxford shirt with no tie and the shirt untucked is carrying a briefcase. He walks with purpose, as if he is on his way to sort out your documentation for you. Next to him is the word "Docodylus" in a conservative but attractive serif font.](./_resources/Docodylus_sillhouette_logo_.webp)

<details>
<summary>why "Docodylus?"</summary>

Docodylus was born out of Docusaurus. I thought it would be fun to preserve the association with dinosaurs, but also indicate a small evolutionary step. I tried several variations using latin words associated with inheritors of the dinosaur genetic legacy (birds: Ornidocs? Docoraptor?, sharks... no real recognizable latin term to use that people will immediately identify as "shark") but they all felt really clunky and stupid. Docodylus (that latin name for the family of crocodiles is _crocodylus_) was the only one that felt like it had any flow-and-swagger to it at all, so I went with that. And how that I have the logo, I can't imagine it being anything else. I love that guy.
</details>

Docodylus is intended as a React component library for enhancing documentation and other React-based static websites. Right now, there's only one component in it, and a handful more within iaindavis.dev, waiting their turn to get migrated. All of these are quite simple, but I have plans for more complex and robust components in the future, for example an RSS feed display, so I can bring my social media activity into my website, and an external document viewer to standardize and simplify making external content visible in Docusaurus (I'm primarily focused on Google Drive documents but will try to be as general as might be useful)

In the course of migrating the Expandable component over, I decided it was as good a time as any to implement the internationalization layer. To be fair, I haven't implemented anything like full internationalization. So far, I haven't needed any other features than translations, so dates, currency, number formats are all potential future work. What I _did_ do though, was to make a lot of decisions to support the design goals of Docodylus, namely delivering only what's needed and customizability.

Modularity in Docodylus (with respect to i18n) is supported by a custom layer that sits on top of Polyglot. It's essentially a re-implementation of polyglot-react, with a couple of new features. Language files are lazy-loaded based on the locale (specified by the user with a React `Context.Provider` called `I18nProvider`) and cached so that the same language file doesn't have to be loaded twice. To be perfectly frank here, language files aren't that big, and I'll probably never support enough languages for it to matter, so this was _mostly_ a learning exercise for me, but I did learn a good bit about React hooks, etc.

Customizability is not yet supported beyond passing strings to components as properties and having the component explicitly use those strings, but groundwork has been laid. Docodylus uses a TypeScript component to aggregate the ids of translatable strings for _every component loaded, and no others_ into a common type which then will populate the user's code-hints with the allowable, namespaced keys for Docodylus translatable strings. This will allow a user to wholesale override all the default translations for every language Docodylus natively supports, as well as allowing them to supply translations for languages that Docodylus does not natively support.

Docodylus's i18n layer also supports locale negotiation, which is not supported by Polyglot natively, so if a user requests locale `en-CA` and there are no Canada-specific translations, Docodylus will fall back automatically to the `en` locale.

After the internationalization layer was in place, I set about getting test coverage in place. That's mostly unit tests at this point, although there are a few integration tests as well, specifically for the i18n layer.

When I initially set up the project, I made it as a single package. I knew eventually I wanted each component to be independently publishable to NPM, but early exploration made me think that was not going to be terribly difficult, so I deferred it until I had something to work on. I was mistaken that it would be trivial. The next significant chunk of work I engaged with was decomposing the library into discrete modules with hard dependency boundaries.

It took several iterations to get a result I was happy with, and a _lot_ of learning about how the different tools that go into making a monorepo work together. At one point, I had the entire thing implemented with Typescript packages. That exposed the vendor lock-in I had created by relying on the Vite-only feature of `import.meta.glob`, so I refactored, adding a new module to manage dynamic loading of external files _without_ relying on vendor-specific compile-time constructs. And then I decided I really probably wanted Vite packages anyway, to have the advantages of bundling and tree-shaking. I'm not sorry though, that vendor lock-in might well have come back and bit me in the ass before long.

Once I had that refactored, and everything running just the way I wanted it, Storybook stopped working altogether. That was baffling for a while, but ultimately it turned out that, because I had made independent packages of everything, Storybook was just trying to use the built artifacts, instead of building them itself from the typescript source. The toolchain used by my builds and that expected by Storybook didn't match up, so Storybook couldn't understand my built modules. I was able to solve that by learning some new things about how conditional exports work, enabling Storybook to read from source again.

And that more or less brings us to today. The next major chunk of work is to finalize all my automation, tests, quality checks, etc. and Docodylus will be ready to go live on NPM as a tool that other people can use (but probably shouldn't, at least until I get some more actual features into it).

I'm looking to get on with that in the next week, and also to return to more structured work, and more regular communications about the work. More on that in the next blog post. 

There's loads of work to do after I publish (as prerelease). I've got a ton of documentation to write, and the component that's in there is bare-bones to say the least. There are features to add, and I've learned a good deal about accessibility since I initially wrote it, which I want to incorporate. That has consequences for CSS that may lead me into writing an entire design system... time will tell. And then there are other existing components to migrate, new components to write, and the _actual origiinal website_ to update and maintain in an ongoing way.

<!-- NAMED LINKS -->
[github-docodylus]:
    https://github.com/IainDavis-dev/docodylus
    "Docodylus Github repository"