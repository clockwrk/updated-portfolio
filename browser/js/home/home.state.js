app.config(function($stateProvider) {

// console.log('Here')
	
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/js/home/home.html',
        controller:'BarCtrl',
        authenticate: false
    })
})


// $urlRouterProvider.otherwise(function($injector) {
//     var $state = $injector.get('$state');
//     $state.go('stateA');
// });`
