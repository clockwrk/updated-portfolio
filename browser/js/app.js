console.log('Here dshkafdha')
var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    // $stateProvider.state('home', {
    //   url: '/',
    //   templateUrl: 'index.html'
    // }).state('products', {
    //   url: '/products',
    //   templateUrl: 'products.html'
    // }).state('services', {
    //   url: '/services',
    //   templateUrl: 'services.html'
    // });
  }
]);