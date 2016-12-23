app.factory('authFactory', function($http, $state, $rootScope) {
    return {
        isAdmin: function() {
            return !!$rootScope.admin
        },
        login: function(loginInfo) {
            return $http.get('/api/authentication/' + loginInfo.name + '/' + loginInfo.password)
                .then(function(authenticationDecision) {
                    if (!authenticationDecision.data) {
                        $rootScope.admin = false;
                    } else {
                        $rootScope.admin = true
                    }
                    return authenticationDecision
                }).catch()
        },
        logOut: function() {
            $rootScope.admin = null;
        }
    }
})
