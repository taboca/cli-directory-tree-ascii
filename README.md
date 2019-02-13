# directory-tree-ascii

Command line tool that dumps a directory listing its contents in ascii.

## Install

npm install directory-tree-ascii -g

## Usage

From the current directory you want to list contents, invoke "daa" passing the path.

```
daa .
```

Depending on the directory that you are it may produce a listing like the following:

```
└─ .
   ├─ SubDirectory
   │  └─ OtherFile.txt
   ├─ fileFour.txt
   ├─ fileOne.txt
   └─ fileTwo.js

```

PS: The above listing was produced by this code after creating the above files and directories. So this is good for documentation!

## Advanced - exclude sub directories

You may also exclude subdirectories using the "blacklist" parameter. The following example excludes "node_modules":

```
daa . -b node_modules  
```

The exclusion mechanism accepts multiples entries and uses RegExp format. Therefore if you want to exclude all .js files you can try:

```
daa . -b node_modules .js
```
