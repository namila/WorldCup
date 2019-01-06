/* global angular*/
(function () {
  var appModule = angular.module('appModule');

  appModule.controller('HistogramVisitorCountController', ['$scope', 'WorldCupDataService', function ($scope, WorldCupDataService) {  
    $scope.pageTitle = "HistogramVisitorCountController";
    
    function loadData(){
      var visitorCountPromise = WorldCupDataService.getVisitorCount();
      
      visitorCountPromise.then(function(response){
        var labels = [];
        var values = [];
        angular.forEach(response.data, function(record, recordKey){
          labels.push(Number(record.visitorCount));
          values.push(Number(record.dayCount));
        });
        var chartContext = $("#histogram-visitor-count");
        var chart = new Chart(chartContext,{
          type:'line',
          data:{
            labels: labels,
            datasets:[
              {
                label:"Number of Days",
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