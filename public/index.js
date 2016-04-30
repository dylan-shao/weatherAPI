// Code goes here

angular.module('app',[])
  .factory('weatherService',function($http){
    return {
      getWeather: function(cityid){
        var city = cityid; 
        var key = 'f0d98b44eed372f67ec395dd59f53958';
	 return $http.get('http://api.openweathermap.org/data/2.5/weather',{
          params:{
            id: city,
            appid: key
          }
        }).then(function(resp){
          return resp.data.weather[0].description;
        });
        
      }
    }
  })
  
  .controller('WeatherController', function($scope,weatherService){
    $scope.getWeather = function(){
      $scope.weatherDescription = "Fething...";
      weatherService.getWeather($scope.cityid)
        .then(function(data){
          $scope.weatherDescription = data
        }, function(){
          $scope.weatherDescription = "Could not obtain data";
        })
    }
  })
