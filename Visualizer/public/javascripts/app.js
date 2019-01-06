/*global angular*/
(function(){
  var appModule = angular.module('appModule', ['ui.router', 'ngResource','counter']);

  appModule.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/total-page-visits');

    $stateProvider.state('TotalPageVisits', {
      url: '/total-page-visits',
      templateUrl: '../views/total-page-visits.html',
      controller: 'TotalPageVisitsController'
    });
  });
}());