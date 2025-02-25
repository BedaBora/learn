// run using commmand node first-app.js

console.log("Hello from Node.js") 

const fs = require("fs")
fs.writeFileSync("temp.txt", "Hello from node.js")