app.directive('navbar', function($rootScope, $state, authFactory) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/navBar/navbar.html',
        link: function(scope) {
            scope.showLink = function(link) {
                return !link.isAdmin && (link.state === 'admin' || link.state === 'login')
            }

            scope.isLoggedIn = function() {
                return authFactory.isAdmin();
            }

            scope.links = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About Me', state: 'about' },
                // { label: 'Contact Me', state: 'contact' },
                { label: 'Admin ', state: 'admin', isAdmin: !$rootScope.admin },
                { label: 'Administrator', state: 'login', isAdmin: $rootScope.admin }
            ]
        }
    }
})
