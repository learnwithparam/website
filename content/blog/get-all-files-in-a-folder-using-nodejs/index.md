---
title: Get all files in a folder using Node Js
date: '2022-12-01'
modifiedDate: '2022-12-01'
published: true
page: false
category: 'Tutorial'
tags: ['JavaScript']
description: To get all files in a folder and its sub-folders recursively using Node.js, you can use the fs.readdirSync() method in the fs module.
---

To get all files in a folder and its sub-folders recursively using Node.js, you can use the `fs.readdirSync()` method in the fs module. This method reads the contents of a directory and returns an array of the names of the files in the directory. You can then use a recursive function to read the contents of each sub-directory and add the files to a results array.

Here is an example:

```js
const fs = require('fs');

// Recursive function to get files
function getFiles(dir, files) {
  files = files || [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}
```

You can call the function getFiles with the directory,

```js
const filesInTheFolder = getFiles('/path/to/dir');
```

In this example, the `getFiles()` function takes a directory path and an array of files as arguments. It reads the contents of the directory using `fs.readdirSync()` and then iterates over the list of files. If a file is a directory, it calls itself recursively to read the contents of the sub-directory. If the file is not a directory, it adds the file to the files array.

After all the files in the directory and its sub-directories have been added to the files array, the function returns the array. You can then use the array of file names to do whatever you need to do with the files.

You can also write the `getFiles` logic without recursive function,

```js
function getFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      const subFiles = fs.readdirSync(name);
      for (const subFile of subFiles) {
        results.push(`${name}/${subFile}`);
      }
    } else {
      results.push(name);
    }
  }
  return results;
}
```

Hope it helps you to understand `fs.readdirSync` better to get all the files inside a folder 🥳
