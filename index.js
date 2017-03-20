

// var test = require('lodash')
// console.log(test)
//
//
// exports.hello = 'world';


//核心模块
//文件模块 一般是用户定义的模块

// path, http, fs,


// var another = require('./test').hello;
// console.log(another)
//
//
//
// var package = require('./package')//node会自动帮添加后缀
//
// module.exports = {
// 	// hello: hello,
// 	a:
// }

const http = require('http');
const PORT = 7000
const App = require('./app')
const server = new App()
http.createServer(server.initServer)
.listen(7000,()=>{
	console.log('server listening on port ${PORT}')
})