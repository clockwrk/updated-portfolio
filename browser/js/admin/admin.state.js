app.config(function($stateProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '/js/admin/admin.html',
        controller: 'adminController',
        resolve: {
            posts: function(feedBackFactory) {
                return feedBackFactory.getPosts();
            }
        }
    })
})
