---
title: First hand experience with Gatsby, Contentful and Netlify
date: '2019-03-02'
modifiedDate: '2019-03-08'
published: true
page: false
category: ['Article']
tags: ['Gatsby', 'CMS', 'Hosting', 'React']
---

Last week I tried checking different platform around Gatsby. I am grateful that I did it.

### Powers of Gatsby

Gatsby is not yet another static site generator. It has lots of powers associated to build a sophisticated apps using gatsby and its plugins system. Some of the powers I see from my experiment are

- **Performance** isn't an option, its in built
- Everything have well maintained **plugins** to do it (Don't repeat yourself)
- Think like building a component system from start
- Easy to add dynamic content in static site
- Can support micro-frontends
- Also supports dynamic API consumption in runtime to build applications on top of Gatsby

### Challenges in Gatsby

There are few bottlenecks in gatsby.

- If you have too many edits to content and too frequent, then **build time** will be an issue
- If you have more pages generated out of content (which is in multiples of thousands), then gatsby build time for each push will get incremented.
- Might not be great to have complex system like Gatsby for dynamic pages which will be edited real time by multiple parties (eg., users, admin, editor, etc). Only the shell can be reused

Gatsby team is working on **incremental build system** in their next releases. That will solve some of this challenges.

### Contentful CMS

I tried connecting contentful CMS with gatsby. So far my experience with contentful is awesome as a product.

#### What worked well in contentful

- easy setup with well documentation
- easy to create more models
- easy to manage content and plugin through Gatsby API
- easy to link automated build process through CI/CD workflow
- Inbuilt mechanism for image optimization

#### Challenges I faced with contentful

- Adding content through their **API** is very tricky and have very complicated JSON structure to follow for adding more content. It throws error due to JSON structure most of the time when tried to create new content via API. Steep learning curve to make it work.
- **Pricing** looks more steep and can be afforded only by real business with enough profit to afford it. For startups, contentful and the cost associated with it for a CMS is too costly IMO.

### Netlify

This site is hosted in netlify. One of the best way to connect and deploy automatically.

#### Pros

- Easy learning curve and setup process
- Lot of examples around the web
- Very flexible admin site to learn without having pro knowledge of setting up a domain for the site
- Each branches in git gets deployed as a test site
- Other features through netlify is also great for starters and have plans to pay as you grow

I didn't come across much challenges yet in netlify. I am a basic user with few static site hosted in netlify. I will write more about their features when I get my hand on it soon 😎

> Note: I have written this based on what I have tried with contentful CMS, Gatsby, I might not have the need to test all the features. I only test what I need for my application's feature. Every tool has its own purpose and audience. Choose it wisely based on your need.
