/*global angular*/
(function(){
  var appModule = angular.module('appModule', ['ui.router']);

  appModule.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('Home', {
      url: '/home',
      templateUrl: 'Partials/home.html',
      controller: 'HomeController'
    });
  });
}());