// stat() method by fs module gives the stats of the given file

// get the file.txt file and find the stats

const fs = require("fs")

// stat() method takes two argument, 1. the file(should provide file path) 2. function with 2 argument err and stats
fs.stat("file.txt", (err, stats) => {
    if(err){
        console.log(err)
        return
    } else {
        if (stats.isFile()) {
            // check the given file is a file or not and find the size of the file
            console.log(`this is a file of the size of ${stats.size} bytes`)
        }
        else if (stats.isDirectory()) {
            console.log("this is a directory")
        }
    }
})