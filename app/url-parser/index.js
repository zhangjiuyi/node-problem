/*
*
*url-parser  处理客户端数据
*/

//request : query +body +method

module.exports = (request)=>{

	let {method, url, context } = request;
	request.context = {
		body: '',
		query: {},
		method: 'get'
	};

	method = method.toLowerCase();
	return Promise.resolve({
		then: (resolve,reject) =>{
			context.method = method;
			context.query = {}
			if(method == 'post'){
				//stream存在两种状态一种paused 死流 flew 流动的
				let data = ''
				request.on('data',(chunk)=>{
					data += chunk
				}).on('end',()=>{
					context.body =JSON.parse(data)
					resolve()
				})		
			}else{
				resolve()
			}
			
		}
	})

}