/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('TopTenController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {
    $scope.userData = null;
    $scope.pageData = null;

    function loadData() {
      var topTenDataPromise = WorldCupDataService.getTopTen();
      topTenDataPromise.then(function (response) {
        $scope.userData = response.userData;
        $scope.pageData = response.pageData;
      }, function (error) {
        console.log(error);
      });

    }

    loadData();
  }]);

}());