// using try and catch

const fs = require("fs")

try {
    const stats = fs.statSync("file.txt")
    stats.isFile ? console.log(`this is a file of the size ${stats.size} bytes`) : console.log("Not a file")
} catch (err){
    console.log(err)
}