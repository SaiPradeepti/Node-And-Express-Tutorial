//modules
const {john,peter} = require('./04-names')
const {sayHi,factorial} = require('./05-utils')
const data = require('./06-alternative-export')
const {groceryItems,singleStudent} = require('./06-alternative-export')

sayHi('Susan')
sayHi(john)
sayHi(peter)

factorial(5)

console.log(data)
console.log(groceryItems,singleStudent)
