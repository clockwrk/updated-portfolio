app.factory('adminFactory', $http => {
    return {
        postProject: project => {
            return $http.post('/api/project', project)
                .then(
                    response => {
                        return response.data
                    })
                .catch()
        },
        getAllProjects: () => {
            return $http.get('/api/project')
                .then(
                    response => {
                            return response.data
                })
                .catch()
        }
    }
})
