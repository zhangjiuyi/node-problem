/*
*
*url-parser  处理客户端数据
*/

//request : query +body +method


module.exports = (ctx)=>{

	let { method, url } = ctx.req;
	let { reqCtx } = ctx


	method = method.toLowerCase();
	return Promise.resolve({
		then: (resolve,reject)=>{
			// context.method = method;
			// context.query = {}
			if(method == 'post'){
				//stream存在两种状态一种paused 死流 flew 流动的
				let data = ''
				ctx.req.on('data',(chunk)=>{
					data += chunk
				}).on('end',()=>{

					reqCtx.body =JSON.parse(data)

					resolve()
				})		
			}else{
				resolve()
			}
			
		}
	})

}