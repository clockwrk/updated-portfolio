app.controller('contactController', ($scope, posts, feedBackFactory) => {
    $scope.posts = posts;
    $scope.getReplies = feedBackFactory.getReplies;
    $scope.postReply = (postId, content) => {
        let replyInfo = { postId, content }
        feedBackFactory.postReplY(replyInfo)
    }

    $scope.submitForm = data => {
        feedBackFactory.postComment(data)
            .then(
                newPost => {
                    $scope.posts[$scope.posts.length] = newPost
                })
            .catch()

        $scope.user = null
        $scope.userForm.$setPristine(true)

    }

    $scope.clear = function() {
        $scope.user = null
        $scope.userForm.$setPristine(true)
    }

    $scope.submit = function() {
        if ($scope.message && $scope.email && $scope.name) {
            controllerFactory.sendMessage($scope.name, $scope.email, $scope.message)
        }
    }
})
