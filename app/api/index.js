/*
* api server
*/

module.exports = (ctx)=>{
	let { url, method } = ctx.req
	let { resCtx, reqCtx } = ctx
	let { res } = ctx
	
	// let { url , method, context} = request;

	let apiMap = {
		'/list.action':['hello', 'world', 'jiuyi'],
		'/user.action':['吉他', '键盘', '中国人'],
	}

	method = method.toLowerCase();

	return Promise.resolve({
		then: (resolve, reject)=>{
			//因为我们队methods没有过滤
			if(url.match('action')){

				if(method == 'get'){
					resCtx.body = JSON.stringify(apiMap[url])
				}else{
					let { body } = reqCtx

					resCtx.body = JSON.stringify(body)
				}	
				resCtx.headers = Object.assign( resCtx.headers,{
					"Content-Type": 'application/json'
				})
			}
			resolve()
	}})
}