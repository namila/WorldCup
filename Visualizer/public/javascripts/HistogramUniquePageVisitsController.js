/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('HistogramUniquePageVisitsController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {  
    $scope.pageTitle = "HistogramUniquePageVisitsController";
    
    function loadData(){
      var uniqueVisitsByHourPromise = WorldCupDataService.getUniqueVisitsByHour();
      
      uniqueVisitsByHourPromise.then(function(response){
        var labels = [];
        var values = [];
        angular.forEach(response.data, function(record, recordKey){
          labels.push(Number(record.hour));
          values.push(Number(record.count));
        });
        var chartContext = $("#histogram-unique-page-visits");
        var chart = new Chart(chartContext,{
          type:'line',
          data:{
            labels: labels,
            datasets:[
              {
                label:"Unique page visits",
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