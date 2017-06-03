


var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate','angular-typed']);

var projectType = {
	encode: function(str) { return str && str.replace(/ /g, "-"); },
	decode: function(str) { return str && str.replace(/-/g, " "); },
	is: angular.isString,
	pattern: /[^/]+/
};

// app.run(function(editableOptions) {
//     editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
// });

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
		$urlMatcherFactoryProvider.type('project', projectType);

		$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise("/");
}]);

app.directive('navbar', function($rootScope, $state, authFactory) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/navBar/navbar.html',
        link: function(scope) {
            scope.showLink = function(link) {
                return !link.isAdmin && (link.state === 'admin' || link.state === 'login')
            }

            scope.isLoggedIn = function() {
                return authFactory.isAdmin();
            }

            scope.links = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About Me', state: 'about' }
                // { label: 'Feedback', state: 'contact' },
                // { label: 'Admin ', state: 'admin', isAdmin: !$rootScope.admin },
                // { label: 'Administrator', state: 'login', isAdmin: $rootScope.admin }
            ]
        }
    }
})



// app.run(function($rootScope, $state, authFactory) {
//     $rootScope.admin = null;
//     $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, authFactory) {
//         if (toState.authenticate && !authFactory.isAdmin()) {
//             // User isn’t authenticated
//             $state.transitionTo("home");
//             event.preventDefault();
//         }
//     });
// });
