const fs = require('fs')

// const { readFileSync } = require("fs") 

const a = fs.readFileSync('./sample.txt','utf-8')

console.log(a)
console.log('print me later')