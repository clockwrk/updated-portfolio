app.controller('loginController', function($scope, $state, authFactory, $location) {
    $scope.login = function() {
        var loginInfo = { name: $scope.username, password: $scope.password }
        authFactory.login(loginInfo)
            .then(result => {
                console.log(result)
                $state.go('home', {}, { reload: true })
                $location.path('/')
            })
            .catch();


    }
})
