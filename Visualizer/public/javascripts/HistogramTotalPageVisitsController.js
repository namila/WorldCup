/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('HistogramTotalPageVisitsController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {  
    $scope.pageTitle = "HistogramTotalPageVisitsController";
    
    function loadData(){
      var TotalVisitsByHourPromise = WorldCupDataService.getTotalVisitsByHour();
      
      TotalVisitsByHourPromise.then(function(response){
        var labels = [];
        var values = [];
        angular.forEach(response.data, function(record, recordKey){
          labels.push(Number(record.hour));
          values.push(Number(record.count));
        });
        var chartContext = $("#histogram-total-page-visits");
        var chart = new Chart(chartContext,{
          type:'line',
          data:{
            labels: labels,
            datasets:[
              {
                label:"Total page visits",
                data: values
              }
            ]
          },
          options: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 80,
                fontColor: 'black'
              }
            }
          }
        });

      }, function(errror){
        console.log(errror);
      });
    }

    loadData();
  }]);

}());