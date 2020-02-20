# __MODERN WEB DEVELOPMENT__



What each honored web developer should know - a sort of cheat sheet and look up manual.

## __CONTENTS__

>- __INTRODUCTION__
>	- [What can I expect to find here?](#introduction)
>- __SETTING UP DEVELOPMENT ENVIRONMENT & TOOLS__
>	- 	[__VSCode__](#vscode) - _Configuration of your code editor, intellisense and emmet commands._
>   	- [Useful VSCode extensions](#Useful-VSCode-extensions)
>   	- [EMMET snippets](#emmet-snippets)
>   	- [VSCode Shortcuts](#vscode-shortcuts)
>	- [__GIT & Cmd__](#git-&-cmd) - _Source control, github and some useful git/cmd commands._
>		- [_Useful git commands_](#useful-git-commands:) 
>		- [_Useful cmd commands_](#useful-cmd-commands:) 
>		- [.gitignore file](#.gitignore-file)
>	- [___Node.js & Npm___](#nodejs-&-npm) - _How to download packages to automate your work._
>   	- [Install Node.js](#install-node.js-and-execute-programs)
>   	- [Useful Node.js modules](#useful-node.js-modules)
>   	- [Install nmp packages](#install-npm-packages-and-use-those)
>   	- [Useful npm packages](#useful-npm-packages)
>   	- [Package.json file](#packagejson-file)
>	- [__Webpack__](#webpack) - _Bundling and auto-building your source files._
>   	- [Bundling with PostCSS](#bundling-with-postcss)
>   	- [Webpack devServer](#webpack-devserver-with-postcss)
>   	- [Webpack.config.js file](#webpackconfigjs-file) 
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

This section is about: Configuration of your code editor, intellisense and emmet commands.

_Introduction videos [here](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code)_

<br>

 __VSCode__ is a lightweight code editor that comes with built-in support for JavaScript, TypeScript, Emmet, IntelliSense, Node.js, NPM and more. (TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language). Additionally VSCode has many extensions available to download from NPM market. Installing VSCode gets you started right away with very helpful build in EMMET snippets and intellisense support. IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS and LESS. VSCode has also built in support for GIT.<br> 


### [__Useful VSCode extensions__](#)
VSCode have many extensions. Here is a list of a couple useful once to install and learn how to use.

|| |
|---|---|
|Live Server|A lightweight development Live Server with live reload. Use for quick preview instead of Webkit Dev Server
|Code Spell Checker|Spelling autocorrector with fix proposals.|
|Git History|Views branches and history of code in a nice way|
|Node.js Modules Intellisense|Plugin that autocomplete JavaScript/TypeScript modules in import statements. Scans builtin modules, dependencies and file modules.|
|..|..|

<br>

### [__EMMET snippets](#)
Use EMMET to speed up writing  code. It autogenerates code from short text snippets for HTML, CSS, SASS. 

|||||
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
|...|...|...|

<br>




### [__VSCode Shortcuts__](#)
Make sure to memorize some useful shortcut commands to use in VSCode. 

||||
|:---|:---|:---|
|Terminal| `Ctrl Ö` | Open new terminal window |
|Search project| `Ctrl P` | Open search in project |
|Search commands| `Ctrl Shift P` | Open command palette |











<br><br>[- BACK TO TOP -](#contents)

---
---
<br><br>


## [__GIT & Cmd__](#)

This section is about GIT as source control with some common git- & cmd-commands.

_Good tutorial can be found [here](https://www.youtube.com/watch?v=HVsySz-h9r4) and [here](https://www.youtube.com/watch?v=FdZecVxzJbk)_

<br>

__Git__ is the most popular version-control system for tracking changes in source code during software development. To start with get familiar with some common expressions:
| | |
|:---|:---|
|Repository| Shortly called "Repo". A  location ("container") where our project files with all change history is stored. Can be located on our local machine or remotely on i.e. github.|
|Working Directory| Local folder location where your command window points to - where you run your git commands |
|Working Tree|Local folder location where your repo have checked out git code. A set of files that we work with on a branch that is linked to the repository |
|Check out|Switching between different versions of code that that we can edit.<br> Checking out updates the files in working directory to match those we check out from i.e. specific branch.|
|Branch|A movable pointer to one of versions of code.<br> Usually when you add new feature you spawn new branch to encapsulate the changes.|
|Stage|Temporarily save changed files in local repo (=added to index), marked as ready to commit|
|Commit|Permanently save changed files to local repo with an label/description|
|Clone|Fetch code from a remote repo to local repo.|
|Rebase|In Git there are two main ways to integrate changes from one branch into another: merge and rebase. Rebase is moves the entire feature branch to originate from its parents HEAD. |
|HEAD|The most recent commit to a branch (tip of a branch)|
|Index|Area where staged files are held for a commit|
|Remote|A remote online repository that have an url i.e on GitHub or Bitbucket|
|Push/Pull|Upload/Download code from remote repo|

<br>

### [__Useful Git commands__](#)
It is recommended to understand and memorize those basic command that are often used.

`CTRL-Ö` &nbsp;&nbsp;  -  &nbsp;&nbsp;  VSCode shortcut that toggle open/close terminal window.

- __Install Git.__ To start with make sure to install git on your computer. To check if it is already installed use comman.
<br> `> git --version`  &nbsp;&nbsp; _shows current installed git version_ 
<br> `> git --help`  &nbsp;&nbsp; _shows list of commands with some descriptions_ 
<br> `> git config --help`  &nbsp;&nbsp; _shows help about a specific command here: config_ 
 
>	_Note! In VSCodes a 'Command palette' can be opened with `CTRL-SHIFT-P`. From there you can run all git commands by choosing those from a list instead of writing commands in the terminal window. VSCode do also have a simple git GUI in order to simply some common tasks performed regularly. Still it is good to know syntax of those basic git commands in order to being able to run them from command line as it is sometimes required!_


- __Configure Git.__ Initially make sure to tell git your credentials as git uses those when committing code:

	`> git config --list` &nbsp;&nbsp; _(this views all saved configuration information)_ <br>
	`> git remote -v` &nbsp;&nbsp; _(shows from where our checked out code originates from. Our origin.)_ <br>
	`> git branch` &nbsp;&nbsp;  (to see what branch you have checked-out ) <br>
	`> git status` &nbsp;&nbsp; _(lists useful info such as all changes to stage/commit aswell as errors/conflicts if any)_ 

 	`> git config --global user.name "Your Name"` <br>
 	`> git config --global user.email "Your@Email.com"` <br>




- __Create a local repo.__ This can be done in two ways. One way is to create new local repo by navigating in command window to a folder that you wish to become the repo for your project. Then you can transform this local folder to a repo with following command:

	`> git init` &nbsp;&nbsp; _(this turns a working directory that is not under version control to a git tracked local repo. Hidden .git folder is created.)_ <br>
	`> git init [LocalFolderName]` &nbsp;&nbsp; _(first new folder is created in working directory, and then it is turned into an empty local repo)_ 

	 ... or other way to create local repo is to clone an already existing repo from remote to your local machine. From given location in command window

	`> git clone [http://RemoteRepoURL.git] [LocalFolderName]` &nbsp;&nbsp; _(first new folder is created in working directory, and then repo from remote is committed into it. The latest version of master is checked out)_

	Note! In both cases we end up with a local git repo. In both cases our 'local_branch_name' gets named 'master' and  latest version of the code is checked out automatically! Write `git branch`  to see what branch you have checked-out. 

>	Note! Git stores all of its history in a hidden folder .git in the root of the repository.)

- __Stage & Commit.__ After adding new files in working tree or editing existing ones we shall stage the changes, and later commit those to your local repo. Do this with:

	`> git status` &nbsp;&nbsp; _(lists useful info such as all changes to stage/commit aswell as errors/conflicts if any)_ <br>
	`> git add . (= -A or --all)` &nbsp;&nbsp; _(stages all changes in index)_ <br>
	`> git commit -m 'description'` _(commits all changes in stage area with a description)_

-   __Undo changes__. There are different ways to undo or revert made changes:<br>

	`> git restore [.] or [fileName])` &nbsp;&nbsp; _(permanently deletes changes in working tree but do nothing to staged ones.)_ <br>
	`> git restore --staged [.] or [fileName])` &nbsp;&nbsp; _(reverses changes that are staged back to working tree to be unstaged. Note! If same file in working tree differs from staged one,then the staged change will be permanently deleted!))_ <br>
	`> git checkout -- [.] or [fileName]` &nbsp;&nbsp; _(permanently deletes changes in working tree but do nothing to staged ones. Also it re-checkouts all the files again.)_ <br>

	So in order to permanently remove both staged files and the unstaged ones:<br>
	`> git restore --staged .`
	`> git checkout -- .`

	`> git rm [filename]` &nbsp;&nbsp; _(permanently removes the file from working tree and automatically stages this change so when committed then the file is removed)_ <br>

-   __Merge and Diffs and Logs__. <br>	
	`> git log -- [.] or [fileName]` &nbsp;&nbsp; _(shows commits for file or files_ <br>

	`> git diff [.] or [fileName]` &nbsp;&nbsp; _(shows diff between changed file(s) in working tree vs staged area.)_ <br>
	`> git diff --staged [.] or [fileName]` &nbsp;&nbsp; _(shows diff between file or files in staged area vs committed.)_

- __Set url to a Remote Repo.__ In order to synch changes with a remote repo i.e on GitHub, an address must be set. <br>

	`git remote -v`  &nbsp;&nbsp; _(shows what is you current remote repo url and remote_repo_name)_ <br>
	`git remote set-url origin http://url_to_your_online_repo.git`  &nbsp;&nbsp; _(here we choose 'origin' as our remote_branch_name together with corresponding url. We can then push/pull to the origin url.)_

- __Pull & Push changes from/to remote.__ We can not only store the changes in local repo. We shall store it remotely too. When time to push local changes to remote  then first pull from from remote. This because there might be changed on remote conflicting with your changes. It is always best to resolve those conflicts and test locally before finally uploading (pushing) the result to remote repo:

	`git pull origin master` &nbsp;&nbsp; _(git pulls changes from 'remote_branch_name' - origin to 'local_branch_name' - master')_ <br>
	`git push origin master` &nbsp;&nbsp; _(git uploads changes to 'remote_branch_name' - origin from 'local_branch_name' - master)_<br> 

-	__Create new branch.__ For new feature new branch...:

	`git branch [newBranchName]`  &nbsp;&nbsp; _(creates a new branch but stays on the one we have checked out)_ <br>
	`git checkout -b [newBranchName]`  &nbsp;&nbsp; _(creates a new branch and checks it out)_

-	__Clone someones remote repo__ When you want to copy a public remote repo to your own.

	- Create own empty remote repo i.e. A
	- Clone a remote public repo to a local repo
	- Change remote origin URL for the newly created repo to your own remote repo.
	- Push changes to your remote URL. This will upload all copied files to your own remote repo.


<br>

### [__Useful Cmd commands:__](#)
It is good to know and memorize those basic command that are often used:

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

### [__.gitignore file__](#)

A file in root of your project which tells Git witch files to ignore. Normally auto-created when initiating git. Example of a git file:

```
# Numerous always-ignore extensions
*.diff
*.err
*.orig
*.log
*~
*.sass-cache
node_modules/
.tmp/

# OS or Editor folders
.DS_Store
Thumbs.db
.cache
.project
.settings

and more...
```


<br><br>[- BACK TO TOP -](#contents)

---
---
<br>
<br>


## [__Node.js & Npm__](#)

__This section is about:__<br>
_How to download packages to automate your work._

 _Extensive node.js tutorial can be found [here](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)._<br>
 _Typescript description can be found [here](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d)._<br>
 _List of build-in node.js modules [here](https://www.w3schools.com/nodejs/ref_modules.asp)._
<br><br>

### [__Node.js__](#)

__Node.js__ is a _lightweight_ runtime environment for JavaScript. There are two main usage areas for Node.js. 1) One as a backend server that executes javascript. 2) Other one as a development/automation tool used on developers computers. 

Server-side Node.js  is used for serving data and powering apps and sites. When using it as a development tool we can automate common tasks and speed up building of our apps and sites. 

Node.js can execute programs written in JavaScript. Originally JavaScript is a scripting language but Node.js "extends" JavaScript to be a "real" programming language. It do not understand TypeScript files bu there is a nmp package (typescript) that can transform typescript (.ts) files to javascript (.js) files.

<br>

### [Install Node.js and execute programs](#)
- Following command check if node is __installed__ on your machine.If not just google and install it. <br>
`node -v` <br>

- To __execute__ a java script file with node use following cmd command: <br>
`node anyFileToRun.js` <br><br>


>	JavaScript that is run by node.js usually include (require) packages that are either downloaded though npm (and stored in root folder `node_modules`) or built-in in node.js. In order to use those packages those must be "required" in top of the .js file. For example:
`var http = require('http');`.

<br>


### [Useful Node.js modules](#)

Following are some common packages and functions that are useful and good to memorize.

|||||
|:--|:--|:--|:--|
|require(__fs__)|access filesystem|__writeFile__(__dirname +"./[FileName]",<br> [TextToAdd],<br> function() {...})|YES|
|require(__http__)|Access www|__get__(url,<br>function(resp) {<br> response.__pipe__(fs.__createWriteStream__([FileName])) <br>})|YES|
|require(__http__)|...|...|YES|



>	Note! Even though it is not required, it is a good practice to use ; at end of each statement. <br>
In node 'var' and 'const' are used when declaring variables. Var variables can be updated and re-declared within its scope, const variables can neither be updated nor re-declared. <br>



### [__Npm__](#)


__Node Package Manager__ (NPM) comes by default with node.js. NPM is a package manager tool that is used to search for and download packages that can be run by Node.js. Those packages are JavaScript programs written by others performing tasks that automate various things and save developers precious time. Packages that are downloaded through npm can be JavaScript tools used to automate development, but also code snippets that project use when aut-creating code that we later send to browser (ie loadash or normalize.css are project dependent npm packages). 

<br>

### [Install npm packages and use those](#)

-	First always __initiate npm in the root__ of your local repo.<br>
`> npm init -y`  

>	Note! By using -y do not need to answer questions, we use predefined values. Running this command will auto-create a default __`package.json`__ file that is very important file for npm!

- Now keep on and install packages of two types. <br>
1) Those that contain js script or css that are part of our final file that is sent to browser (project dependant).<br>
2) Packages that are just used during development to automate tasks to enhance and speed up development. Those shall be installed with flag: `--save-dev` option or shorty `-D`:<br><br>
_For development only:_<br> 
`> npm install --save-dev [package_name]` &nbsp;&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;&nbsp; `npm i -D [package_name]`<br>
 _Project dependant:_<br>
 `> npm install [package_name]` &nbsp;&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;&nbsp;  `npm i [package_name]`

 > Note! Name and version of downloaded nmp package is save in `package.json` file as a 'dependency' or 'development dependency'. The package itself is stored in auto-created folder `node_modules` in project root. This folder is usually by default excluded from tracking by GIT. Only the file itself - `package.json` - that contain 'the list' of packages that our project use is under GIT source control. This because if `node_modules` folder would of some reason be deleted - then npm can from `package.json` file automatically restore all in it defined packages. 

 - All packaged defined in `package.json` can be downloaded to  `node_modules` with command:<br>
 `> npm install`


-	Instead of npm install, you can use a command to freshen already installed packages. Then npm checks if there exist newer versions in the online npm repository that satisfy specified semantic versioning ranges and installs them and updates package.json file with the new version. <br>
 `> npm update --save`

- Ask npm to list which packages have newer versions available: <br>
 `> npm outdated`
 

 - Ask npm to install the latest version of a package and update oackage.json file with that version: <br>
 `> npm install lodash@latest --save`
 


<br>

### [Useful NPM Packages](#)

|Npm install|flag|Usage|
|:---|:---|:---|
|normalize.css<br>loadash||CSS package for resetting all browsers to same state. <br> Loadash is for ...???|
|<br>webpack<br>webpack-cli<br>webpack-dev-server|-D|_Common Webpack functionality_<br>For bundling & automation.<br>For command line functionality<br>Dev server that auto-injects JS into chrome at runtime.|
|<br>postcss-loader<br>css-loader<br>style-loader|-D|_Webpack loaders_<br>For loading postCSS modules.<br>For importing css to js files.<br>Get browser to read CSS from JS files.|
|<br>postcss-import<br>postcss-simple-vars<br>postcss-nested<br>autoprefixer  |-D|PostCSS modules:<br>For importing code to CSS & NPM-modules files <br> For variables in CSS <br> For nesting in CSS<br>For adding autoprefixes|
|xxx|||
|yyy|||














### [package.json file](#)

This is an important file in the root of the repo. It is auto-generated when we initiate npm. This is an important project file. The 'scripts' property is a dictionary containing script commands that can be run from command line. Dependencies are the packages that are used in within the project.

_Example of an package.json file:_
```
{
  "name": "travel-site",
  "version": "1.0.0",
  "description" : "Travel site for SunTravel company.",
  "author" : "CMQ Nordic AB",
  "license" : "ICS",
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
  },
  "dependencies": {
    "loadash": "^1.0.0",
    "normalize.css": "^8.0.1"
  },
  "devDependencies": {
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1",
    "postcss-loader": "^3.0.0",
    "css-loader": "^3.4.1",
    "style-loader": "^1.1.2",
    "postcss-import": "^12.0.1",
    "postcss-simple-vars": "^5.0.2",
    "postcss-nested": "^4.2.1",
    "autoprefixer": "^9.7.3"
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


### [__BEM__](#)
Structured your CSS and UI in an organized way. Benefits are: 
- __modularity__ -  ability to transfer blocks from your finished projects to new ones as blocs are independent standalone objects.
- __Reusability__ - With a set of style guidelines in place, you can build a library of blocks, making your CSS super effective and reusable.
- __Structure__ - BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.


	-	__block__ represents the higher level of an abstraction or component.
	-	__.block__element__ represents a descendent of .block that helps form .block as a whole.
	-	__.block--modifier__ represents a different state or version of .block.


```
	.block {}							
	.block__element {} 
	.block--modifier {}

	.person {}
	.person__hand {}
	.person--female {}
	.person--female__hand {}
	.person__hand--left {}
```





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



