app.factory('feedBackFactory', function($http) {
    return {
        getposts: function() {
            return $http.get('/api/post')
                .then(function(response) {
                    return response.data }).catch()
        }
    }
})
