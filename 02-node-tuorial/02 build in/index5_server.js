const http = require('http');

const PORT = 2000;
const hostname = 'localhost'

// http.createServer((request,response,next) => {
const server = http.createServer((req,res) => {

    console.log(req.url)

    res.end("<h1>Hello World</h1>")
})

server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`)
})
