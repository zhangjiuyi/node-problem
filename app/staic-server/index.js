	


const path = require('path')
const fs = require('fs')

let getPath = url=> path.resolve(process.cwd(),'public',`.${url}`)
let staticFunc = (url) =>{
	return new Promise((resolve,reject)=>{
		if(url == '/'){
			url = '/index.html'
		}
		let _path = getPath(url)
		let body  = fs.readFile(_path, (err, data)=>{
			if(err){
				reject(`not fount${err.stack}`)
			}
			resolve(data)
		})
	})
}

module.exports = staticFunc