const fs = require("fs")

fs.writeFile('./smaple1.txt','Hey, this is the first file created using fs module',()=>{
    console.log('File written sucessfully!')
})