/* global angular*/
(function(){
  var appModule = angular.module('appModule');

  appModule.controller('MainController', ['$scope', function($scope){
    $scope.mainTitle = "App Title";
  }]);

}());