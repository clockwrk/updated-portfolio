var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'xeditable']);

app.run(function(editableOptions) {

    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
