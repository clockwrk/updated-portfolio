app.factory('feedBackFactory', function($http) {

    console.log("In the feeback factory")
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
        console.log('Posting comment')
        return $http.post('/api/comment', content)
            .then(function(succesfulComment) {
                console.log(succesfulComment)
                return succesfulComment.data
            })
            .catch()
    }
    feedBackFactory.getReplies = function(commentId) {
        return $http.get('/api/reply/' + commentId)
            .then(function(replies) {
                console.log('got comments')
                return replies.data
            })
            .catch()
    }
    feedBackFactory.postReplY = function(message) {


        console.log('running post reply', message)



        return $http.post('/api/reply/', {post_id:parseInt(message.postId.postId) ,content:message.content.content})
            .then(function(postedComment){
                return postedComment.data
            })
    }

    return feedBackFactory

})
