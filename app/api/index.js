/*
* api server
*/

module.exports=(url)=>{
	let apiMap = {
		'/list.action':['hello', 'world', 'jiuyi'],
		'/user.action':['吉他', '键盘', '中国人'],
	}

	return Promise.resolve(apiMap[url])
}