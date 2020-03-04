var fs = require('fs');

var file1 = __dirname + "/createdfile1.txt";
var file2 = __dirname + "/createdfile2.txt";


// File will be created id do not exist. This will overwrite whatever is in the file.
fs.writeFile(file1, "Added first text with WriteFile(). \r\n", (err) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Done! Success!")
	}
})


// This will fail as arouund after 8000 writes the error is "EMFILE: too many open files". 
// This file internally opens a file handle for each piece of data you add to your file.
// will write when it is enabled so not sure order will ok
for (let i = 0; i < 1000; i++) {
	fs.appendFile(file1, "Added text " + i + " to the file" + "\r\n", (err) => {
		if (err) {
			console.log(err)
			throw err;
		}
		else {
			console.log("ok" + i);
		}
	})
}


