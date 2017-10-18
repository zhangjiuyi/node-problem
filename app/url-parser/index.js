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
			let data = []
			// context.query = {}
			if(method == 'post'){
				//stream存在两种状态一种paused 死流 flew 流动的
				ctx.req.on('data',(chunk)=>{
					data.push(chunk)
				}).on('end',()=>{
					let endData = Buffer.concat(data).toString()
					reqCtx.body =JSON.parse(endData)

					resolve()
				})		
			}else{
				resolve()
			}
			
		}
	})

}