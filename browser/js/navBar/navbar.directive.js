console.log("in nav barsfdjkhafklhs")
app.directive('navbar', function($rootScope, $state) {
    console.log('loading nav bar')

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
