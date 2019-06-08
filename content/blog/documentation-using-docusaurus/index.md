---
title: Maintaining centralized documentation using Docusaurus
date: '2019-05-06'
modifiedDate: '2019-05-12'
published: true
page: false
tags: ['Open Source', 'Hacks & Tricks']
---

Every engineering team face problem of where to maintain documentation once team grows. We at [Jobbatical](https://jobbatical.com?ref=learnwithparam.com) faced similar problem and finally comes to a working solution.

### What is Docusaurus?

- [Docusaurus](https://docusaurus.io/) is an open source by facebook. It is written in React and easily extended to create similar documents like react docs.

#### How it helps

- Centralized documentation for your team
- Easy setup, better readability and linking (same as React docs ❤️)
- Versioning is easy with multiple contributors
- Markdown support to create content
- Built using React (can be extended based on need)
- Document search (algolia is also supported for more advanced search capabilities)

```bash
# Getting started
npm install --global docusaurus-init
cd documentation-folder
docusaurus-init
```

##### Useful Links

- [Docusaurus website](https://docusaurus.io/)
- [Github repo](https://github.com/facebook/docusaurus)

Hope this helps if someone is looking for better centralized documentation need for the company or development team in general 😇
