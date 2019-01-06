/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('ErrorPercentageController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {
    $scope.pageTitle = 'ErrorPercentageController';

    function loadData() {
      var errorPercentagePromise = WorldCupDataService.getErrorPercentage();
      
      errorPercentagePromise.then(function (response) {
        var chartContext = $("#error-percentage-chart");

        var errorPercentageChart = new Chart(chartContext,{
          type: 'doughnut',
          data: {
            datasets:[
              {
                data: [response.data.successPercantage,response.data.errorPercentage],
                backgroundColor:['#2f97e8', '#ff5879']
              }
            ],
            labels: ["Success", "Error"]
          },
          options: {
            responsive: false
          }
        });
        console.log(response);
      }, function (error) {
        console.log(error);
      });

    }

    loadData();
  }]);

}());