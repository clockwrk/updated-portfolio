console.log('contact controller loadeed')

app.controller('contactController', function($scope){
	console.log('Loaded controller for contact')

	$scope.message = 'hi';
	$scope.email = null;
	$scope.name = null;

	$scope.submitForm = function(data){
		console.log('Submitting',data)
	}
	$scope.submit = function() {
		if ($scope.message && $scope.email && $scope.name){

			controllerFactory.sendMessage($scope.name, $scope.email, $scope.message)
			console.log('message sent')

		}
	}
})