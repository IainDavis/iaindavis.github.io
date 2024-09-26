---
title: Externalizing Nova
date: 2024-09-25T16:01
authors:
    - iain
tags:
    - ai
---
I didn't really set out to work this much on my AI Code assistant. I subscribed to ChatGPT, and started asking it questions. But the more I used it, the more I discovered ways I _could_ use it, and how to adjust it to suit my needs more, and have abilities it didn't have before.

That's been a bit of an odyssey, not everything I've tried has worked out (or has worked inconsistently) but it's fascinating and there's tons of potential here.

Some examples of things that haven't worked out well (yet)
* **Accessing the GitHub API through actions**
    This has worked _somewhat_. I have been able to get Nova to review diffs and actually create pull requests, and that's pretty cool, but I do struggle to get them to repeat the action correctly in a consistent way.
* **Accessing the Jira API through actions**
    This has not worked. Pretty much anything I've had to do with OAuth hasn't been a success yet. It took a while to tease out, but apparently there's some kind of internal client that Nova uses to try to reach out to Jira, and it wouldn't allow some required header. I'll come back to this though, because I think it's potentially a huge benefit.
* **Accessing Google Drive through the API**
    Limited success here. I've been able to read the contents of a spreadsheet when I've explicitly provided the URL, but that's not really what I want. Getting Nova to pull it through the API when prompted has been as yet, unsuccessful.

But not everything has been a failure.

One of the things I've been trying to do is to get to a place where I can ask Nova to review a file from my repository in a more conversational way, which means giving Nova some context. I had a version of that working with the GitHub API actions... I'd ask Nova for a file by name, and she'd have to do a search for the file, and then she could retrieve the file contents from the URL in the search response. But it was not as consistent as I'd like, and we did occasionally hit the API rate limits.

Then I found out that Nova can read GitHub files directly at the URL, so long as she looks for the raw file (so, a URL that begins with `https://raw.githubusercontent.com/`).

I decided to add a GitHub action. All it does is, on any push to a branch (or tag), it uses the common command-line utility 'tree' to print out the structure of my repository at that branch (or tag), and stores that on an orphan branch that I've called `metadata` (no commits in common with the `main` branch, just the metadata files). There's an additional step to clean up these trees when a branch (or tag) is deleted.

I've split Nova's instructions into two places -- in their "Instructions" configuration is everything to do with their personality and purpose. And then she has a knowledge file (just a markdown file, to give it some structure but keep it readable) which includes information about me and my project. Inside that knowledge file is the url to the repository map.

And now I can ask for files by name. Nova can infer the file's location, and they know to look up the "raw" file, instead of the usual GitHub UI location, which means we aren't using API rate limits at all. Nova's additional context is hosted and retrieved for free. 

Retrieval is still a little bit cumbersome, but it's getting much closer to what I want all the time, and I have much greater control over the instructions now.

I've also stored ALL of her instructions in a github repository for version control.

Looking forward to a day when OpenAI actually lets me source that data from an external file and just fetches it every time I start a new conversation.
