/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('MainController', ['$scope', '$state', function ($scope, $state) {
    $scope.mainTitle = "World Cup 1998 analysis";

    $scope.pageIndex = {
      TOTAL_PAGE_VISITS: "TOTAL_PAGE_VISITS",
      HISTROGRAM_TOTAL_PAGE_VISITS: "HISTROGRAM_TOTAL_PAGE_VISITS",
      HISTROGRAM_UNIQUE_PAGE_VISITS: "HISTROGRAM_UNIQUE_PAGE_VISITS",
      HISTROGRAM_VISITOR_COUNT: "HISTROGRAM_VISITOR_COUNT",
      TOP_TEN: "TOP_TEN",
      LANGUAGE_PERCENTAGE: "LANGUAGE_PERCENTAGE",
      ERROR_PERCENTAGE: "ERROR_PERCENTAGE"
    };

    $scope.moveToPage = function(page){
      $scope.currentPageIndex = page;
      $state.go(page);

    }
    
    function loadData(){
      $scope.currentPageIndex = $scope.pageIndex.TOTAL_PAGE_VISITS
    }

    loadData();
  }]);

}());