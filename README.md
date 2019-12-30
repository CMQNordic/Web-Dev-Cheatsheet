_Guide, notes, cheatsheets and project templates to quickly get started and look up information for commonly used tasks. Some cheatsheet for common commands._

# Contents
>- [__Introduction__ _(how to use this document)_](#introduction)
>- [__GIT__ _(source control and github)_](#git)
>- [__VSCode, EMMET & Extensions__ _(How to configure your code editor, EMMET commands and some useful extensions)_](#Visual-Studio-Code)
>- [___Node.js, Npm & cmd___ _(How download packages and automate the workflow)_](#nodejs)
>    - [_package.json_](#packagejson)
>    - [npm i normalize.css](#mpm-i-normalizecss)
>    - [npm i -D webpack](#normalize)
>    - [other packages...](#normalize)
>- [__Webpack__ _(Bundle your files and create build/automation scripts)_](#webpack)
    >    - [_webpack.config.js_](#webpack-config-id)
>   - [npm i normalize.css]


## __Introduction__             
##### Some introduction text here **TODO**

<br/>

[Back to top](#contents)

---
<br>



## __GIT__             
##### Some introduction text here **TODO**


<br/>

[Back to top](#contents)

---
<br>




## __Markdown__
##### Markdown is a way to style text on the web. You control the display of the document. Files are saved as .md files and only special readers ca view it (or Chrome with plug-in). On github README.md in root is shown as main file. As best practice use markdown to style README.md file at github. A command to preview .md file in VScode is CTRL-SHIFT-V. 

> __Extensions__: <br>
> Auto-Open Markdown Preview : Automatically opens a preview window for each opened .md file <br>

_\_italic text\__ &nbsp;&nbsp;&nbsp;&nbsp;
__\_\_bold text\_\___ &nbsp;&nbsp;&nbsp;&nbsp;
~~striken text~~ &nbsp;&nbsp; ~\~striken text\~\~ &nbsp;&nbsp;&nbsp;&nbsp; [Link text](http://www.di.se) &nbsp;&nbsp;&nbsp;&nbsp; \[Link text\] \(url\)

![Image](http://icons.iconarchive.com/icons/saviourmachine/chat/32/online-icon.png)  &nbsp;&nbsp;&nbsp;&nbsp;  `![Alt Text](url)`

Normal text  
### Heading3
#### Heading4

>\>Text 1 _`<br>`_ <br>
>\>Text 2 on the second line


- \- ul item &nbsp; _(or use '1.' for ol)_
- \- ul item
    - \- ul subitem a (tabbed)

`` `<p>inline code</p>` ``


```HTML (or )
   ```HTML 
   <p>
       formatted text
   </p>
   ```    .
```



# My Great Headin {#custom-id}


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


## Visual Studio Code
##### VSCode is a lightweight code editor that comes with built-in support for JavaScript, TypeScript, Emmet, IntelliSense, Node.js and has lots of good extensions available. Out-of-the-box support for EMMET snippets and Intellisense increases development speed and gets you started right away. IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS and Less. VSCode supports word based completions for any programming language. VSCode has built in support for Git. Introduction Videos: [HERE](https://www.youtube.com/results?search_query=Building+WebApps+using+Visual+Studio+Code)

```
Extensions:
Auto-Open Markdown Preview :Opens a preview window for each opened .md file
Code Spell Checker : Spelling checker and autocorrect for source files
Git History : TODO
Git Lens : TODO
...
```

| |emmet|custom|output|
|---|---|---|---|
|New html doc| ! |   |   |
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


## NODE.JS

##### Powerfull lightweight code editor that comes with built-in support for JavaScript,

###### package.js
```

```

<br/>

[>Back to top](#contents)

---
<br>


## Webpack

##### Powerfull lightweight code editor that comes with built-in support for JavaScript,


#### webpack.config.json {#webpack-config-id}


<br/>

[>Back to top](#contents)

---
<br>






