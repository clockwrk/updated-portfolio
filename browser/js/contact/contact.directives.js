
app.directive('post', function($rootScope, $state) {
    console.log('post directive')

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/navBar/navbar.html',
        link: function(scope) {
            scope.links = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About Me', state: 'about' },
                { label: 'Contact Me', state: 'contact' }
            ]
        }
    }
})