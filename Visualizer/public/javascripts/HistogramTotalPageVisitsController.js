/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('HistogramTotalPageVisitsController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {  
    $scope.pageTitle = "HistogramTotalPageVisitsController";
    
    function loadData(){
      var TotalVisitsByHourPromise = WorldCupDataService.getTotalVisitsByHour();
      
      TotalVisitsByHourPromise.then(function(response){

        //var chartContext = 

        console.log(response);
      }, function(errror){
        console.log(errror);
      });
    }

    loadData();
  }]);

}());