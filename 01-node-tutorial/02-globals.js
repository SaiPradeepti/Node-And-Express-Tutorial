console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

const interval = setInterval(() => {
  console.log('hello world')
}, 1000)