app.controller('loginController', function($scope, authFactory) {
    $scope.login = function() {
        var loginInfo = { name: $scope.username, password: $scope.password }
        authFactory.login(loginInfo)
    }
})
