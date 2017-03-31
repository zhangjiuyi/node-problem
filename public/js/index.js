
setTimeout(function(){
	$.ajax({
		url: '/user.action',
		method: 'get',
		success: function(arr){
			// debugger
			var liStr = arr.map(function(el){
				console.log(el)
				return '<li>'+ el +'</li>'
			}).join('')		
			$('#root').html(liStr)

		},
		error: function(error){
			console.log(error)
		}
	})

	//post请求
	$.ajax({
		url: '/list.action',
		method: 'post',
		headers: {
			'content-type': 'application/json'
		},
		data: JSON.stringify(
			['name','jiuyi']
		),
		success: function(arr){
			// debugger
			var liStr = arr.map(function(el){
				console.log(el)
				return '<li>'+ el +'</li>'
			}).join('')		
			$('#shop').html(liStr)

		},
		error: function(error){
			console.log(error)
		}
	})
},1000)

