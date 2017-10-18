

const path = require('path')
const ejs = require('ejs')

console.log(ejs)

const html = `hello 
	<% if(world.match('jjj')) {%>
	<%- world %>

	<% }%>
	<%- include('test')%>
	<%= hhh %>`


const f1 = ejs.compile(html,{
	filename: path.resolve(__filename),
	compileDebug: true
})

const finaStr = f1({
	world: 'xxsdsdx',
	hhh:'jiuyi'
})

console.log('---',finaStr)