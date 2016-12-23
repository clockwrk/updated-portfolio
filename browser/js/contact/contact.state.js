app.config(function($stateProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: '/js/contact/contact.html',
        controller: 'contactController',
        authenticate: false,
        resolve: {
            posts: function(feedBackFactory) {
                console.log('invoking feedBackFactory')
                return feedBackFactory.getPosts();
            }
        }
    })
})
