# Modern Web Development - The Cheat-Sheet
>- [__Introduction__  <br> What can I find here?](#introduction)
>- [__GIT & Cmd__ <br>_Source control and github and some useful cmd commands._](#git-&-cmd)
>- [__VSCode__  <br> _How to configure your favorite code editor, emmet commands and some useful extensions to start with._](#vscode)
>   - [_Most useful VSCode extensions_](#Most-useful-VSCode-extensions)
>   - [_EMMET commands_](#emmet)
>- [___Node.js & Npm___ &nbsp;_How to download packages and automate the workflow._](#nodejs-&-npm)
>   - [Installing](#how-to-install-npm-packages?)
>   - [_NPM Packages_](#useful-npm-packages)
>   - [_package.json_](#packagejson)
>- [__Webpack__ &nbsp; _Bundle your files and create build/automation of files._](#webpack)
>   - [_Webpack Server with PostCSS_](#webpack-server-with-postcss)
>   - [_webpack.config.js_](#webpackconfigjs)
>- [__Markdown__ _(Style text in .md files, cheatsheet)_](#markdown)



# Introduction            
Following blog is a short guides to modern web development technologies including notes, summaries and cheatsheet. Target audience for this blog are developers that need a reminder/cheatsheet to fresh up some terms and get a starting point to.

<br/>

[Back to top](#contents)

---
<br>



# __GIT & Cmd__             
Git => most popular version control system for corporation and tracking changes in source-code. Memorize some commands to run those from command window for best practice. 

Repository = Repo = Project <br>
Commit = Save to git history <br>
Branch = ... <br>
Working Directory = All you files that you currently "checked out" and work on = All files you see and can edit for a certain repo <br>
Check-out = switching between different versions of code (switching branches or ) <br>

- Install it on your computer (or check if installed) with command: <br>
`git --version`
 
>	_Note! In VSCode's "Command Palette" (open it with `CTRL-SHIFT-P`) you can run all GIT commands from a list, instead writing memories command in the terminal. VSCode do also have a Git GUI with buttons to simply som common tasks. Still good to know syntax of commands to run them from command line when needed!_

 ### Here come some of the most common git commands to run from command window:
 Some  [tutorial can be found: HERE](https://www.youtube.com/watch?v=HVsySz-h9r4) and [HERE](https://www.youtube.com/watch?v=FdZecVxzJbk)

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
<br>

|Useful cmd commands | |
|:---|:---|
|pwd|Writes out current location|
|dir|Lists directories and files in current location|
|cd 'path'|Changes 'path' location. 'cd..' changes back|
|mkdir 'new_dir_name'|Creates a new directory in current location|
|touch 'filename_with_extension'|Creates a new file in current location|
|xxx|__TODO__|


<br/>

[Back to top](#contents)  

---
<br>



# VSCode
 VSCode is a lightweight code editor that comes with built-in support for JavaScript, TypeScript, Emmet, IntelliSense, Node.js and has lots of good external extensions available in an easy way. Out-of-the-box support for EMMET snippets and Intellisense gets you started right away with your WEB project. IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS and Less. VSCode has also built in support for Git. VSCode supports word based completions for any programming language. <br> [Introduction Videos: HERE](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code)

 __TODO__
 Write something what is missing by default and good to know....

## Most useful VSCode extensions


|| |
|---|---|
|Auto-Open Markdown Preview | Opens a preview window on the side for preview of selected .mp file|
|Code Spell Checker|Spelling checker and autocorrect for source files|
|Git History|TODO|
|Git Lens|TODO|

<br>

## EMMET
EMMET generate code from snippets for and is enabled by default for HTML, CSS, SASS in VSCode. 

__TODO__ what does it not support?

Best for HTML and CSS only?



|EMMET SNIPPETS|Def. in VSCode|Cust.|Output|
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

<br/>

[>Back to top](#contents)

---
<br>


## Node.js & Npm

#### Node
Node is a lightweight runtime environment for JavaScript. There are two main usage areas for node: as a backend server or as a development tool on local machines. Server side Node.js  is used for serving data and powering apps and sites. When using as a development tool we automate and speed up building of our apps and sites. On our local computers Node.js can execute programs written in java script to perform various task that help us with development. JavaScript is originally a scrip language but Node.js extends JavaScript to be a "real" programming language. <br> [Extensive Node.js tutorial can be found HERE](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)

Command that checks if or what version is installed on the machine: <br>
`node -v` <br><br>
Command to run a file written in JavaScript by node.js: <br>
`node filename.js` <br><br>
JS "node-files" can must include modules/packages that are either downloaded (and stores in `node_modules` in our project root), or are built-in in node by default. [List of build-in Node.js modules HERE ](https://www.w3schools.com/nodejs/ref_modules.asp).<br>
`var http = require('http');` <br>.<br>
Example:
__TODO__
 
#### NPM
Node Package Manager (NPM) comes with node.js by default. NPM is a tool, package manager, that is used to search for/download and handle packages. Those packages are JavaScript programs written by others performing tasks that automate various things and save us a lot od development time. Packages are downloaded through npm can be JavaScript tools used in development but also code that we need when publishing our code to browser (ie loadash or normalize.css). 

-	Always initiate npm in the root of your local repo. This will auto-create `package.json` file: <br>
`npm init -y`  


#### How to install npm packages?

Downloaded packages´ name and version number are save in `package.json` file as dependency or development dependency. The packages themselves are stored in "node_modules" directory in the root that is auto-created with install

Those packages that contain js script or css that are used when generating our final files for release that are provided to browse must be saved with: <br> 
`npm i 'package_name'` &nbsp;&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;&nbsp; `npm install 'package_name'`

Many packages are just used during development to enhance and speed up development workflows anf those do not need to be present in the released version. Those packages we install with --save-dev option or -D:<br>
 `npm install 'package_name' --save-dev` &nbsp;&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;&nbsp; `npm i -D 'package_name'`

 Note! The whole directory where packages are saved, "node_modules", is usually excluded from GIT. Only `package.json` that contain list of packages our project depend on is under source control. This is because when/if the `node_modules` with all modules are missing, then npm automatically installs the needed packages. 
 <br>
 <br>
 All dependency files in node_modules can be downloaded with command:<br>
 `npm install`

## __package.json file__
A very important file in the repo root that is autogenerated when we run npm -init. Specially important if you aim to publish your code as a package. For example name and version that will be required when publishing are set there. Description/keywords helps people discover your package as it’s listed in npm search.  The “scripts” property is a dictionary containing script commands that are run at various times in the life cycle of your development. An example of default file this file might look for a standard web

_package.json_
```
{
  "name": "travel-site",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
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


#### Useful NPM Packages

|npm install|flag|What for?|
|:---|:---|:---|
|normalize.css<br>loadash||CSS package for resetting all browsers to same state <br> loadash???|
|webpack<br>webpack-cli<br>webpack-dev-server|-D|Webpack functionality. Bundling & automation<br>Server that auto-injects (hot) CSS/JS into chrome at runtime|
|<br>postcss-loader<br>css-loader<br>style-loader|-D|Webpack modules:<br>For loading postcss modules.<br>For importing css to js files.<br>Get browser to read CSS from JS files.|
|<br>postcss-import<br>postcss-simple-vars<br>postcss-nested<br>autoprefixer  |-D|PostCSS modules:<br>For importing code to CSS & NPM-modules files <br> For variables in CSS <br> For nesting in CSS<br>For adding autoprefixes|
|xxx|||
|yyy|||

<br/>

[>Back to top](#contents)

---
<br>


## Webpack

##### Webpack is a bundler and dependencies manager and "build" tool for all assets within an web app. It handles files such ass javascript, css and graphics. It can automatically transform and autogenerate output files  from several resources, takes dependencies into considerations. For example it build one js file from several files written in ES6 and one css file from several sass files. Through its packages it can perform a variety of tasks. It is a standard to use in big web projects as it streamlines the workflow. Without it would be very hard to import and add all script dependencies manually. We pack simply and effective packages and bundles all  sort of files we work during development  just into a few optimized files used by browser.

[A tutorial HERE](https://www.youtube.com/watch?v=lziuNMk_8eQ)

##### You usually run in development mode as it is faster and when only in production mode in end as it is slower to pack and minify everything. In dev mode we do things a bit differently to speed up development.for example we load CSS though javascript to apply new CSS on the fly to the browser during development.


## __webpack.config.js__
```
const path = require('path');
const postCSSPlugins = [
	require('autoprefixer'),
	require('postcss-nested'),
	require('postcss-simple-vars')
];

_module.exports = {
	entry: './app/assets/scripts/App.js',	/* Main .js file to load that contains all dependencies */
	output: {
		filename: 'bundeld.js',	/* Name of the autogenerated file with all dependencies bundled together */
		path: path.resolve(__dirname,'app')	/* Directory where to put the autogenerated file  */
	},
	module: {
		rules: [
			{
				test: /\.css$/i, /* Only if file ends in .css */
				use: ['style-loader','css-loader', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
			}
		]
	},
	devServer: { /* DevServer will watch for changes in contentBase directory and inject those to the running browser(s) */
		contentBase: path.join(__dirname, 'app'),	/* Base folder where our index.html file lives */
		hot: true, /* Auto inject at save. The main entry point .js file must contain following: if (module.hot) module.hot.accept(); */
		port: 3000
	},
	mode: 'development' 
}
```

#### _Webpack Dev Server with PostCSS_
Webpack server can inject js and CSS into a running browser without reloading the page. This is very convenient when developing, therefore it is very popular do use in developing phase. In order to get it work following steps need to configured:

- Install npm packages: `css-loader` | `style-loader` | `postcss-loader` | `webpack-dev-server`

The first two are for bundling CSS into our output .js file, as due to this we can inject css-changes to browser without reloading it.

- In `package-json` add new rule to run the server: 
```
"dev": "webpack-dev-server"
```

- In `webpack.config.js`add:
```
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



<br/>

[>Back to top](#contents)

---
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

<br/>

[>Back to top](#contents)

---
<br>



CSS

Usually in body:

font-family - 'Roboto' or sans-serif är några
color - color of the text ie #333 is dark gray
.img max-width: 100%  - only images that are larger than screen are scaled down to fit screen width.

### Center a text on a div-box/img
- On parent set: position:relative
- On element we center set: position:absolute, _(this will take the element out of normal flow)_
<br>Horizontal center: width:100% & text-align:center
<br>Vertical center: top:0 & left:0 & transform: translateY(-50%) - _(moves up 50% of its own height)_ 


