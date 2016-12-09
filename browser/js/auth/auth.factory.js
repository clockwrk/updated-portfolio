app.factory('authFactory', function($http){

	var admin;
	return {
		isAdmin : function(){
			return !!admin
		}, 
		login: function(loginInfo){
			 if(loginInfo.name === process.env.USER_NAME && loginInfo.password === process.env.USER_PASSWORD){
			 	admin = true;
			 }else{
			 	return;
			 }
		}
	}
})