// File based

const a = {
    average: (a, b) => {
        console.log((a+b)/2)
    },
    percentage: (a, b) => {
        console.log((a/b)*100)
    }
}

console.log('this is index file')

module.exports = a;

//module.exports = ..

