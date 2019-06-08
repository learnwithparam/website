---
title: How to solve Git issues on renaming files and folder
date: '2019-04-16'
modifiedDate: '2019-04-19'
published: true
page: false
tags: ['Hacks & Tricks']
---

Many of you might got nightmares due to file rename issues in git. Recently I encountered one issue, everything works locally but repeatedly my circle CI throwing error as file not found while transpilling JSX.

the filename was `NavBar` and I renamed it to `Navbar` everywhere in recent git commits. I didn't noticed the mismatch in name, it takes a while for me to get to the root of the issue.

This is how I solved it, there might be other better solutions but this worked for me.

```bash
# Rename the file once again from Navbar to NavBar (basically revert back to original file name)
git mv NavBar.jsx Navbar.jsx
```

This solution can be applied to folder name change as well. For folders,

```bash
git mv ./NavBar ./Navbar
```

Hope this helps you to learn the trick about git move command 🤗
