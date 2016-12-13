

app.factory('authFactory', function($http){

	var admin;
	return {
		isAdmin : function(){
			return !!admin
		}, 
		login: function(loginInfo){
				$http.get('/api/authentication/'+loginInfo.name+'/'+loginInfo.password)
						.then(function(authenticationDecision){
							if(authenticationDecision.data){
								admin=true;
							}
						}).catch()

			 // if(loginInfo.name === process.env.USER_NAME && loginInfo.password === process.env.USER_PASSWORD){
			 // 	admin = true;
			 // }else{
			 // 	return;
			 // }
		}
	}
})