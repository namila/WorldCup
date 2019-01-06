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
      SIX: 6,
      SEVEN: 7,
      EIGHT: 8,
      NINE: 9,
      TEN: 10
    }
    
    $scope.currentPageIndex = $scope.pageIndex.TOTAL_PAGE_VISITS;

    $scope.moveToPage = function(page){
      $scope.currentPageIndex = page;
      $state.go(page);

    }
    
    function loadData(){
      
      
    }

    loadData();
  }]);

}());