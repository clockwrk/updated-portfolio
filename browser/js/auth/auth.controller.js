console.log('Loaded auth')
app.controller('authController', function($scope, authFactory){
	$scope.isAdmin = authFactory.isAdmin()
})