# __MODERN WEB DEVELOPMENT__



What each honored web developer should know - a sort of cheat sheet and look up manual.

## __CONTENTS__

>- __INTRODUCTION__
>	- [What can I expect to find here?](#introduction)
>- __SETTING UP DEVELOPMENT ENVIRONMENT & TOOLS__
>	- 	[__VSCode__](#vscode) - _Configuration of your code editor, intellisense and emmet commands._
>   	- [Useful VSCode extensions](#Useful-VSCode-extensions)
>   	- [EMMET commands](#emmet-commands)
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
>	- [__CSS__](#css) - _Things to know to produce good CSS._
> 		- [PostCSS](#PostCSS) - _Nesting, variables, mixins_
> 		- [Organize your code](#file-structure) - _How to split and organize your files._
> 		- COMMONLY PERFORMED TASKS
> 			- [Floating](#floating)
> 			- [Flexbox](#flexbox)
> 			- [CSS Grid](#css-grid)
> 			- [Centering of Elements](#centering-of-elements)
> 			- [Working with Text And Fonts](#working-with-texts-fonts)
>	- [__HTML__](#html) - _Things to know to produce good HTML._
> 		- xxx
>	- [__JS__](#js) - _Things to know to produce good JS._
> 		- xxx
>- __LEARN FROM EXAMPLES__
>	- [__TODO__](#xxx) - _TODO._


<br>

# __INTRODUCTION__    

## [What to expect to find here?](#)

Following blog is a short guide and look up manual to modern web development technologies. It includes short explanations, important things to remember and cheat-sheets to look up against in efficient way. The targeted audience for this blog are developers that need fast look up (or fresh up)their knowledge. Use this guide to get started and code faster and more efficient.

This guide is a based of our experience, read articles and various courses.


<br><br>[- BACK TO TOP -](#contents)

---
---
<br><br>


## [__VSCode__](#)

__This section is about:__<br>
_Configuration of your code editor, intellisense and emmet commands._

_Introduction videos - [here](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code)_

<br>

 __VSCode__ is a lightweight code editor that comes with built-in support for JavaScript, TypeScript, Emmet, IntelliSense, Node.js and has lots of good external extensions available in an easy way. Out-of-the-box support for EMMET snippets and Intellisense gets you started right away with your WEB project. IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS and Less. VSCode has also built in support for Git. VSCode supports word based completions for any programming language. <br> 

 __#TODO__ - Write something what is missing by default and good to know....

### [Useful VSCode extensions](#)

|| |
|---|---|
|Auto-Open Markdown Preview | Opens a preview window on the side for preview of selected .mp file|
|Code Spell Checker|Spelling checker and autocorrect for source files|
|Git History|TODO|
|Git Lens|TODO|

### [EMMET commands](#)
EMMET generate code from snippets for and is enabled by default for HTML, CSS, SASS in VSCode. 

#TODO - what does it not support?

Best for HTML and CSS only?

|SNIPPETS|VSCode|Custom|HTML output|
|:---|:---|:---|:---|
|New doc| ! |   | `HTML doc structure` |
|Comment| c |   |  `<!-- -->` |
|Css| link:css |   | `Inc CSS`|
|Script| script:src |   | `Inc js` |
|Lorem| lorem23 |   | `Random text with 23 words`  |
|Paragraph| p{Text} |p.myClass._Big{Text}|`<p class="myClass _Big">Text</p>`|
|Div| div | .btnClass.__bigger#myButton{Text} |`<div class="btnClass __bigger" id="myButton">Text</div>`|
|List| ul>li*3 |ul.nav>li.item$#item$*2{Item $}|`<ul class="nav"><li class="item1" id="item1">Item 1</li><li class="item2" id="item2">Item 2</li></ul>`|
|Form|  | div>p+form:post>input:text+input:email+input:submit  |  |
|Section|  | section>(article.containter>h1+p+button)*3 |  |
|Other|  | nav>.container>ul.navigation#mainMenu>li*3#item${list item $}  | |
|Other| |.columns>(.column>.box>h2{I am a box})+(.column>.box>h3{I am another box})|



















<br><br>[- BACK TO TOP -](#contents)

---
---
<br><br>


## [__GIT & Cmd__](#)

__This section is about:__<br>
_Source control, github and some useful git/cmd commands._

 _Good tutorial can be found: [here](https://www.youtube.com/watch?v=HVsySz-h9r4) and [here](https://www.youtube.com/watch?v=FdZecVxzJbk)_

<br>

__Git__ is the most popular version control system for corporation and tracking changes in source code. To start with - some commonly used expression to understand: 
```
Repository 			=> Repo => Our 'project' under source control. Can be local or remote.
Commit 				=> Save to git history
Branch 				=> __#TODO__
Check-out			=> Switching between different versions of code (switching branches or #TODO )
Working Directory 	=> All files that you currently have "checked out" and edit/work on
```



### [Useful git commands:](#)
- __Install it__ on your computer (or check if installed) with command: <br>
`git --version`
 
>	_Note! In VSCode's "Command Palette" (open it with `CTRL-SHIFT-P`) you can run all GIT commands from a list, instead writing memories command in the terminal. VSCode do also have a Git GUI with buttons to simply som common tasks. Still good to know syntax of commands to run them from command line when needed!_


- __Configure git__ on your local machine by telling who you are for committing changes - set email, user name with:

 	`git config --global user.name "Your Name"` <br>
 	`git config --global user.email  your@email.com` <br>
	 `git config --list` &nbsp;&nbsp; _(views set info)_ 

- __Create a local repo__ by navigating to the folder in cmd window that you wish to become a repo. Then either create a new repo from scratch with:

	`git init`

	 ... or clone a repo from remote by:

	`git clone http://YourRemoteRepoURL.git`

	Note! In both cases automatically our 'local_branch_name name' is named `master` and is checked-out locally! See what branch you have with<br> `git branch`

- At some point we need to push (upload) our local repo to a remote repo (i.e on GitHub). Then you must __set a remote_url__:

	`git remote -v`  &nbsp;&nbsp; _(show what is you current remote repo url and name)_ <br>
	`git remote set-url origin http://url_to_your_online_repo.git`  &nbsp;&nbsp; _(here we choose 'origin' as our remote_branch_name)_

- After working a while with your projects locally you shall stage the changes and later __commit__ to your local repo with:

	`git status` &nbsp;&nbsp; _(lists all changes to stage/commit)_ <br>
	`git add -A` &nbsp;&nbsp; _(stages all changes)_ <br>
	`git commit -m 'commit description'`

- When time to push __local changes to remote repo__  then first pull from from remote as there might be changed on remote conflicting with your changes. It is always best to resolve those conflicts and test locally before updating remote repo:

	`git pull origin master` &nbsp;&nbsp; _(git pull from 'remote_branch_name' to 'local_branch_name')_ <br>
	`git push origin master` _(git push to 'remote_branch_name' from 'local_branch_name')<br> 

-	Create a new branch and work toward with and check-out by:

	`git checkout -b 'myBranchName'`  &nbsp;&nbsp; _(__TODO__ ???)_

<br>

### [Useful cmd commands:](#)

| | |
|:---|:---|
|pwd|Writes out current location|
|dir|Lists directories and files in current location|
|cd 'path'|Changes 'path' location. 'cd..' changes back|
|mkdir 'new_dir_name'|Creates a new directory in current location|
|touch 'filename_with_extension'|Creates a new file in current location|
|xxx|__#TODO__|



<br>

### [.gitignore file](#)

#TODO


<br><br>[- BACK TO TOP -](#contents)

---
---
<br>
<br>


## [__Node.js & Npm__](#)

__This section is about:__<br>
_How to download packages to automate your work.._

 _Extensive node.js tutorial can be found [here](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)._<br>
 _List of build-in node.js modules [here](https://www.w3schools.com/nodejs/ref_modules.asp)._

<br>

### Node.js

__Node__ is a lightweight runtime environment for JavaScript. There are two main usage areas for node: as a backend server or as a development tool on local machines. Server side Node.js  is used for serving data and powering apps and sites. When using as a development tool we automate and speed up building of our apps and sites. On our local computers Node.js can execute programs written in java script to perform various task that help us with development. JavaScript is originally a scrip language but Node.js extends JavaScript to be a "real" programming language. 


- With this cmd command you can check if node is installed on your machine: <br>
`node -v` <br><br>


- To execute a java script file with node use following cmd command: <br>
`node FilenameToRun.js` <br><br>


- JavaScript (.js) node-files usually include modules/packages that are either downloaded (and stores in `node_modules` in our project root) or are built-in in node by default. Following line in top of the file includes a default `http` module that can be used to make request through HTTP.<br>
`var http = require('http');` <br>...<br>
#TODO add more usefull functions




### Npm
__Node Package Manager__ (NPM) comes with node.js by default. NPM is a tool, package manager, that is used to search for/download and handle packages. Those packages are JavaScript programs written by others performing tasks that automate various things and save us a lot od development time. Packages are downloaded through npm can be JavaScript tools used in development but also code that we need when publishing our code to browser (ie loadash or normalize.css). 

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


<br>

### [Webpack devServer](#)

__Webpack devServer__ (webpack-dev-server) is a webpack npm package that is started from command line, usually by running a NPM-script. When running it can automatically inject code to running browser(s) instantly when tracked project files (i.e HTML, CSS and JS) are saved. The injection is done is such a way that browser do not perform 'hard refresh' and keeps its state. This is VERY convenient when developing and CSS styling.The server can also be reached from several browsers on the same wify network. It is very popular dev server to use when building and styling your web app. In order to get it work some configurations need to be done and some npm packaged downloaded. Following is described what need to be done to gest started with webpack DevServer:

- Make sure webpack is installed

- Install npm packages:<br>
`npm install -D webpack-dev-server css-loader style-loader postcss-loader`


- In projects [package.json](#packagejson-file) add new script to run from command line. Add in script section: <br>
`"devServer": "webpack-dev-server",`

- Create [webpack.config.js](#webpackconfigjs-file) file in the root of your repo:<br>
`mkdir webpack.config.js`

const postCSSPlugins = [
    `list here all downloaded postCSS plugins you use `
]


/* Telling webpack that that all files ending with .css shall be handled by following packages*/ 

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


>\>Text 1 _`<br>`_ <br>
>\>Text 2 on the second line

- \- ul item &nbsp; _(or use '1.' for ol)_
- \- ul item
    - \- ul subitem a (tabbed)



|Name|Email|
|---|---|
|Peter|peter@devoote.se|
|Martin Czerwinski|martin@cmq.se|
```
|Name|Email|
|---|---|
|Peter|peter@devoote.se|
|Martin Czerwinski|martin@cmq.se|
```

<br>[- BACK TO TOP -](#contents)

---
---
<br>
<br>


# CODE EFFECTIVELY
## CSS

Usually in body:

font-family - 'Roboto' or sans-serif är några
color - color of the text ie #333 is dark gray
.img max-width: 100%  - only images that are larger than screen are scaled down to fit screen width.

### Center a text on a div-box/img
- On parent set: position:relative
- On element we center set: position:absolute, _(this will take the element out of normal flow)_
<br>Horizontal center: width:100% & text-align:center
<br>Vertical center: top:0 & left:0 & transform: translateY(-50%) - _(moves up 50% of its own height)_ 


- Style a box with frame and nice text ?? called title???

-	Center a div within div

-	Center texts within a image



# Main HTML flow & HTML5 Structure

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
-	Centering a block or an image vertically'

sdsa






