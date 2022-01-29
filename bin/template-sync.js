#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");

var mkdir = function (dir) {
  try {
    fs.mkdirSync(dir);
  } catch (e) {
    if (e.code != "EEXIST") {
      throw e;
    }
  }
};

var copyDir = function (src, dest) {
  mkdir(dest);
  var files = fs.readdirSync(src);
  for (var i = 0; i < files.length; i++) {
    var current = fs.lstatSync(path.join(src, files[i]));
    if (current.isDirectory()) {
      copyDir(path.join(src, files[i]), path.join(dest, files[i]));
    } else if (current.isSymbolicLink()) {
      var symlink = fs.readlinkSync(path.join(src, files[i]));
      fs.symlinkSync(symlink, path.join(dest, files[i]));
    } else {
      copy(path.join(src, files[i]), path.join(dest, files[i]));
    }
  }
};

var copy = function (src, dest) {
  var oldFile = fs.createReadStream(src);
  var newFile = fs.createWriteStream(dest);
  oldFile.pipe(newFile);
};

copyDir("./src", "../../template");
