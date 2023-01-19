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
function getFiles(dir, files = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files);
    } else {
      // If it is a file, push the full path to the files array
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

After all the files in the directory and its sub-directories have been added to the files array, the function returns the array. Hope it helps you to understand `fs.readdirSync` better to get all the files inside a folder 🥳
