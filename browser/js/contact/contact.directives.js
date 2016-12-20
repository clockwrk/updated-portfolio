app.directive('repliy', function($rootScope, $state) {
    console.log('post directive')

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/contact/template/replyView.html',
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
