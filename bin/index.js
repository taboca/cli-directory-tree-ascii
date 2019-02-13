#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const dirTree = require("directory-tree");
const treeify = require('treeify');
const _ = require('deepdash')(require('lodash'));

const optionDefinitions = [
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'blacklist', alias: 'b', type: String, multiple: true },
  { name: 'src', type: String, multiple: true, defaultOption: true },
]

const options = commandLineArgs(optionDefinitions);


let blackListedREs = new Array();

if(options.blacklist) {
  for(let key in options.blacklist) {
    let re = new RegExp(options.blacklist[key]);
    blackListedREs.push(re);
  }
}

let data = dirTree(options.src[0], {exclude: blackListedREs});

let tree = _.filterDeep(
  data,
  (value, key, path, depth, parent) => {
    if(key=="name" ) return true;
  }
);

function walk(item, tree) {
  tree[item.name] = {};
  if(item.children) {
    for(let k in item.children) {
      walk(item.children[k], tree[item.name]);
    }
  }
}

let simpleTree = {};

walk(tree, simpleTree);

console.log("```");

console.log(
   treeify.asTree(simpleTree, true)
);

console.log("```");
