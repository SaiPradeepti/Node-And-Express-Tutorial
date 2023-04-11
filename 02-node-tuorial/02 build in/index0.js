/// build in modules
const fs = require("fs")
fs.readFile('./sample.txt','utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data)
})
// const readline = require('readline');
 
// const rl = readline.createInterface(process.stdin, process.stdout);
 
// rl.question('What is your name? ', (name) => {
//     console.log('Hello ' + name);
//     rl.close();
// });
console.log('print me first?')
