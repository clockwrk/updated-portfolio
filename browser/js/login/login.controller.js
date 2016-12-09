app.controller('loginController', function($scope, authFactory) {


    $scope.login = function() {

        var loginInfo = { name: $scope.username, password: $scope.password }
        console.log(loginInfo)

        authFactory.login(loginInfo)
    }

})
