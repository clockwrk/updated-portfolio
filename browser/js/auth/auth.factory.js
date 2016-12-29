app.factory('authFactory', ($http, $state, $rootScope) => {
    return {
        isAdmin: () => {
            return !!$rootScope.admin
        },
        login: loginInfo => {
            return $http.get('/api/authentication/' + loginInfo.name + '/' + loginInfo.password)
                .then(
                    authenticationDecision => {
                        if (!authenticationDecision.data) {
                            $rootScope.admin = false;
                        } else {
                            $rootScope.admin = true
                        }
                        return authenticationDecision
                    }).catch()
        },
        logOut: () => {
            $rootScope.admin = null;
        }
    }
})
