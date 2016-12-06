app.config(function($stateProvider){
	$stateProvider.state('contact', {
		url:'/contact',
		templateUrl: '/js/contact/contact.html',
		controller: 'contactController',
		resolve: {
			posts: function(feedBackFactory){
				console.log('invoking feedBackFactory')
				return feedBackFactory.getPosts();
			}
		}
	})
})

        // controller: function($scope) {
        //     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        // }