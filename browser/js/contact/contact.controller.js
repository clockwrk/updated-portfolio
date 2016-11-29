console.log('contact controller loadeed')

app.controller('contactController', function($scope, feedBackFactory) {
    console.log('Loaded controller for contact')

    $scope.posts = posts;



    $scope.submitForm = function(data) {
        console.log('Submitting', data)


        feedBackFactory.postComment(data.message)

        console.log($scope.userForm)

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
            console.log('message sent')

        }
    }

})
