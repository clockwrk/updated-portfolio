app.directive('navbar', function($rootScope, $state, authFactory) {


    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/navBar/navbar.html',
        link: function(scope) {
            scope.links = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About Me', state: 'about' },
                { label: 'Contact Me', state: 'contact' },
                { label: 'Admin ', state: 'admin', isAdmin: authFactory.isAdmin },
                { label: 'Administrator', state: 'login', isAdmin: !authFactory.isAdmin }
            ]
        }
    }
})
