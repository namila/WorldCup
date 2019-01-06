/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('MainController', ['$scope', function ($scope) {
    $scope.mainTitle = "World Cup 1998 analysis";

    $scope.pageIndex = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      SIX: 6,
      SEVEN: 7,
      EIGHT: 8,
      NINE: 9,
      TEN: 10
    }

    $scope.currentPageIndex = null;

    $scope.moveToPage = function(page){
      $scope.currentPageIndex = page;
    }
    
    function loadData(){
      $scope.currentPageIndex = $scope.pageIndex.ONE;
    }

    loadData();
  }]);

}());