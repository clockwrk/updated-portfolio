app.config($stateProvider => {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: '/js/about/about.html',
        authenticate: false
    })
})
