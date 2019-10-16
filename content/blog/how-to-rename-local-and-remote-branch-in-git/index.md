---
title: How to rename local and remote branch in git
date: '2019-10-16'
modifiedDate: '2019-10-16'
published: true
page: false
series: 'Git Magic'
category: 'Series'
tags: ['Git']
description: Often, we want to rename the branch in Git. Totally we will see, one of the easiest way to do it for both local and remote branch
---

Before going into the details, lets look at some of the reasons why we want to rename a branch,

- typos in the branch name
- created a branch with a name and then realize, that branch does more than that (e.g, `add-client` to `crud-client`)
- created a dummy name (eg., `yet-another-branch` to `fix/reports`)
- Also to add more details about the branch (e.g, `feat/branch-name`, `fix/branch-name`)

and so on

### How to rename a branch locally

In this example we are going to rename the branch from `old-reports` to `new-reports`.

```bash
## go to the old branch
git checkout old-reports

## Rename the branch to new name
git branch -m new-reports
```

`-m` in git denotes, move this old branch to new branch and remove the old branch.

### How to rename the branch remotely

What if the old branch is pushed to remote origin. Its very simple, delete the old remote branch first and push the new local branch to remote origin.

For deleting a remote branch,

```bash
git push origin -d old-reports
```

Here `-d` or `--delete` will delete the old branch remotely. If you specify `-D`, it will only delete locally not in the remote origin.

then push the current branch to origin,

```bash
git push -u origin new-reports
```

Hope you learned a trick to rename local and remote branch in your git repository 😎
