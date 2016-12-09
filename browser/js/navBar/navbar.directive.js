app.directive('navbar', function($rootScope, $state) {


    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/navBar/navbar.html',
        link: function(scope, authController) {
            scope.links = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About Me', state: 'about' },
                { label: 'Contact Me', state: 'contact' },
                { label: 'Admin ', state: 'admin', isAdmin: scope.isAdmin },
                { label: 'Administrator', state: 'login', isAdmin: scope.isAdmin }
            ]
        }
    }
})
