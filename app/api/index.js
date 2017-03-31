/*
* api server
*/

module.exports = (request)=>{
	// request.context = {
	// 	body: '',
	// 	query: {},
	// 	method: 'get'
	// };
	let { url , method, context} = request;
	let apiMap = {
		'/list.action':['hello', 'world', 'jiuyi'],
		'/user.action':['吉他', '键盘', '中国人'],
	}
	//Promise.resolve(underfine)
	method = method.toLowerCase();
	//因为我们队methods没有过滤
	if(method == 'get'){
		return Promise.resolve(apiMap[url])
	}else{
		let {body} = context
		return Promise.resolve(body)
	}
}