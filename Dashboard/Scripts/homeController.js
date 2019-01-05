(function(){
  var appModule = angular.module('appModule');

  appModule.controller('HomeController', ['$scope', function($scope){
    $scope.appTitle = "App Title";
  }]);
}());