# __MODERN WEB DEVELOPMENT__



What each honored web developer should know - a sort of cheat sheet and look up manual.

## __CONTENTS__

>- __INTRODUCTION__
>	- [What can I expect to find here?](#introduction)
>- __SETTING UP DEVELOPMENT ENVIRONMENT & TOOLS__
>	- 	[__VSCode__](#vscode) - _Configuration of your code editor, intellisense and emmet commands._
>   	- [Useful VSCode extensions](#Useful-VSCode-extensions)
>   	- [EMMET snippets](#emmet-commands)
>   	- [Shortcuts](#vscode-shortcuts)
>	- [__GIT & Cmd__](#git-&-cmd) - _Source control, github and some useful git/cmd commands._
>		- [_Useful git commands_](#useful-git-commands:) 
>		- [_Useful cmd commands_](#useful-cmd-commands:) 
>		- [_.gitignore file_](#.gitignore-file) - _how it can look like._
>	- [___Node.js & Npm___](#nodejs-&-npm) - _How to download packages to automate your work._
>   	- [Installing Node & Npm](#how-to-install-npm-packages?)
>   	- [Useful Npm packages](#useful-npm-packages)
>   	- [_'package.json'_ file](#packagejson-file) - _How it can look like._
>	- [__Webpack__](#webpack) - _Bundling and auto-building your source files._
>   	- [Bundling with PostCSS](#bundling-with-postcss)
>   	- [Webpack devServer](#webpack-devserver-with-postcss)
>   	- [_'webpack.config.js'_ file](#webpackconfigjs-file) - _How it can look like._
>	- [__Markdown__ ](#markdown) - _Text styling, create a nice 'readme' file._
>- __CODE EFFECTIVELY__
>	- [__CSS__](#css) - _How to style pages with CSS._
> 		- [PostCSS](#PostCSS) - _Nesting, variables, mixins_
> 		- [Organize your code](#file-structure) - _How to split and organize your files._
> 		- [Commonly performed tasks](#commonly-performed-tasks)
> 			- [Float](#floating)
> 			- [Flexbox](#flexbox)
> 			- [CSS Grid](#css-grid)
> 			- [Centering of elements](#centering-of-elements)
> 			- [Working with texts and fonts](#working-with-texts-fonts)
>	- [__HTML__](#html) - _How to design and code a page._
> 		- xxx
>	- [__JS__](#js) - _Things to know to produce good JS._
> 		- xxx
>	- [__Content for web__](#content-for-web) - _All aboout using images, backgrounds and icons._
> 		- Resolution and DPI
> 		- Responsive images
>- __LEARN FROM EXAMPLES__
>	- [__TODO__](#xxx) - _TODO._


<br>

# __INTRODUCTION__    

## [What to expect to find here?](#)

Following article is an look up manual for web development technologies based on . It includes short explanations, important things to remember and cheat-sheets to look up against in efficient way. The targeted audience for this blog are developers that need fast look up (or fresh up)their knowledge. Use this guide to get started and code faster and more efficient.

This guide is a based of our experience, read articles and various courses.


<br><br>[- BACK TO TOP -](#contents)

---
---
<br><br>


## [__VSCode__](#)

This section is about:<br>
Configuration of your code editor, intellisense and emmet commands.

_Introduction videos [here](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code)_

<br>

 __VSCode__ is a lightweight code editor that comes with built-in support for JavaScript, TypeScript, Emmet, IntelliSense, Node.js and more. Additionally it has many extensions available to download from NPM market. Installing VSCode gets you started right away with very helpful build in EMMET snippets and intellisense support. IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS and LESS. VSCode has also built in support for GIT. <br> 


### [__Useful VSCode extensions__](#)
Some VSCode extensions that are good to install and learn how to use.

|| |
|---|---|
|Live Server|A Quick Development Live Server with live browser reload. (For quick preview instead of webkit dev server)|
|Code Spell Checker|Spelling autocorrector.|
|Git History|Views branches|
|Node.js Modules Intellisense|Scans builtin modules, dependencies, devDependencies and file modules and proposes when coding|

<br>

### [__EMMET commands__](#)
EMMET does autogenerate code from snippets for HTML, CSS, SASS in VSCode. 

||Snippet|Custom|HTML output|
|:---|:---|:---|:---|
|New doc| ! |   | `HTML doc structure` |
|Comment| c |   |  `<!-- -->` |
|Css| link:css |   | `<link rel="stylesheet" href="style.css">`|
|Script| script:src |   | `<script src=""></script>` |
|Lorem| lorem23 |   | `Random text with 23 words`  |
|Paragraph| p |p.myClass._Big{Text}|`<p class="myClass _Big">Text</p>`|
|Div| div | .btnClass1.btnClass2#myButton{Text} |`<div class="btnClass1 btnClass2" id="myButton">Text</div>`|
|List| ul>li*3 |ul.nav>li.item$#item$*2{Item $}|`<ul class="nav">`<br>`<li class="item1" id="item1">Item 1</li>`<br>`<li class="item2" id="item2">Item 2</li>`<br>`</ul>`|
|Form| form | div>p+form:post>input:text+input:email+input:submit  | `<div>`<br>`<p></p>`<br>`<form action="" method="post">`<br>`<input type="text" name="" id="">`<br>`<input type="email" name="" id="">`<br>`<input type="submit" value="">`<br>`</form>`<br>`</div>` |
|Article| article  | section>(article.containter>h1+p+button)*2 |  |
|Menu| ul>li*3  | nav>.container>ul.navigation#mainMenu>li*3#item${list item $}  | |
|Other| |.columns>(.column>.box>h2{I am a box})+(.column>.box>h3{I am another box})|






### [__VSCode shortcuts__](#)
Some useful commands to use in VSCode. 

||Shortcut|Action|
|:---|:---|:---|
|Terminal| `Ctrl Ö` | Open new terminal window |
|Search project| `Ctrl P` | Open search in project |
|Search commands| `Ctrl Shift P` | Open command palette |











<br><br>[- BACK TO TOP -](#contents)

---
---
<br><br>


## [__GIT & Cmd__](#)

This section is about:<br>
Source control, github and some useful git/cmd commands.

_Good tutorial can be found [here](https://www.youtube.com/watch?v=HVsySz-h9r4) and [here](https://www.youtube.com/watch?v=FdZecVxzJbk)_

<br>

__Git__ is the most popular version-control system for tracking changes in source code during software development. To start with get familiar with some common expressions:

|Expressions |Descriptions |
|:---|:---|
|Repository| Shortly called 'Repo'. A folder location where our project with all change history is stored. Can be local on our machine or remote on i.e. github.|
|Working Directory| Local folder location where all project files that we currently work on (that we have checked out) are located.|
|Stage|Temporarily save changed files in local repo, as ready for commit|
|Commit|Permanently save change files to local repo with an label/description|
|Branch|A movable pointer to one of gits committed versions of code. When you add new feature you spawn new branch to encapsulate the changes.|
|Clone|Fetch code from a remote repo to our local repo.|
|Rebase||
|HEAD|The most recent commit to a branch (tip of a branch)|
|Index|Area where staged files are held for a commit|
|Remote|A common repository online i.e on GitHub or Bitbucket|
|Push/Pull|upload/Download data from remote|
|Check out|Switching between different versions of code that are already in our local system. Checking out updates the files in working directory to match those we check out from i.e. specific branch.|


### [__Useful Git commands:__](#)
- __Install Git.__ To start with make sure to install git on your computer. To check if it is already installed use command 
<br> `> git --version`  &nbsp;&nbsp; _(shows current installed git version)_ 
<br> `> git --help`  &nbsp;&nbsp; _(shows list of commands with some descriptions)_ 
<br> `> git config --help`  &nbsp;&nbsp; _(shows help about a specific here config command)_ 
 
>	_Note! In VSCodes 'Command palette', opened with `CTRL-SHIFT-P`, you can run all git commands by choosing from a list instead writing commands in the terminal. VSCode do also have a simple git GUI to simply some common tasks like viewing changed files and committing changes. Still it is good to know syntax of those basic commands in order to being able to run them from command line as it is often required!_


- __Configure Git.__ Initially make sure to tell git your credentials to use when committing:

 	`> git config --global user.name "Your Name"` <br>
 	`> git config --global user.email "Your@Email.com"` <br>
	`> git config --list` &nbsp;&nbsp; _(this views all saved configuration information)_ 

- __Create a local repo.__ This can be done in two ways. First create new local repo by navigating in command window to a folder that you wish to become the working directory for your project. Then you can transform this folder to a new local repo with followong command:

	`> git init` &nbsp;&nbsp; _(this turns local directory that is not under version control to a git tracked local repo)_ <br>
	`> git init [LocalFolderName]` &nbsp;&nbsp; _(this creates new local directory let makes it an emty local repo)_ 

	 ... or other way to create local repo is to clone an already existing repo from remote to your local machine. From given location in command window

	`> git clone [http://RemoteRepoURL.git] [LocalFolderName]` &nbsp;&nbsp; _(this creates new folder LocalFolderName, copies all versions of code to it and check-outs latest code version.)_

	In both cases we end up with a git repository on our local machine (local repo). In both cases our 'local_branch_name' gets named 'master' and automatically check-out the latest version of the code! 
	<br> `> git branch` &nbsp;&nbsp; _(to see what branch you have checked-out )_ 

>	Note! Git stores all of its history data in a hidden file stored in a hidden folder locally in the root of the repository (folder is named .git)

- __Stage & Commit.__ After working a while (by adding new files in working directory or editing existing once) shall stage the changes and later_commit those to your local repo with:

	`> git status` &nbsp;&nbsp; _(lists useful info such as all changes to stage/commit aswell as errors/conflicts if any)_ <br>
	`> git add -A (--all)` &nbsp;&nbsp; _(stages all changes. Just git add = git add -A)_ <br>
	`> git commit -m 'description'` _(commits all changes with a message)_

- __Set url to a Remote Repo.__ In order to synch changes with a remote repo i.e on GitHub, an address must be set.

	`git remote -v`  &nbsp;&nbsp; _(shows what is you current remote repo url and remote_repo_name)_ <br>
	`git remote set-url origin http://url_to_your_online_repo.git`  &nbsp;&nbsp; _(here we choose 'origin' as our remote_branch_name together with corresponding address)_

- __Pull & Push changes from remote.__ We can not only stor the changes in local repo. We must stor it remotely too. When it's time to push local changes to remote repo  then first pull from from remote. This because there might be changed on remote conflicting with your changes. It is always best to resolve those conflicts and test locally before finally uploading to remote repo:

	`git pull origin master` &nbsp;&nbsp; _(git pulls changes from 'remote_branch_name' - origin to 'local_branch_name' - master')_ <br>
	`git push origin master` &nbsp;&nbsp; _(git uploads changes to 'remote_branch_name' - origin from 'local_branch_name' - master)_<br> 

-	__Create new branch.__ For new feature new branch...:

	`git branch [newBranchName]`  &nbsp;&nbsp; _(this creates a new branch)_ <br>
	`git checkout -b [newBranchName]`  &nbsp;&nbsp; _(this creates a new branch and checks it out)_

<br>

### [__Useful Cmd commands:__](#)
It is good to know and memorize those basic command that are often used.

| | |
|:---|:---|
|pwd|Writes out current location|
|dir|Lists directories and files in current location|
|cd [path]|Changes location. 'cd..' changes back|
|mkdir [dirName]|Creates a new directory in current location|
|touch [fileName]|Creates a new file in current location|
|cat [fileName]|Opens a file|
|ipconfig|detailed information about your current network adapter connection including current IP address|
|copy [soure] [dest]|Copies a source file to destination|
|cls|Clear the command screen|





<br>

### [__.gitignore File__](#)

#TODO


<br><br>[- BACK TO TOP -](#contents)

---
---
<br>
<br>


## [__Node.js & Npm__](#)

__This section is about:__<br>
_How to download packages to automate your work._

 _Extensive node.js tutorial can be found [here](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)._<br>
 _List of build-in node.js modules [here](https://www.w3schools.com/nodejs/ref_modules.asp)._

<br>

### Node.js

__Node__ is a lightweight runtime environment for JavaScript. There are two main usage areas for node: as a backend server or as a development tool on local machines. Server side Node.js  is used for serving data and powering apps and sites. When using as a development tool we automate and speed up building of our apps and sites. On our local computers Node.js can execute programs written in java script to perform various task that help us with development. JavaScript is originally a scrip language but Node.js extends JavaScript to be a "real" programming language. 


- With this cmd command you can check if node is installed on your machine: <br>
`node -v` <br><br>


- To execute a java script file with node use following cmd command: <br>
`node FilenameToRun.js` <br><br>


- JavaScript (.js) node-files usually include modules/packages that are either downloaded (and stored in root folder `node_modules`) or are by default built-in in node.js. Following line in top of the file includes/uses a default `http` module that can be used to make request through HTTP.<br>
`var http = require('http');` <br>...<br>
#TODO add more useful module includes




### Npm
__Node Package Manager__ (NPM) comes by default with node.js. NPM is a package manager tool that is used to search for and download packages. Those packages are JavaScript programs written by others performing tasks that automate various things and save us a lot of development time time. Packages are downloaded through npm can be JavaScript tools used in development but also code that we need when publishing our code to browser (ie loadash or normalize.css). 

<br>

### [How to install npm packages?](#)

-	First always __initiate npm in the root__ of your local repo.<br>
`npm init -y`  
> This will auto-create a default `package.json` file!

- Install packages of two types.Those packages that contain js script or css that are used when generating our final files Or packages that are just used during development (enhance and speed up development). Those later ones shall be installed with flag: `--save-dev option` or `-D`:<br><br>
_For development only:_<br> 
 `npm install 'package_name' --save-dev` &nbsp;&nbsp;&nbsp;&nbsp; OR &nbsp;&nbsp;&nbsp;&nbsp; `npm i -D 'package_name'`<br>
 _FProject dependant:_<br>
 `npm i 'package_name'` &nbsp;&nbsp;&nbsp;&nbsp; OR &nbsp;&nbsp;&nbsp;&nbsp; `npm install 'package_name'`

 > Note! Downloaded package -name and -version number are save in `package.json` file as 'dependency' or 'development dependency'. The package files themselves are stored in auto-created folder in root `node_modules`. This folder is usually excluded from GIT. Only `package.json` that contain 'the list' of packages that our project use is under source control. This is because when/if the `node_modules` with all files is of some reason missing - then npm automatically installs the needed packages. 

 - All dependency files in `node_modules` can be downloaded with command:<br>
 `npm install`

### [Useful NPM Packages](#)

|npm install|flag|What for?|
|:---|:---|:---|
|normalize.css<br>loadash||CSS package for resetting all browsers to same state <br> loadash???|
|webpack<br>webpack-cli<br>webpack-dev-server|-D|Webpack functionality. Bundling & automation.<br><br>Server that auto-injects JS into chrome at runtime.|
|<br>postcss-loader<br>css-loader<br>style-loader|-D|_Webpack loaders_<br>For loading postCSS modules.<br>For importing css to js files.<br>Get browser to read CSS from JS files.|
|<br>postcss-import<br>postcss-simple-vars<br>postcss-nested<br>autoprefixer  |-D|PostCSS modules:<br>For importing code to CSS & NPM-modules files <br> For variables in CSS <br> For nesting in CSS<br>For adding autoprefixes|
|xxx|||
|yyy|||














### [package.json file](#)

This is an important file in the repo root that is auto-generated when we initiate npm. Specially important if you aim to publish your code as a package. Name and Version will be required when publishing are set there.  The 'scripts' property is a dictionary containing script commands that can be run from cmd or VSCode.

_Example of an package.json file:_
```
{
  "name": "ProjectName",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack",
    "devServer": "webpack-dev-server"
  },
  "dependencies": {
    "loadash": "^1.0.0",
    "normalize.css": "^8.0.1"
  },
  "devDependencies": {
    "autoprefixer": "^9.7.3",
    "css-loader": "^3.4.1",
    "postcss-loader": "^3.0.0",
    "postcss-nested": "^4.2.1",
    "postcss-simple-vars": "^5.0.2",
    "style-loader": "^1.1.2",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1"
  }
}
```

<br><br>[- BACK TO TOP -](#contents)

---
---
<br><br>


## [Webpack](#)

__This section is about:__<br>
 _Bundling and auto-building your source files._

_Some good tutorial [HERE](https://www.youtube.com/watch?v=lziuNMk_8eQ)_

<br>
Webpack is a bundler and dependencies manager and our "building" tool. Simply described:


  `Webpack consumes many files that are not written in a way that browser understands (but we understand very well), and generates few minimal files (i.e. .html, .css and .js) that the browser can understand (but we have hard to read).`

Webpack can for example (when instructed in webpack.config.js file) build one single .js file from several files  (i.e JS ES6, CSS and JS). Thanks to its many  packages it can perform a variety of tasks. Webpack is popular to use in big web projects as it streamlines ans simplifies the development. Without it would be very hard to import and add all script dependencies manually.

During development you run webpack in development mode as then it bundles faster faster than in production mode. The files are usually minified for performance only in production mode. In development mode we do things a bit differently to speed up development. For example we load CSS though a javascript file (for simple auto-injection and hot-refresh of browser).

-	Initiate Webpack in the root of your working directory:<br>
	`npm i -D webpack webpack-cli  webpack-dev-server`<br>
	`npm i -D postcss-loader css-loader style-loader`<br>
	`npm i -D postcss-import postcss-simple-vars postcss-nested autoprefixer`

<br>

### [Bundling with PostCSS](#)

PostCSS is an npm package widely used with webpack. It is like an empty shell that on its own do not do anything. It uses "loaders" (other npm packages), that can load and execute various PostCSS packages (other npm packages). Webpack, when bundling, uses PostCSS packages to execute and understand different file formats we that we chose to use for our development. For example non standard stuff like CSS variable, nesting in CSS can be used by developer and though Webpack bundler be transformed to valid CSS that browser understands thanks to PostCSS packages. 

In order for webpack to understand and know what PostCSS loaders and what PostCSS packages to use for various files it must be instructed in webpack.config.js file

You can check our our example of webpack.config.ja file but follwing comes description on some settings in more details way if you want to know what-is-what.

<br>

_Instructing webpack that all files with ending .css shall be handled by following PostCSS loaders:_ 

```
module: {
		rules: [
			{
				test: /\.css$/i, /* Only if file ends in .css */
				use: ['style-loader','css-loader']
			}
		]
	},
```


/* Telling webpack that that all files ending with .css shall be handled by following loaders*/ 

module: {
		rules: [
			{
				test: /\.css$/i, /* Only if file ends in .css */
				use: ['style-loader','css-loader']
			}
		]
	},


<br>

### [Webpack devServer](#)

__Webpack devServer__ (webpack-dev-server) is a webpack npm package that is started from command line, usually by running a NPM-script. When running it can automatically inject code to running browser(s) instantly when tracked project files (i.e HTML, CSS and JS) are saved. The injection is done is such a way that browser do not perform 'hard refresh' and keeps its state. This is VERY convenient when developing and CSS styling.The server can also be reached from several browsers on the same wi-fy network. It is very popular dev server to use when building and styling your web app. In order to get it work some configurations need to be done and some npm packaged downloaded. Following is described what need to be done to gest started with webpack DevServer

- Make sure webpack is installed

- Install npm packages:<br>
`npm install -D webpack-dev-server css-loader style-loader postcss-loader`


- In projects [package.json](#packagejson-file) add new script to run from command line. Add in script section: <br>
`"devServer": "webpack-dev-server",`

- Create [webpack.config.js](#webpackconfigjs-file) file in the root of your repo:<br>
`mkdir webpack.config.js`

```
const postCSSPlugins = [
    `list here all downloaded postCSS plugins you use `
]


/* Telling webpack that that all files ending with .css shall be handled by following loaders*/ 

module: {
		rules: [
			{
				test: /\.css$/i, /* Only if file ends in .css */
				use: ['style-loader','css-loader']
			}
		]
	},


/* Telling webpack to watch for changes in a directory and inject those to the running browser(s) at localhost:3000 */

DevServer: {
		contentBase: path.join(__dirname, 'app'),	/* Base folder where our index.html file lives */
		hot: true, /* Auto inject at save. The main entry point .js file must contain following: if (module.hot) module.hot.accept(); */
		port: 3000
	},
```

- In our main entry point js file `App.js` add this in order to get css into js and hot auto injection of .js file to browser to work.
```
import '../styles/styles.css'

if (module.hot)
{
	module.hot.accept();
}

```


- In VSCode file `settings.json` (open from settings) add following line in order to avoid error in editor in CSS files when using scss syntax.
```
"files.associations": {"*.css": "scss"}
```

<br>[- BACK TO TOP -](#contents)

---
---
<br>
<br>

### __Markdown__
##### Markdown is a way to style text on the web. You control the display of the document. Files are saved as .md files and only special readers ca view it (or Chrome with plug-in). On github README.md in root is shown as main file. As best practice use markdown to style README.md file at github. A command to preview .md file in VSCode is CTRL-SHIFT-V. 

Note! Each heading ie `## My heading` creates a class based on name; here class="my-heading". In order to navigate to it use `[Text to show](#my-heading)`. Used in content menus on top.

```
Recommended VSCode Extensions:

Auto-Open Markdown Preview      - Opens a preview window on the side for preview of selected .mp file.
```

#### Markdown Syntax

_\_italic text\__ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
__\_\_bold text\_\___ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
~~striken text~~ &nbsp; -->&nbsp;~\~striken text\~\~ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Link text](http://www.di.se) &nbsp; -->&nbsp;\[Link text\] \(url\)

![Image](http://icons.iconarchive.com/icons/saviourmachine/chat/32/online-icon.png)  &nbsp;&nbsp;&nbsp;&nbsp;  --> &nbsp;`![Alt Text](url to image)`

Normal text  
#### \#\#\#\# Heading3
##### \#\#\#\#\# Heading4

`` `<p>inline code</p>` ``

```HTML 
   ```HTML (or javascript)
   <div>
       <p>formatted code with colors</p>
    </div>
   ```    .
```

<br>

### [webpack.config.js file](#)

This is an important file in the repo root that you must create and add manually in order to give instruction to webpack how to run. Webpack when run, the first thing it does is to looks in running folder for this file.

_Example of an webpack.config.js file:_
```
var path = require('path');

/* */
const modeType = "development";
/* */
const entry_JSToBundle = "./app/assets/scripts/App.js";

/* Settings related to where the build bundled file shall be served on hard drive. */
/* Note! WebServer serves this file from RAM, do not write to hard drive! */
const output_BundledDir = path.join(__dirname, '/app'); 
const output_BundledFilename = "bundeld.js";

/* Setting related to webpack-dev-server */
const devServer_ContentBase = path.join(__dirname, '/app'); /* Root of our index.html that devServer runs */
const devServer_HtmlFilesLocation = './app'; /* Location where html that shall be tracked when saved changes */
const devServer_Port = '3000'; /* The port to serve the page on -> localhost:3000 */

/* PostCSS plugins that are served to "postCSS-loader" */
const postCSS_Plugins = [	
	require('postcss-import'), /* Must be first. Replaces the @import with code. */
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer')
];

module.exports = {
	mode: modeType,
	entry: entry_JSToBundle,	
	output: { path: output_BundledDir, filename: output_BundledFilename },
	devServer: { 
		contentBase: devServer_ContentBase, /* Location of index.html file */
		before: (app, server) => { server._watch(devServer_HtmlFilesLocation + '/**/*.html') }, /* For auto-reloading when a html file is saved */
		hot: true, /* For auto-inject of bundled file at save. Note! The .js that is entry point file must contain: if (module.hot) module.hot.accept() */
		port: 3000, /* The port to run the site on -> localhost:3000 */
		host: '0.0.0.0' /* Reach devServer from other devices on same wi-fi. Address: [IPv4 Address 192.168.X.X]:3000 (look up XXX  cmd>ipconfig)*/
	},
	module: {
		rules: [
			{
				test: /\.css$/i, /* This rule only for files ending with .css due to this*/
				use: ['style-loader','css-loader', {loader: 'postcss-loader', options: {plugins: postCSS_Plugins}}]
			}
		]
	}
}
```


> \>Text 1 _`<br>`_ <br>
> \>Text 2 on the second line

- \- ul item &nbsp; _(or use '1.' for ol)_
- \- ul item
    - \- ul subitem a (tabbed)


```
|Name|Email|
|---|---|
|Peter|peter@devoote.se|
|Martin Czerwinski|martin@cmq.se|
```
|Name|Email|
|---|---|
|Peter|peter@devoote.se|
|Martin Czerwinski|martin@cmq.se|


<br>

[- BACK TO TOP -](#contents)

---
---
<br><br>


# CODE EFFECTIVELY

## [__CSS__](#)

__This section is about:__<br>
 _How to style pages with CSS._

_Some good tutorial [HERE](xxx)_


In programming languages the word __container__ is generally used for structures that can contain more than one element. A __wrapper__ instead is something that wraps around a single object to provide more functionalities and interfaces to it. DIV tag is a very common to use for this purpose with class name container/wrapper.

[Structure](#)

TODO

### [Commonly performed tasks](#)

__This section is about:__<br>
_Source control, github and some useful git/cmd commands._

- ### [Common expressions](#)

Eample of styling for body:

`font-family: 'roboto', sans-serif;`  - some common styles <br>
`img {
	max-width: 100%;
	height: auto;
}` - images larger than screen are scaled down to fit screen width and keep aspect ratio.

- ### [__Float__](#)

	TODO

- ### [Flexbox](#)

	TODO

- ### [CSS GRID](#)

	TODO

- ### [Centering of elements](#)

### Center a text on a div-box/img

- Two (&more) elements in a container:
	- csdfsd


- Ono text element in a container:

- One box element in a container:



- On parent set: position:relative
- On element we center set: position:absolute, _(this will take the element out of normal flow)_
<br>Horizontal center: width:100% & text-align:center
<br>Vertical center: top:0 & left:0 & transform: translateY(-50%) - _(moves up 50% of its own height)_ 


- Style a box with frame and nice text ?? called title???

-	Center a div within div

-	Center texts within a image

<br>

[- BACK TO TOP -](#contents)

---
---
<br>

## [HTML](#)

__This section is about:__<br>
 _How to style pages with CSS._

_Some good tutorial [HERE](xxx)_


Elements in HTML are mostly "inline" or "block" elements. there are many other display types to use. Read here 
https://www.w3schools.com/cssref/pr_class_display.asp

- Block elements:```<p>, <div>, <header>, <section>, <article>...```<br>
"Display: block" means that element fills the entire line of its parent and next element is always placed below. Height is determined depending on content inside such a element. Nothing can be displayed on its left or right side. Width and Height apply.

- Inline elements: ```<a> <span> <code> <button>...```<br>
"Display: inline" means that the element just take the width (and hight) corresponding to the content of such an element. If there is space beside, onother inline element is placed in that sppace. When it comes to margins and padding, browsers treat inline elements differently. Any height and width properties will have for most cases no effect (except button).You can add space to the left and right on an inline element, but you cannot add height to the top/bottom padding/margin. 


"Display: inline-block" allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.

# CENTERING THINGS

A common task for CSS is to center text or images. In fact, there are three kinds of centering:

-	Centering lines of text
parent-container -> text-align: center

-	Centering a block of text or an image
-	Centering a block or an image vertically


# Screens and IMAGES

__Screen Resolution__
Resolution refers to number of pixels that make up the image on a screen. A higher pixel count means that sharper picture and possibility to show big sharp images with good quality. Resolution is expressed using horizontal and vertical pixel counts.<br> 
1366x768

Smartphone 360x640 (#1 popular)
Smartphone 375xX (#2 popular)

`Notebooks/Pads - Wildly used, HD, 1366x768. (aka 720) (#3 popular)` <br>
`Notebooks/Pads - FULL HD (aka 1080) is 1920x1080 (#4 popular)` <br>
`Monitors/TVs - 3K is 3200×1800.`<br>
`Monitors/TVs - 4K (UHD = ultra HD) is 3840×2160.`
`TV's - 7680x4320`

__Aspect ratio__
The predominant display aspect ratio on 2020s PC market, including laptops,tablets, and monitors, is 16:9. Also referred to as widescreen aspect ratio. I.e FULL HD 1920x1080 have 16:9 aspect ratio.



<br><br>[- __BACK TO TOP__ -](#contents)

---
---
<br><br>

## [Content for web](#)

__This section is about:__<br>
_All about using images, backgrounds and icons._

_Introduction videos - [here](xxx)_



