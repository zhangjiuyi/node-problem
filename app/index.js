/**
 * Created by zhangjiuyi on 2017/3/18.
 *主核心逻辑入口
 *
 */

	
const fs = require('fs')

class App {
	constructor() {
		
	}
	initServer(){
		//做一些初始化工作
		let _package = require('../package')

		//高阶函数.以函数做为函数的返回值
		return (requset, response)=>{
			fs.readFile('./public/index.html','utf8',(error,data)=>{
				response.end(JSON.stringify(_package))
			})
		}
		
	}
}
module.exports = App

