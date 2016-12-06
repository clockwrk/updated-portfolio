app.factory('projectFactory', function($http){
	let projectFactory = {};
	projectFactory.getAllProjects = function(){		

		return $http.get('/api/project')
				.then(function(response){
					return response.data
				})
				.catch()

	}

	projectFactory.getSingleProject = function(projectID) {
		return $http.get('/api/project/'+projectID)
				.then(function(response){
					return response.data
				})
				.catch()

	}

	return	projectFactory;
})