/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('LanguagePercentageController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {
    $scope.pageTitle = 'LanguagePercentageController';

    function loadData() {
      var languageDataPromise = WorldCupDataService.getLanguageData();
      
      languageDataPromise.then(function (response) {
        var labels = [];
        var values = [];

        angular.forEach(response.data,function(currentLanguage, currentLanguageKey){
          labels.push(currentLanguage.language);
          values.push(Number(currentLanguage.percentage));
        });
        var chartContext = $("#language-percentage-chart");
        var languageChart = new Chart(chartContext,{
          type: 'doughnut',
          data: {
            datasets:[
              {
                data: values,
                backgroundColor:['#ff5879','#2f97e8','#ffc64c']
              }
            ],
            labels: labels
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