const fs = require("fs")
var http = require('http');
const port = 8000


const server = http.createServer((req, res) => {
    fs.stat("file.txt", (err, stats) => {
        if (!err) {
            if (stats.isFile) {
                res.end(`The file of the size ${stats.size} bytes`)
            } else {
                res.end("This is not a file")
            }
        } else {
            res.end(" Something went wrong, check your file path")
        }

    })
})

server.listen(port, () => {
    console.log("server is running")
})

//  http://localhost:8000/
//  will give you the size of the file
