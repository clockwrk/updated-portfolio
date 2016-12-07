app.factory('feedBackFactory', function($http) {


    var feedBackFactory = {}

    feedBackFactory.getPosts = function() {
        return $http.get('/api/comment')
            .then(function(response) {
                console.log('getting comments')
                return response.data
            })
            .catch()
    }

    feedBackFactory.postComment = function(content) {

        return $http.post('/api/comment', content)
            .then(function(succesfulcomment) {
                return succesfulcomment.data
            })
            .catch()
    }

    return feedBackFactory

})
