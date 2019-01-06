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
    }).state('HISTROGRAM_UNIQUE_PAGE_VISITS', {
      url: '/histogram-unique-page-visits',
      templateUrl: '../views/histogram-unique-page-visits.html',
      controller:'HistogramUniquePageVisitsController'
    }).state('HISTROGRAM_VISITOR_COUNT', {
      url: '/histogram-visitor-count',
      templateUrl: '../views/histogram-visitor-count.html',
      controller:'HistogramVisitorCountController'
    });
  });
}());