app.factory('projectFactory', $http => {
    let getData =  function(response){
      return response.data;
    }
    
    return {
        getAllProjects: () => {
            return $http.get('/api/project')
                .then(getData)
                .catch()
        },
        getSingleProject: function(projectID) {
            return $http.get('/api/project/' + projectID)
                .then(getData)
                .catch()
        },
        postProject: function(project) {
            return $http.post('/api/project', project)
                .then(getData)
                .catch()
        },
        updateProject: function(updatedProject) {
            return $http.put('api/project', updatedProject)
                .then(getData)
                .catch()
        }
    }
})
