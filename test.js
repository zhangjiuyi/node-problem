

//学习Promise
//typeof Promise function

//prototype ===> then/catch


//静态方法 ==>all/race/resolve/reject

//第一步 new Promise


// let p = new Promise((resolve,reject)=>{
// 	setTimeout(reject,1000, 'hello world')
// })
// console.log(p)


// //then第一个参数是处理resolve的结果, 第二个参数才是处理reject的结果
// var another = p.then((val)=>{
// 	console.log(` resolve val is ${val}`)
// },(val)=>{
// 	console.log(` reject val is ${val}`)
// })
// console.log(another instanceof Promise)

//catch只处理reject的结果 接受一个参数

// setTimeout(()=>{
// 	p.catch((val)=>{
// 		console.log(`catch val is ${val}`)
// 	})	
// },2000)



//catch和then做的事情: 
//1. 将这些回调函数存入处理队列 queue 
//2. 如果Promise已经是fulfilled或者rejected的状态, 则自动执行(autoRun)
//只有Promise的resolve /reject执行完后才开始调用



// Promise的状态
// -pending
// -rejected
// -fulfilled


//- - -- - -


//3月 31日

const assert = require('assert')

const p = Promise.resolve(1);
const p1 = p.then(val=>{
	console.log(val)
	return val+1
})

const p2 = p1.then(val=>{
	console.log(val)
	assert.equal(val,2)
})


