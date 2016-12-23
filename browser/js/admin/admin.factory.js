app.factory('adminFactory', function($http) {
    return {
        postProject: function(project) {
            return $http.post('/api/project', project)
                .then(function(response) {
                    return response.data
                })
                .catch()
        },
        getAllProjects: function() {
            return $http.get('/api/project')
                .then(function(response) {
                    return response.data
                })
                .catch()
        }
    }
})
