

const http = require('http')

const PORT = 7000

http.createServer((request,response)=>{

  let string  = require('./package')
  
  response.write(JSON.stringify(string))
  response.write(`1,2,3`)
  response.end('hello world')

}).listen(PORT,()=>{
  console.log(`server listening on port ${PORT}`)
})