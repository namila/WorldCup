/*global angular*/
(function(){
  var appModule = angular.module('appModule', ['ui.router', 'ngResource','counter']);

  appModule.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/total-page-visits');

    $stateProvider.state('TOTAL_PAGE_VISITS', {
      url: '/total-page-visits',
      templateUrl: '../views/total-page-visits.html',
      controller: 'TotalPageVisitsController'
    }).state('HISTROGRAM_TOTAL_PAGE_VISITS', {
      url: '/histogram-total-page-visits',
      templateUrl: '../views/histogram-total-page-visits.html',
      controller:'HistogramTotalPageVisitsController'
    });
  });
}());