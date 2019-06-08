---
title: Tried out Netlify CMS with my Gatsby blog
date: '2019-03-05'
modifiedDate: '2019-03-09'
published: true
page: false
tags: ['Tech Platforms', 'Netlify CMS']
---

Yesterday I was looking for open source alternates to contentful CMS. I found one called `netlify CMS`. I wouldn't call it as an alternate to contentful in any way. Contentful is way more powerful with lot of features and get started easily.

I used it along with Gatsby project.

### Thoughts on Netlify CMS

- Really good that netlify make this as open source to attract more contributors
- Documentation is really simple and can be find out when we get into issues. Learning curve is very simple
- Best suited for small organization and startups who can't afford bigger bills to full fledged CMS
- UI is simple and configuration is straight forward
- You can create your own widgets and also create relation between different collections (eg. blog, tags, author etc.,)

### What can be better

- Setup takes a while to get everything right. Mostly I read few issues in the github to make it working with github authentication
- Limitation in storing content. Currently content should be stored in the same repository (local folders), else you can't get the content through Gatsby. I would love if they allow content to be stored in multiple github repository and pull data remotely.
- It will be a difficult to manage the automated commits if you have multiple authors, editors and developers working on same repository. Works well for single user blogs and small companies content management. But surely needs more feature to support large content needs.
- Need more contributors and features to compete with other CMS. Else user base will be limited to only developers not actual business.

Again, use cases depends on the need of the end user. Netlify CMS is surely better than writing files on your own. Its a small project to get started with your own CMS for content management, but not feature rich to use it for full fledged company needs 😎

> Note: I have written this based on what I have tried with Netlify CMS, I might not have the need to test all the features. I only test what I need for my application's feature. Every tool has its own purpose and audience. Choose it wisely based on your need.
