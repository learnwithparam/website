---
title: How to revert back to older commit in git
date: '2020-01-02'
modifiedDate: '2020-01-02'
published: true
page: false
series: 'Git Magic'
category: 'Series'
tags: ['Git']
description: We always want to go back in git history. Aren't we?. We will learn the trick to do so
---

If we mess up something and know that it was working before two or three commits. We often want to go to that previous commit and check it out.

we will see how to do that using git commands,

There are three possible scenarios,

- Just go to the previous commit and then come back to latest commit (temporary jump)
- Go back to previous commit and modify some code there but don't want to lose the current update history too
- Go back to previous commit and discard all the new updates after that.

#### Just go to previous commit and then come back to latest

This is probably the easiest one. The steps to follow are,

- `git stash` to stash any uncommited changes
- `git log` to check the commit hash for the previous commit you are looking for

then

```bash
git checkout <commit-hash>
```

This will automatically go to the commit and show the stale branch. Once you finish what you want to look for in the code, you can once again go back to latest by running

- `git checkout master` or any other branch name if you are in different branch
- If you did stash any uncommited changes, then run `git stash pop` to pop the uncommited changes from the stash array

#### Go back to previous commit and modify, but keep the latest commits somewhere

This is typical situation where you don't want to lose your new commits but want to check and fix something in the old commit.

You can do that same thing until get the commit hash for the previous commit and then,

Checkout a new branch from the previous commit,

```bash
git checkout -b branch-name <commit-hash>
```

By this way, you can keep both the latest commit and separate branch to debug and fix from the old commit.

#### Go back to previous commit and discard all the latest commit after that

Again it is simple to do,

```bash
git reset --hard <commit-hash>
```

This simply reset to the old commit point and discard all new commits. One disadvantage with this approach is, you lose the history of all latest commit. Potentially you might lose some relevant code.

This command also won't work as expected if you have uncommited changes, so stash it before running this.

There is one more way to achieve this using `git revert`. If you know exact number of commits you want to go back in history, then you can do so by,

```bash
git revert HEAD~3 # here 3 is the number of commit you want to go before to the latest commit
```

One advantage with revert is, it keeps the history and create a new commit to revert all the changes. You can even create your own message by not commiting automatically when doing revert.

You can also revert selective commits using commit hashes.

- `git log` and find all the commits you want to revert. Copy those commit hashes

```bash
git revert hash1 hash2 #... and so on
```

By this way, you can selectively revert some of the commits and keep the code with proper commit log and history.

Hope you learned some tricks about git. Stay tuned for more git magics and JavaScript tutorials 🎉
