/**
 * Created by zhangjiuyi on 2017/3/18.
 */


//主核心逻辑文件
	

	const fs = require('fs')
class App {
	constructor() {
		
	}
	initServer() {
		let _package  = require('../package')
		
		return (request, response)=>{
			fs.readFile('./public/index.html','utf-8', (error, data)=>{
				response.end(dataJSON.stringify(_package))
			
			})
		}
	}
}

moudle.exports = App