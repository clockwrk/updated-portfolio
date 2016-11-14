app.config(function($stateProvider){
	$stateProvider.state('contact', {
		url:'/contact',
		templateUrl: '/js/contact/contact.html',
		controller: 'contactController'
	})

	console.log('loaded contact state')
})

        // controller: function($scope) {
        //     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        // }