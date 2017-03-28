/**
 * Created by zhangjiuyi on 2017/3/18.
 *主核心逻辑入口
 *
 */
	
const fs = require('fs')
const path =require('path')
const staticServer = require('./staic-server')
const apiServer = require('./api')

class App {
	constructor() {
		
	}
	initServer(){
		//做一些初始化工作
		return (request, response)=>{
			// 相当于let url = request.url
			let { url } = request;
			let body = ''
 			let headers = {}

			if(url.match('action')){
				apiServer(url).then(val=>{
					body  = JSON.stringify(val)
					headers  ={
						'Content-Type':'application/json'
					}
					let fianlHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
					response.writeHead(200, 'reslove ok',fianlHeader)
					response.end(body)
				})
			}else{
				staticServer(url).then((body)=>{
					let fianlHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
					response.writeHead(200, 'reslove ok',fianlHeader)
					response.end(body)
				})
			}
			// let getPath = (url)=>{
			// 	return path.resolve(process.cwd(),'public',`.${url}`)
			// }
		}
		
	}
}
module.exports = App

