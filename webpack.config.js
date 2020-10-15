const path = require('path');

/********* main configuration ***********/

// Root of our main index.html file 
const indexRoot = "./learning/css";

// Starting file for processing. 
// Must contain: (module.hot) { module.hot.accept() }
const JSToBundle = "./WebPackRelated/app.js";

// Webpack mode (development/production)
const modeType = "development";

// Generated result - filename and folder. 
// Note, dev-server writes this file to RAM & injects to browser.
const outputDir = indexRoot;
const outputFilename = "bundled.js";

// Webpack-dev-server settings

// The port to serve run on
const devServer_Port = '3000';
// Location where all html changes  shall be tracked
const devServer_HtmlFilesLocation = ".";
const devServer_ContentBase = indexRoot; /* Root of our index.html that browser runs */




/* Set to "true" if only ERRORS/WARNINGS shall be written in console. Otherwise "false" */
const silentMode = true;

/* PostCSS plugins that are served to "postCSS-loader" */
const postCSS_Plugins = [
	require('postcss-import'), /* Must be first. Replaces the @import with code. */
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer')
];
/****************************************************************************************************/
/****************************************************************************************************/

module.exports = {
	mode: modeType,
	entry: path.join(__dirname, JSToBundle),
	output: { path: path.join(__dirname, outputDir), filename: outputFilename },
	devServer: {
		contentBase: path.join(__dirname, devServer_ContentBase), /* Location of index.html file */
		before: (app, server) => { server._watch(devServer_HtmlFilesLocation + '/**/*.html'); }, /* For auto-reloading when a html file is saved */
		after: PrintLogs(),
		hot: true, /* For auto-inject of bundled file at save. Note! The .js that is entry point file must contain: if (module.hot) module.hot.accept() */
		noInfo: silentMode, /* If True then no prints at all. To get some prints use [stats: 'minimal'] */
		port: 3000, /* The port to run the site on -> localhost:3000 */
		host: '0.0.0.0' /* Reach devServer from other devices on same wi-fi. Address: [IPv4 Address 192.168.X.X]:3000 (look up XXX  cmd>ipconfig)*/
	},
	module: {
		rules: [
			{
				test: /\.css$/i, /* This rule only for files ending with .css due to this*/
				use: [
					'style-loader', //3. Injects javascript into DOM
					'css-loader', //2. Turns css into javascript
					{ loader: 'postcss-loader', options: { plugins: postCSS_Plugins } } // 1 (executed first). Turns custom code in .css files into css
				]
			}
		]
	}
};

/* Function printing some useful console logs */
function PrintLogs() {
	console.group("webpack.config.js");
	console.log("> Mode:                          " + modeType);
	console.log("> Working directory:             " + path.resolve(__dirname).split("\\").pop());
	console.log("> Entry file to bundle:          " + path.join(__dirname, JSToBundle));
	console.log("> Output bundled file saved to:  " + path.join(__dirname, outputDir) + outputFilename);
	console.log("> DevServer tracks HTML at:      " + path.join(__dirname, devServer_HtmlFilesLocation));
	{
		'use strict';
		var os = require('os');
		var fs = require('fs');
		var ifaces = os.networkInterfaces();
		var externalAddress = "";

		Object.keys(ifaces).forEach(function (ifname) {
			var alias = 0;

			ifaces[ifname].forEach(function (iface) {
				if ('IPv4' !== iface.family || iface.internal !== false) {
					// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses

					return;
				}

				if (alias >= 1) {
					// this single interface has multiple ipv4 addresses
					externalAddress = ifname + ':' + alias + " " + iface.address;
				} else {
					// this interface has only one ipv4 adress
					externalAddress = 'http://' + iface.address.trim() + '/' + devServer_Port;
				}
				++alias;
			});
		});
	}
	console.log("> Content served from:           " + '\u001b[32m' + path.join(__dirname, devServer_ContentBase) + '\u001b[0m');
	console.log("> DevServer runs locally at:     " + '\u001b[34m' + "http://localhost:" + devServer_Port + '\u001b[0m');
	console.log("> DevServer runs externally at:  " + '\u001b[34m' + externalAddress + '\u001b[0m');
	console.log("> ______________________________________________________");
	console.assert(fs.existsSync(JSToBundle), '\u001b[31m' + JSToBundle + " not found!" + '\u001b[0m'); /* Only logged if expression is false -> file not found */
	console.log("> Running webpack-dev-server... " + '\u001b[33m' + "(press CTRL-C-C to exit)" + '\u001b[0m');
	console.log(" ");
	console.groupEnd();

	/* console.table(postCSS_Plugins); */

	console.log();
}
