var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'xeditable','chart.js']);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        // enabled: true,
        // requireBase: false
    });
    $urlRouterProvider.otherwise("/");
}]);

app.run(function($rootScope, $state, authFactory) {
    $rootScope.admin = null;
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, authFactory) {
        if (toState.authenticate && !authFactory.isAdmin()) {
            // User isn’t authenticated
            $state.transitionTo("home");
            event.preventDefault();
        }
    });
});


