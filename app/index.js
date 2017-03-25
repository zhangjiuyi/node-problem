/**
 * Created by zhangjiuyi on 2017/3/18.
 *主核心逻辑入口
 *
 */
	
const fs = require('fs')
const path =require('path')
const staticServer = require('./staic-server')

class App {
	constructor() {
		
	}
	initServer(){
		//做一些初始化工作
		//高阶函数.以函数做为函数的返回值   .根据url进行代码分发
		return (request, response)=>{
			let { url } = request;
			// 相当于let url = request.url
			// const staticPrefix  = path.resolve(process.cwd(),'public')

			let getPath = (url)=>{
				return path.resolve(process.cwd(),'public',`.${url}`)
			}


			let body = staticServer(url)
			response.end(body)

		}
		
	}
}
module.exports = App

