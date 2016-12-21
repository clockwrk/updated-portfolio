app.directive('replies', function($rootScope) {
    console.log('post directive')

    return {
        restrict: 'E',
        scope: {
            projectId: "="
        },
        templateUrl: 'js/contact/template/replyView.html'
        // link: function(scope) {
        //     scope.links = 'blank'
        // }
    }
})
