const sayHi = name => {
    console.log(`Hi! ${name}`)
}

const factorial = (num) => {
    let factorial = 1;
    for(let i=num; i>=1; i--){
        factorial *= i
    }
    console.log(factorial)
}

module.exports = {sayHi,factorial};