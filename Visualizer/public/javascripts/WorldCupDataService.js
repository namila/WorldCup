/* global angular */
(function(){
  var appModule = angular.module('appModule');

  appModule.service('WorldCupDataService', ['$resource', '$q', function($resource, $q){
    var baseUri = "http://localhost:3000/api/";

    function getTotalPageVisits(){
      var uri = baseUri + 'page_visits';
      
      var totalPageVisitsResource = $resource(uri, {}, {
        get:{
          method: 'GET',
          isArray: false
        }
      });

      var defferedObject = $q.defer();

      totalPageVisitsResource.get({}, function(data){
        defferedObject.resolve(data);
      }, function(response){
        defferedObject.reject(response);
      });

      return defferedObject.promise;
    }

    function getTotalVisitsByHour(){
      var uri = baseUri + 'total_visits_by_hour';
      
      var totalVisitsByHourResource = $resource(uri, {}, {
        get:{
          method: 'GET',
          isArray: false
        }
      });

      var defferedObject = $q.defer();

      totalVisitsByHourResource.get({}, function(data){
        defferedObject.resolve(data);
      }, function(response){
        defferedObject.reject(response);
      });

      return defferedObject.promise;
    }


    function getUniqueVisitsByHour(){
      var uri = baseUri + 'unique_visits_by_hour';
      
      var uniqueVisitsByHourResource = $resource(uri, {}, {
        get:{
          method: 'GET',
          isArray: false
        }
      });

      var defferedObject = $q.defer();

      uniqueVisitsByHourResource.get({}, function(data){
        defferedObject.resolve(data);
      }, function(response){
        defferedObject.reject(response);
      });

      return defferedObject.promise;
    }

    function getVisitorCount(){
      var uri = baseUri + 'visitor_count';
      
      var visitorCountResource = $resource(uri, {}, {
        get:{
          method: 'GET',
          isArray: false
        }
      });

      var defferedObject = $q.defer();

      visitorCountResource.get({}, function(data){
        defferedObject.resolve(data);
      }, function(response){
        defferedObject.reject(response);
      });

      return defferedObject.promise;
    }

    function getTopTen(){
      var uri = baseUri + 'top-ten';
      
      var topTenResource = $resource(uri, {}, {
        get:{
          method: 'GET',
          isArray: false
        }
      });

      var defferedObject = $q.defer();

      topTenResource.get({}, function(data){
        defferedObject.resolve(data);
      }, function(response){
        defferedObject.reject(response);
      });

      return defferedObject.promise;
    }



    return{
      getTotalPageVisits: getTotalPageVisits,
      getTotalVisitsByHour: getTotalVisitsByHour,
      getUniqueVisitsByHour: getUniqueVisitsByHour,
      getVisitorCount: getVisitorCount,
      getTopTen: getTopTen
    }
  }]);
}());