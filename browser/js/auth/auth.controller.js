app.controller('authController', ($scope, authFactory) => {
    $scope.isAdmin = authFactory.isAdmin()
})
