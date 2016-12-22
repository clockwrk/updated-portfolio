app.directive('replies', function() {
    console.log('post directive')

    return {
        restrict: 'E',
        scope: {
            post: "="
        },
        templateUrl: 'js/contact/template/replyView.html',
        link: function link(scope, element, attrs) {

                scope.replies = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About Me', state: 'about' },
                { label: 'Contact Me', state: 'contact' }
            ]
        }
    }
})
