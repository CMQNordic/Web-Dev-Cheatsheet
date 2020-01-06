_Guide, notes, cheatsheets and project templates to quickly get started and look up information for commonly used tasks. Some cheatsheet for common commands._

# Contents
>- [__Introduction__](#introduction)
>- [__GIT & Cmd__ &nbsp;&nbsp; _Source control and github and some useful cmd commands._](#git-&-cmd)
>- [__VSCode__  &nbsp; _How to configure your code editor, emmet commands and some useful extensions._](#vscode)
>   - [_VSCode Extensions_](#extensions)
>   - [_EMMET_](#emmet)
>- [___Node.js & Npm___ &nbsp;_How to download packages and automate the workflow._](#nodejs-&-npm)
>   - [Installing](#how-to-install-npm-packages?)
>   - [_NPM Packages_](#useful-npm-packages)
>   - [_package.json_](#packagejson)
>- [__Webpack__ &nbsp; _Bundle your files and create build/automation of files._](#webpack)
>   - [_Webpack Server with PostCSS_](#webpack-server-with-postcss)
>   - [_webpack.config.js_](#webpackconfigjs)
>- [__Markdown__ _(Style text in .md files, cheatsheet)_](#markdown)



## __Introduction__             
##### Some introduction text here **TODO**

<br/>

[Back to top](#contents)

---
<br>



# __GIT & CMD__             
Git is the most popular version-control system used for tracking changes in source-code. Install it on your computer (or check if you have it installed) with cmd command: <br>
`git --version`

 Here come some of the most common git-commands to run from command window. Note that in VScode there is a __Command Palette__ (open with `CTRL-SHIT_P`) where you can choose all GIT commands from a list and do not want to write command in the terminal. VSCode do also have a Git-GUI with buttons to make it easier to work with git. Still good to know syntax of commands to run them from command line when needed!  

- Configure git on your local machine, telling who you are for committing changes. Set email, user name with:

 `git config --global user.name "Your Name"` <br>
 `git config --global user.email  your@email.com` <br>

- Create a local repo by navigating to the folder in cmd window that you wits to become a repo. Then either create a new repo from scratch with:

`git init` (master is your local_branch_name by default)

##### ... or clone a repo from web by:

`git clone http://url_to_repo_to_copy.git` (master is your local_branch_name by default)

##### Now in order to push the local repo to remote repo you must set a remote_name/remote_url to the location of your remote repo by:

`git remote -v` <br>
`git remote set-url origin http://url_to_your_online_repo.git` (remote_name is 'origin')

##### Work on files locally. When done stage and commit with:
`git status`  _(lists all files to stage/commit)_ <br>
`git add -a`  _(stages/prepares ALL changes)_ <br>
`git commit -m 'description'`

##### To upload your local changes to remote repo firs pull from remote (there might be changed on remote on same place you changed then there might be conflicts that is best to resolve locally and test locally first). Then push everything to remote repo:

`git pull origin master` (git pull 'remote_name' 'local_branch_name') <br>
`git push origin master` (git push  'remote_name' 'local_branch_name')<br> 

##### It is common that you work on your local brach so that you do not work toward the main master. After you are done there then the changes can be merged/commited to master. To create a new branch and work toward it you check out by:

`git checkout -b 'myLockalBranch'`

<br>

|Usefull cmd | |
|:---|:---|
|pwd|Writes out current location|
|dir|Lists directories and files in current location|
|cd 'path'|Changes 'path' location. 'cd..' changes back|
|mkdir 'new_dir_name'|creates a new directory in current location|
|touch 'filename_with_extension'|creates a new file in current location|
|xxx|desription|


<br/>

[Back to top](#contents)  

---
<br>



# VSCode
##### VSCode is a lightweight code editor that comes with built-in support for JavaScript, TypeScript, Emmet, IntelliSense, Node.js and has lots of good extensions available. Out-of-the-box support for EMMET snippets and Intellisense increases development speed and gets you started right away. IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS and Less. VSCode supports word based completions for any programming language. VSCode has built in support for Git. Introduction Videos: [HERE](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code)

## Extensions


|VSCODE EXTENSIONS| the most usefull ones|
|---|---|
|Auto-Open Markdown Preview | Opens a preview window on the side for preview of selected .mp file|
|Code Spell Checker|Spelling checker and autocorrect for source files|
|Git History|TODO|
|Git Lens|TODO|

<br>

## EMMET




|EMMET SNIPPETS|Def. in VSCode|Cust.|Output|
|:---|:---|:---|:---|
|New html doc| ! |   |   |
|cComment| c |   |  <!-- --> |
|Link to css| link:css |   |   |
|Include js script| script:src |   |   |
|Paragraph| p{text} |p.myClass{paragraph text}   |   |
|Div| div | .btnClass.__btnClass#ElemId |   |
|List| ul>li*3 | Ul.navigation>li#item$.*3{item$}  |  |
|Form|  | div>p+form:post>input:text+input:email+input:submit  |  |
|Section Article|  | section>(article.containter>h1+p+button)*3 |  |
|Other|  | nav>.container>ul.navigation#mainMenu>li*3#item${list item $}  | |
|Other| |.columns>(.column>.box>h2{I am a box})+(.column>.box>h3{I am another box})|

<br/>

[>Back to top](#contents)

---
<br>


## Node.js & Npm

#### Node
##### Node is a lightweight runtime environment for JavaScript. There are two main usage fields for node; as a backend server or as a development tool om local machines. On server-side Node.js  is used for serving data and powering apps and sites. The other field of usage for Node.js is as a development tool we use when we build our apps and sites. There on our local computers Node.js can execute programs written in JavaScript to perform a various task that help us with development. Even though JavaScript is originally a scrip language, Node.js extends JavaScript to be a "real" programming language. [Extensive Node.js tutorial can be found HERE](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)

`node -v` cmd command that checks if and what version is installed on the machine <br>
`node filename.js` cmd command to run a file written in JavaScript in node <br>
`var http = require('http');`in node-files we must include modules/packages that are either downloaded (and stores in `node_modules` in our epo root) or are built-in in node by default. [List of build-in Node.js modules HERE ](https://www.w3schools.com/nodejs/ref_modules.asp)
 
#### NPM
##### Node.js, when installed, includes Node Package Manager (NPM) by default. NPM is a tool that is used to search for, download and handle mode modules/packages. Those packages are JavaScript programs written by others performing tasks that automate things and save us a lot od development time. Packages we download through npm can be JavaScript programs used in development but also code and css that we need when publishing our code to browser (ie loadash or normilize.css). Always initiate npm in the root of your local repo. 

`npm init -y`  This will auto-create `package.json` file. 


#### How to install npm packages?

Downloaded packages´ name and version number are save in `package.json` file as dependency or development dependency. The packages themselves are stored in "node_modules" directory in the root that is auto-created with install

Those packages that contain js script or css that are used when generating our final files for release that are provided to browse must be saved with: <br> 
`npm i 'package_name'` &nbsp;&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;&nbsp; `npm install 'package_name'`

Many packages are just used during development to enhance and speed up development workflows anf those do not need to be present in the released version. Those packages we install with --save-dev option or -D:<br>
 `__npm i - 'package_name'` &nbsp;&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;&nbsp; `npm install \-\-save-dev 'package_name'`

 Note that the whole "node_modules" directory is usually excluded from GIT. Only `package.json` is under source control. This is because when the `node_modules` with all modules are missing, then npm automatically installs the packages. All dependency files in `node_modules` can be downloaded with command:

 `npm install`

### _package.json_
A very important file in the repo root. Specially important if you aim to publish your code as a package. There is for example set the name and version will be required when publishing. Description/keywords helps people discover your package, as it’s listed in npm search. You should also specify a license for your package. The main field is a module ID that is the primary entry point to your program, if your package is named foo, and a user installs it, and then does require("foo"), then your main module’s exports object will be returned. The “scripts” property is a dictionary containing script commands that are run at various times in the life cycle of your development. An example of default file this file might look for a standard web

#### _package.json_
```
file here TODO
```


#### Useful NPM Packages

|npm install|flag|What for?|
|:---|:---|:---|
|normalize.css<br>loadash||CSS package for resetting all browsers to same state <br> loadash???|
|webpack<br>webpack-cli<br>webpack-dev-server|-D|Webpack functionality. Bundling & automation<br>Server that auto-injects (hot) CSS/JS into chrome at runtime|
|postcss-loader<br>css-loader<br>style-loader|-D|For loading postcss modules<br>For importing css to js files <br> Get browser to read CSS from JS files.|
|autoprefixer<br>postcss-simple-vars<br>postcss-nested  |-D|For adding autoprefixes <br> For variables in CSS <br> For nesting in CSS|
|xxx|||
|yyy|||

<br/>

[>Back to top](#contents)

---
<br>


## Webpack

##### Webpack is a bundler and dependencies manager and "build" tool for all assets within an web app. It handles files such ass javascript, css and graphics. It can automatically transform and autogenerate output files  from several resources, takes dependencies into considerations. For example it build one js file from several files written in ES6 and one css file from several sass files. Through its packages it can perform a variety of tasks. It is a standard to use in big web projects as it streamlines the workflow. Without it would be very hard to import and add all script dependencies manually. We pack simply and effective packages and bundles all  sort of files we work during development  just into a few optimized files used by browser.

##### You usually run in development mode as it is faster and when only in production mode in end as it is slower to pack and minify everything. In dev mode we do things a bit differently to speed up development.for example we load CSS though javascript to apply new CSS on the fly to the browser during development.


#### _webpack.config.js_
```
File here TODO
```

#### _Webpack Server with PostCSS_
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


