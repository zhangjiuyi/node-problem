
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

	$.ajax({
		url: '/list.action',
		method: 'get',
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

