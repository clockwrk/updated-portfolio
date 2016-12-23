app.controller('authController', function($scope, authFactory) {
    $scope.isAdmin = authFactory.isAdmin()
})
