## ___Web&nbsp;Development -&nbsp;Ultimate&nbsp;Reference&nbsp;Guide&nbsp;-___
---
By&nbsp;Martin&nbsp;Czerwinski [CMQ&nbsp;Nordic&nbsp;AB](www.cmq.se "www.cmq.se (Martin Czerwinski @ CMQ Nordic AB)")®&nbsp;March&nbsp;2020&nbsp;

---

This is a __reference guide__,an __compact tutorial__ or a __cheat-sheet__ that explains basics of web development. Starting from tools to some of the solutions to most basic problems.

Bookmark this page, share it and feel free to [__reach out to us__](www.cmq.se "Contact us!") with questions, comments or requests for assignments!

_Prerequisites: Some HTML & CSS skills._

---

#### __TABLE OF CONTENT__

 ► __Technologies & Tools__
  - [__Visual Studio Code__](#visual-studio-code)
    - [What is VSCode and what is built-in?](#what-is-vscode)<br>
  	[Customization](#recommended-customization-of-vscode) ◦ [Navigation](#navigation-in-vscode) ◦ [Terminal](#terminal-in-vscode) ◦ [Shortcuts](#useful-shortcuts-in-vscode) ◦ [Extensions](#useful-extensions-in-vscode) ◦ [EMMET](#emmet-snippets-in-vscode)
  - Node.js & Npm
    - [What is Node.js and Npm used for?](#nodejs-&-npm)
  	- [Node.js](#install-node.js-and-execute-programs) ◦ [Node.js modules](#useful-node.js-modules)
	- [Npm](#install-npm-packages) ◦ [Npm packages](#useful-npm-packages)
	- [_"package.json"_ file](#packagejson-file)
  - Webpack
    - [What is Webpack and what is it used for?](#webpack)
	- [Bundling with PostCSS](#bundling-with-postcss) ◦ [Webpack Dev Server](#webpack-dev-server)
	- [_"webpack.config.js"_ file](#webpackconfigjs-file) 
  - Markdown
    - [Why markdown?](#markdown) 
	- [Markdown syntax](#markdown-syntax) 
  
► __HTML, CSS and JS__
- [__CODE EFFECTIVELY__](#code-effectively)
	- [__CSS__](#css)
		- [Commonly performed tasks](#commonly-performed-tasks)
		- [Center a text on a div-box/img](#center-a-text-on-a-div-boximg)
		- [__BEM__](#bem)
	- [HTML](#html)
- [CENTERING THINGS](#centering-things)
- [Screens and IMAGES](#screens-and-images)
	- [__Article & Section__](#article--section)
	- [Content for web](#content-for-web)
	- [SEO](#seo)

<br>

---

<p align=right><a id="visual-studio-code" align=right href="#table-of-content">↩ Back To Top</a></p>

## [__Visual Studio Code__]()

|Content||
|---|---|
|[What is VSCode and what is built-in?](#what-is-vscode)| VSCode - Code editor |
|[Customization of VSCode](#recommended-customization-of-vscode)| Keyboard Shortcuts |
|[Navigation in VSCode](#navigation-in-vscode)| Find things |
|[Terminal in VSCode](#terminal-in-vscode)| Integrated Terminal - Logs - Errors |
|[Useful Shortcuts in VSCode](#useful-shortcuts-in-vscode)| Fast navigation |
|[Useful Extensions in VSCode](#useful-extensions-in-vscode)| Extensions to install |
|[EMMET Snippets in VSCode](#emmet-snippets-in-vscode)| HTML & CSS short commands |


__Recommended tutorials:__<br>
Good educational VSCode videos can be found [here](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code). 

<br>
<p align=right><a id="what-is-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

__[What is VSCode and what is built-in?]()__

[VSCode](https://code.visualstudio.com/) is a vary popular, lightweight and free code editor from Microsoft that comes with a variety of handy built-in features. Open the directory you are currently in by writing following in terminal window:

 __`code .`__

_Out of the box_ features in VSCode:

 - __Node.js & Npm__: Build in runtime environment for JavaScript with corresponding package manager.
 - __JavaScript:__ Supported language used for web development.
 - __TypeScript__: Supported language that adds strict typing syntax to JavaScript.
 - __Emmet__: Short text snippets that autogenerate pieces of HTML or CSS code.
 - __IntelliSense__: Editing features including code completion, parameter info and quick lookups.
 - __Extensions:__ Integrated marketplace for a large variety of extensions that expand functionality of VSCode.
- __GIT:__  Integrated support for Git with handy graphical interface for most common functions.
- __Multi-Cursor editing:__ Allows you to edit multiple parts of the documents at once.
- __Debugging, Code navigation__: Possible to debug your code easily.

Install it from from [here](https://code.visualstudio.com/download).

<br>
<p align=right><a id="recommended-customization-of-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

### __[Customization of VSCode]()__

VsCode have an integrated terminal window that is a very important tool in your daily work as a web developer.

We recommend to manually customize some shortcuts related to the terminal so that you can easily open and focus terminal window, scroll in it and resize the terminal window - all without lifting your fingers from the keyboard.

Search for following string in _`Settings -> Keyboard Shortcuts`_  and set following:
|Search&nbsp;for&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Set|
|---|:---|
|"Terminal: Scroll To Bottom",<br> "Toggle Integrated Terminal",<br> "Focus Terminal"|`Ctrl+Ö`|
|"Kill Active Instance"|`Ctrl+K`|
|"Terminal: Scroll Up (Line)"|`Ctrl+UpArrow`&nbsp;and<br>set "When" to `terminalFocus`|
|"Terminal: Scroll Down (Line)"|`Ctrl+DownArrow`&nbsp;and<br>set "When" to `terminalFocus`|
|"Terminal: Resize Pane Left"|`Ctrl+LeftArrow`&nbsp;and<br>set "When" to `terminalFocus`|
|"Terminal: Resize Pane Right"|`Ctrl+RightArrow`&nbsp;and<br>set "When" to `terminalFocus`|

<br>
<p align=right><a id="navigation-in-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

### __[Navigation in VSCode]()__

Navigation in VSCode... __TODO__

 __Command Palette__ is a very handy tool where you can search for any command, setting or functionality within VSCode. 

__Add Folder To Workspace__ makes it possible to have several projects open in same workspace.





<br>
<p align=right><a id="terminal-in-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

### __[Terminal in VSCode]()__

__VSCode__ comes with an __integrated terminal window__ - which is a very handy and time-saving. Terminal window opens pointing directly to your working directory. It is also possible to switch between _shells_ that power the terminal from a drop down in the right-' upper corner.

Changing to _default shell_ of your choice can be done by opening _`Command Palette (Ctrl+Shift+P) -> Terminal: Select Default Shell`_. There you will get a list of available choices for you operating system where "Git Bash" (the default shell that we use) is one of the options.

If you run lots of git commands from command line we recommend you to move the terminal window to the right of your screen. Do this by right-clicking the top bar in terminal window and choosing_ Move Panel Right_. This is very handy to have it to the right because often output is spread on many vertical lines and we can see the results without need of scrolling.

<br>
<p align=right><a id="useful-shortcuts-in-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

### __[Useful Shortcuts in VSCode]()__

Shortcut settings can be viewed and edited from _`Settings` -> `Keyboard Shortcuts`_. Online list of shortcuts can be found [here](https://docs.microsoft.com/en-us/visualstudio/ide/default-keyboard-shortcuts-for-frequently-used-commands-in-visual-studio?view=vs-2019). Below we list our most frequently used VSCode shortcuts that are real time saves to use:

|__NAVIGATION__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
|:---|---|
|`Ctrl+P`| __Search & Go to files...__<br>Opens __File Search__ window. Recently used on top. Use `ESC` to close it |
|`Ctrl+Shift+P`| __Search & Run commands...__<br>Opens __Command Palette__. Recently used on top. Use `ESC` to close it |
|`Ctrl+B`| __Toggle sidebar__<br>Toggles visibly of sidebar window |
|`Ctrl+⇔`| __Jump whole words__<br>Move cursor whole words right/left|
|`Ctrl+Shift+⇔⇕` |__Mass selection__<br>First press selects focused word. Next presses select sections to right/left/up/down|
| `Ctrl+D` |__Select word & multi__<br>First press selects focused word. Next presses add multi-cursor on all same words. |
| `Alt+▲▼` |__Move whole line up/down__<br>Moves whole focused/selected row up or down |
| `Alt+<mouse-click>` |__Add multi-cursors__<br>Adds extra cursor for every click |

<br>

|__CODING__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
|:---|---|
| `Ctrl+Space` | __Open intellisense__<br> Opens intellisense dialog for focused expression. Use `ESC` to close it. |
| `Alt+Shift+F`* | __Format selection__<br> *Note! Must be set in `Keyboard Shortcuts -> Format selection` |
| `Ctrl+F` | __Find & Replace in file__<br> Find all focused/selected words in file. Replace from new window. Use `ESC` to close it. |
| `Ctrl+Shift+F` | __Find & Replace in proj__<br> Find all focused/selected words in project. Replace from new window. Use `ESC` to close it. |
| `Alt+Shift+[Sel]`&nbsp; | __Group edit block__<br> Multi-cursors. Select a block of text to edit. |
| `*` |__Select matching tags__<br> *Enable by enabling `mirrorCursorOnMatchingTag` in Settings. |

<br>

|__TERMINAL__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
|:---|---|
| `Ctrl+Ö*`  | __Open & Focus__<br> Creates new terminal or focuses cursor when run in terminal window.<br>*Must be set in "Keyboard Shortcuts" [read more here](#recommended-customization-of-vscode) |
| `Ctrl+L` |__Clear window__<br> Clear focused terminal window |
| `Ctrl+K*` |__Kill terminal__<br> Kills current terminal and if last hides the window.<br>*Must be set in "Keyboard Shortcuts" [read more here](#recommended-customization-of-vscode) |
| `Ctrl+J`  |__Hide terminal__<br> Hides terminal window without killing terminal(s) |
| `Ctrl+▲▼*`   |__Scroll Up or Down__<br> Scroll up od down in focused terminal window. <br>*Must be set in "Keyboard Shortcuts" [read more here](#recommended-customization-of-vscode) |
| `Ctrl+◀▶*` |__Enlarge or Shrink__<br> Enlarge or shrinks focused terminal window. <br>*Must be set in "Keyboard Shortcuts" [read more here](#recommended-customization-of-vscode) |

<br>
<p align=right><a id="useful-extensions-in-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

### __[Useful Extensions in VSCode]()__

More and more is getting integrated into VSCode for each release but here are some good extensions that we recommend at the writing moment. You can search online for [VSCode Marketplace](https://marketplace.visualstudio.com/) for extensions or directly from VSCode.

|Extension&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
|:---|:---|
| `VSCode Icons` | A set of nice icons shown in explorer bar in VSCode UI that makes navigating and finding a special file type easier. |
| `Rainbow Brackets` |Provides different colors for round, square and the squiggly brackets so those ar easier to distinguish |
| `Code Spell Checker` | Check for spelling mistakes and proposes corrections |
| `Live Server` | A lightweight local dev server with live auto-reload when HTML & CSS files are saved. Easy one-click to run |
| `Browser Preview` | Opens the debug server as a teb in your  VSCode so you do not need to navigate to separate browser window. |
| `Git Graph` | Visualizes branches history in separate window nicely. Shows launching "Git Graph" button on the status bar  |
| `Git Lens` | Extensive Git insights with own sidebar. Good file history comparison |
| `Git History` | This tool draws nice file history diagrams |
| `Markdown All in One` | Enable this when working with Markdown. Export to HTML, table of contents. |
| `Markdown Shortcuts` | Enable this when working with Markdown. Icons in nav bar and right on .md file brings a list with markdown commands to |
| `IntelliSense for CSS class names in HTML` | Autocompletion for CSS class definitions. CSS referenced through link in HTML |
| `Quokka` | ... |
| `Vue` | Syntax highlight for Vue.js framework |

<br>
<p align=right><a id="emmet-snippets-in-vscode" align=right href="#table-of-content">↩ Back To Top</a></p>

### __[EMMET Snippets in VSCode]()__


EMMET snippets autogenerate full code blocks code from short text snippets.  [Here](https://docs.emmet.io/cheat-sheet/) is a handy cheat-sheet with all EMMET commands. Read more about EMMET snippets [here](https://docs.emmet.io/).

|HTML&nbsp;CODE|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|:---|:---|
|__New doc__<br>__`!`__|_`New HTML doc structure`_|
|__Comment__<br>__`c`__|`<!-- -->`|
|__CSS from file__<br>__`link:css`__|`<link rel="stylesheet" href="style.css">`|
|__JS from file__<br>__`script:src`__|`<script src="app.js"></script>`|
|__Dummy texts__<br>__`lorem4`__|_`Four random lorem words`_|
|__Paragraph__<br>__`p.hero__title--orange{Hi}`__|`<p class="hero__title--orange">Hi</p>`|
|__Div__<br>__`.nav__item#nav_item-1{Hi}`__|`<div class="nav__item" id="nav_item-1">Hi</div>`|
|__Menu__<br>__`ul.nav>(li.nav_row>a#nav_item-\${I\$})*2`__|`<ul class="nav">`<br>&nbsp;&nbsp;&nbsp;`<li class="nav__row"><a href="" id="nav_item-1">I1</a></li>`<br>&nbsp;&nbsp;&nbsp;`<li class="nav__row"><a href="" id="nav_item-2">I2</a></li>`<br>`</ul>`|
|__Form__<br>__`div>p+`<br>`form:post>input:text+input:email+input:submit`__|`<div>`<br>&nbsp;&nbsp;&nbsp;&nbsp;`<p></p>`<br>&nbsp;&nbsp;&nbsp;&nbsp;`<form action="" method="post">`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<input type="text" id="" id="">`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<input type="email" id="" id="">`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<input type="submit" value="">`<br>&nbsp;&nbsp;&nbsp;&nbsp;`</form>`<br>`</div>`|
|__Article__<br>__`section.sect>(article.wrap>h1.s_t+p.s_d+button.s_b)*1`__|`<section class="sect">`<br>&nbsp;&nbsp;&nbsp;&nbsp;`<article class="wrap">`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<h1 class="s_t"></h1>`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<p class="s_d"></p>`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<button class="s_b"></button>`<br>&nbsp;&nbsp;&nbsp;&nbsp;`</article>`<br>`</section>`|
|<br>__CSS&nbsp;CODE__<br><br>||
| __`w100p`__ |`width: 100%;`|
| __`h100e`__ |`height: 100em;`|
| __`m10p20px10e20p`__ |`margin: 10% 20px 10em 20%;`|
| __`p10-20-10-20`__ |`padding: 10px 20px 10px 20px;`|
| __`pos`__ |`position: relative;`|
| __`bg`__ |`background: #000;`|
| __`bc`__ |`background-color: #fff;`|
| __`bd`__ | `border: 1px solid #000;` |
| __`bdrs8`__ | `border-radius: 8px;` |
| __`ff+fw400+fs20`__ |`font-family: serif;`<br>`font-weight: 400;`<br>`font-style: 20px;` |


<br>

## [__Node.js & Npm__](#)

### [__What is Node.js and npm used for?__](#)

### Node.js is a lightweight runtime environment for JavaScript. Npm is a tool included in node.js that makes is possible to download and store packages that Node.ja later can run and use. Npm and Node.ja can automate lots of our work and speed up our development time significantly. Extensive node.js tutorial can be found [HERE](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm). Typescript tutorial can be found [HERE](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d). List of modules/packages build-in in node.js can be listed [HERE](https://www.w3schools.com/nodejs/ref_modules.asp).

### [__Node.js__](#)

There are two main usage areas for Node.js. One is as a backend server that execute javascript. Other one is as a development/automation tool used on our computers that we work with our development on. Server-side node is used for serving data and powering apps and sites. When using it as a development tool we can automate common tasks and speed up building of our apps and sites. 

Node.js can execute programs written in JavaScript. Originally JavaScript is a scripting language but Node.js "extends" JavaScript to be a "real" programming language. Note.js unfortunately do not understand TypeScript but there is a nmp package (called `typescript`) that can automatically transform our typescript (.ts) files to javascript (.js) files.


#### [Install Node.js and execute programs](#)

- Following command check if node is __installed__ on your machine.If not just google and install it. <br>
`node -v` 

- To __execute__ a java script file with node use following cmd command: <br>
`node anyFileToRun.js` 

>	JavaScript programs that is run by node.js usually include (require) packages that are either downloaded though npm (and stored in root folder `node_modules`) or built-in in node.js. In order to use those packages those must be "required" in top of the .js file. For example:
`var http = require('http');`.


#### [Useful Node.js modules](#)

Following are some common packages and functions that are useful and good to memorize.

|||||
|:--|:--|:--|:--|
|require(__[fs](https://nodejs.org/api/fs.html#fs_file_system)__)|access filesystem|__[writeFile](https://nodejs.org/api/all.html#fs_fs_writefile_file_data_options_callback)__(__dirname +"./[FileName]",<br> [TextToAdd],<br> function() {...})|YES|
|require(__[http](https://nodejs.org/api/http.html#http_http)__)|Access www|__[get](https://nodejs.org/api/http.html#http_http_get_url_options_callback)__(url,<br>function(resp) {<br> response.__[pipe](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)__(fs.__[createWriteStream](https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options)__([FileName])) <br>})|YES|
|require(__http__)|...|...|YES|

>	Note! Even though it is not required, it is a good practice to use ; at end of each statement. <br>
In node 'var' and 'const' are used when declaring variables. Var variables can be updated and re-declared within its scope, const variables can neither be updated nor re-declared. <br>


### [__Npm__](#)

NPM stands for Node Package Manager and comes by default with Node.js installation. NPM is a tool used to search for, download and store packages that can later be run by Node.js. NPM packages are JavaScript programs written by others performing various tasks that usually automate various things us lots of  precious time. Packages that are downloaded through npm can automate development, but also contain code that project use when auto-creating code that we later send to browser. For example [lodash](https://lodash.com/) or [normalize](http://nicolasgallagher.com/about-normalize-css/) are such a packages. 

__Install Npm packages__

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


#### [Useful NPM Packages](#)

|Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|flag|Usage|
|:---|:---|:---|
|[normalize.css](http://nicolasgallagher.com/about-normalize-css/)<br>[loadash](https://lodash.com/)||CSS package for resetting all browsers to same state. <br> Lodash is an JavaScript library to work with arrays, numbers, objects, strings, etc.|
|<br>[webpack](https://www.npmjs.com/package/webpack)<br>[webpack-cli](https://www.npmjs.com/package/webpack-cli)<br>[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)|-D|_Common Webpack functionality_<br>For bundling & automation.<br>For command line functionality<br>Dev server that auto-injects JS into chrome at runtime.|
|<br>[postcss-loader](https://www.npmjs.com/package/postcss-loader)<br>[css-loader](https://www.npmjs.com/package/css-loader)<br>[style-loader](https://www.npmjs.com/package/style-loader)|-D|_Webpack loaders (CSS)_<br>For loading postCSS modules.<br>For importing css to js files.<br>Get browser to read CSS from JS files.|
|<br>[postcss-import](https://www.npmjs.com/package/postcss-import)<br>[postcss-simple-vars](https://www.npmjs.com/package/postcss-simple-vars)<br>[postcss-nested](https://www.npmjs.com/package/postcss-nested)<br>[autoprefixer](https://www.npmjs.com/package/autoprefixer)  |-D|_PostCSS modules:_<br>For importing code to CSS & NPM-modules files <br> For variables in CSS <br> For nesting in CSS<br>For adding autoprefixes|
|xxx|||
|yyy|||
 

### [Package.json file](#)

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

<br><br>[- BACK TO TOP -](#table-of-contents)

---
---
<br><br>


## [Webpack](#)

__This section is about:__<br>
 _Bundling and auto-building your source files._

_Some good tutorial [HERE](https://www.youtube.com/watch?v=lziuNMk_8eQ)_

<br>
Webpack is a bundler and dependencies manager and our "building" tool. Simply described:


  `Webpack consumes many files that are not written in a way that browser understands (but we understand very well), and generates few minimal files (i.e. .HTML, .css and .js) that the browser can understand (but we have hard to read).`

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



### [Webpack Dev Server](#)

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
		contentBase: path.join(__dirname, 'app'),	/* Base folder where our index.HTML file lives */
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

### [Webpack.config.js file](#)

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
const devServer_ContentBase = path.join(__dirname, '/app'); /* Root of our index.HTML that devServer runs */
const devServer_HtmlFilesLocation = './app'; /* Location where HTML that shall be tracked when saved changes */
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
		contentBase: devServer_ContentBase, /* Location of index.HTML file */
		before: (app, server) => { server._watch(devServer_HtmlFilesLocation + '/**/*.HTML') }, /* For auto-reloading when a HTML file is saved */
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


<br><br>[- BACK TO TOP -](#table-of-contents)

---
---
<br>
<br>

## [__Markdown__](#)

Markdown is a lightweight markup language to style text on the web. The syntax is much simpler than HTML and originally was created for non-programmers to write easy-to-read format that could be converted directly into HTML. Markdown files are saved with extension .md and only special readers can view them i.e. GitHub readme-file-viewer or Chrome with a special plug-in. Using markdown for styling text makes it possible to view text in a nicer than simple text. VSCode have Markdown with preview build in. GitHub uses Markup to style th README.md files.

> Note! Each heading starting with `#` i.e. `## Node.js & Npm-files`, in background creates a class based on name. In case here "`nodejs-npm`". In order to internally navigate to this heading use `[Pres HERE to go to Node.js](#nodejs-npm.files)` and an internal link will be created.

>Note! When emty line is used then texts in between are part of same paragraph. But if 2+ empty lines exist then is means a new paragraph.


__Recommended VSCode Extensions__

[Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)<br>
Adds a list of toggle commands/shortcuts shown in drop-down list when right-clicking in .md file. Very convenient to toggle a selection by choosing from a list. In settings __ or _ can be chosen to use instead of  ** and *. Also on title bas GUI icons are shown for .md files, can be customized in options.

[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)<br>
Exports to HTML. Export HTML to PDF with browser (e.g. Chrome) if you want.<br>
Creates Table Of Content. Use <!-- omit in toc --> beside/above heading to ignore it.<br>
Paste (CTRL-V) a link on selected text to create a markdown link.<br>
Autocompletion of available assets with ./<br>


### [__Markdown syntax__](#)

Below we presen some Markdown syntax for most used tags. Copy it to you markdown file as it is.

__`MARKDOWN LISTS`__ 

  1. Chapter one
  2. Chapter two
     1. Subchapter one
     2. Subchapter two
  3. Chapter three
  4. Chapter four

  <br>

  - \- Chapter One
  - \- Chapter two
    - \- Subchapter one
    - \- Subchapter  two
  - \- Chapter three
  - \- Chapter four

<br>

__`MARKDOWN TEXTS`__

## \#\# H2 text
### \#\#\# H3 text
#### \#\#\#\# H4 text
##### \#\#\#\#\# H5 text

Normal text

_\_Italic text\__

__\_\_Bold text\_\___ 

~\~~~s'Striken text~~\~\~ 

$
\$
f(x)=x/5*2y
\$
$

<br>

__`MARKDOWN LINKS`__

External link: [HERE](http://www.di.se) &nbsp;&nbsp;&nbsp;  code=> &nbsp;&nbsp;&nbsp;  \[HERE\]\(http://.www.di.se\)

Internal link: [HERE](#table-of-contents) &nbsp;&nbsp;&nbsp;  code=> &nbsp;&nbsp;&nbsp; \[HERE\]\(#table-of-contents\)

<br>

__`MARKDOWN IMAGES`__

A nice picture: ![Forest](./app/CSS/assets/nature_251x201.jpg)

Code => &nbsp;&nbsp; A nice picture: \!\[Forest\]\(./app/CSS/assets/nature_251x201.jpg\)

<br>

__`MARKDOWN TEXT BLOCKS`__

This text highlighted as surrounded by ' and not formatted:<br>  `` `Unformatted highlighted <br> text <p>tHello!</p><br>` ``



```
.``` 
- Unformatted lines <br> of text ending with [Enter]
	[TAB] __Unformatted lines of text ending with__ [Enter]
- Unformatted lines of text ending with [Enter]
.```

```

```html 
```html <or javascript> <or python>

Code block - HTML formatted, autocolored [Enter]
[Enter]
<div> [Enter]
	[TAB] <h1>Header</h1> [Enter]
	[TAB] <p>formatted as HTML - code with colors</p> [Enter]
</div> [Enter]
```    .
```

<br>

__`MARKDOWN TABLES`__

|Sex|City|Name/Surname|
|---|---|---|
| Man | Dallas | Martin <br> Linn <br> [link](http://www.di.se) |
|<br> Woman <br> Man | <br> Lund <br> London|___Anna__ \<b>test\</b> <br> `Carming <br>`_ <br> 59 years|
| Man | York | Adam |

<br>

And the code =>
```
|Sex|City|Name/Surname|
|---|---|---|
| Man | Dallas | Martin <br> Linn <br> [link](http://www.di.se) |
|<br> Woman <br> Man | <br> Lund <br> London|___Anna__ \<b>test\</b> <br> `Carming <br>`_ <br> 59 years|
| Man | York | Adam |
```

```
Note! you can fill Title lables with &nbsp; in order to make the line not auto jump to new row

```
__`MARKDOWN ELEMENTS`__

Line =>  ___

---



<br><br>[- BACK TO TOP -](#table-of-contents)

---
---
<br><br>


# __CODE EFFECTIVELY__

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


<br>

## [__Article & Section__]()
<p align=right><a align=right href="#table-of-content">↩ Back To Top</a></p>

The `article` tag is used for wrapping self-containing content on a page (can be removed from the page and put on some another page). It can contain several `section` tags inside it, that are similar to the `div` tag, but it is more meaningful since it wraps logical groups of related content (e.g. a chapter of an article).

```html
<main>
    <article>
        <h1>JavaScript</h1>
        <p>JavaScript is...</p>
        <section>
            <h2>Syntax</h2>
            <p>Syntax of JS is ...</p>
        </section>
        <section>
            <h2>Purpose</h2>
            <p>Purpose of JA is ...</p>
        </section>
        <section>
            <h2>Examples</h2>
            <p>Some JS examples ...</p>
        </section>
    </article>
</main>
```

## [Content for web](#)

__This section is about:__<br>
_All about using images, backgrounds and icons._

_Introduction videos - [here](xxx)_

## SEO

When a ord that someone search for is in H1 and then later in desrtiptio h2 and then many times in text in same article then google might show prio it in SEO. H1 text is then shown in google search description 

One of the most important features of HTML5 is its semantics. Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content. For example, instead of using div id="header" you can use a header tag.

Example.
article
h1 - what is babajaga?
h2 - Many peapople wonder what babajaga is - here comes the answer.abs
P - babajag is ... Often babajaga do... We se many babajagas in..

