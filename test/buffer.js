
const assert = require('assert')
//断言

// 学习Buffer.from()

// const encodingTest = 'hello world'

// let buf1 = Buffer.from(encodingTest, 'utf8')
// console.log(buf1)

// let buf2 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64])
// console.log(buf2.toString())


//汉字一般都是3 位buffer来表示
// let test = '窗'
// console.log(Buffer.from(test))


//buffer.concat的使用
// let test = '窗'  //[ e7 aa 97]
// let buf3 = Buffer.from([0xe7])
// let buf4 = Buffer.from([0xaa])
// let buf5 = Buffer.from([0x97])

// console.log(Buffer.concat([buf3, buf4, buf5], 3).toString('utf8'))

//处理字节丢失的问题
const fs = require('fs')
let data = fs.createReadStream('./test/tmp',{
	highWaterMark: 1,
})

let out = []
data.on('data',(chunk)=>{
	out.push(chunk)
}).on('end',()=>{
	console.log(Buffer.concat(out).toString())	
})