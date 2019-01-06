/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('TotalPageVisitsController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {  
    
    $scope.totalPageVisitsCounter = 0;
    $scope.totalPageVisits = 0;
    
    $scope.uniquePageVisitsCounter = 0;
    $scope.uniquePageVisits = 0;
    
    $scope.averageVisitsPerDayCounter = 0;
    $scope.averageVisitsPerDay = 0;
    
    function loadData(){
      var totalPageVisitsPromise = WorldCupDataService.getTotalPageVisits();
      totalPageVisitsPromise.then(function(response){
        $scope.totalPageVisits = response.totalPageVisits;
        $scope.uniquePageVisits = response.uniquePageVisits;
        $scope.averageVisitsPerDay = response.averageVisitsPerDay;
      }, function(errror){
        $scope.totalPageVisits = 0;
        console.log(error);
      });
    }

    loadData();
  }]);

}());