/**
 * Created by zhangjiuyi on 2017/3/18.
 *主核心逻辑入口
 *
 */
	
const fs = require('fs')
const path =require('path')

class App {
	constructor() {
		this.middlewareArr = []
	}

	use(middleware) {
		this.middlewareArr.push(middleware)
		//一个空的promise 
		this.middlewareChain = Promise.resolve()
	}
	//创建Promise链条
	composeMiddleware(context) {
		let { middlewareArr } = this
		//根据中间件数组创建promise链
		for(let middleware of middlewareArr){
			this.middlewareChain = this.middlewareChain.then(()=>{
				return middleware(context)
			})
		}
		return this.middlewareChain
	}
	initServer(){
		//做一些初始化工作
		return (request, response)=>{
			let { url , method } = request;
			let context = {
				req: request,
				reqCtx:{
					hasUser: false,
					body: '',//post请求的数据
					query: {}//处理客户端get请求
				},
				res: response,
				resCtx: {
					statusMessage: 'resolve ok',
					statusCode: 200,
					headers: {}, //response的请求报文
					body: ''//返回给前端的内容区
				}
			}
			this.composeMiddleware(context)
				.then(()=>{
					let { body, headers, statusCode, statusMessage } = context.resCtx
					let base = {'X-powered-by':'Node.js'}

					response.writeHead(statusCode, statusMessage, Object.assign(base, headers))
					response.end(body)
			})
		}
	}
}
module.exports = App

