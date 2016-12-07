app.factory('projectFactory', function($http) {
    return {
        getAllProjects: function() {

            return $http.get('/api/project')
                .then(function(response) {
                    return response.data
                })
                .catch()

        },
        getSingleProject: function(projectID) {
            return $http.get('/api/project/' + projectID)
                .then(function(response) {
                    return response.data
                })
                .catch()

        },
        postProject: function(project) {
            return $http.post('/api/project', project)
                .then(function(response) {
                    console.log('Posted')
                    return response.data
                })
                .catch()
        }
    }

})
