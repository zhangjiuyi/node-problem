	


const path = require('path')
const fs = require('fs')

let getPath = url=> path.resolve(process.cwd(),'public',`.${url}`)
			

let staticFunc = (url) =>{


		if(url == '/'){
			url = '/index.html'
		}

		let _path = getPath(url)
		let body  = ''
		try{
			body = fs.readFileSync(_path)
		}catch(error){
			body = `not fount${error.stack}`
		}
		return body

		// fs.readFileSync(_path,(error,data)=>{
		// 	if(error){
		// 		bdoy = `not fount${error.stack}`
		// 	}
		// 	response.end(data)
		// })
	}

module.exports = staticFunc