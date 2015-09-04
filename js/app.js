'use strict';
var angularTipsApp  = angular.module('angularTipsApp',['ngRoute','ngSanitize','newsModule','ui.bootstrap','infinite-scroll']);

//config route
angularTipsApp.config(function($routeProvider){

	$routeProvider
				.when('/',{
					templateUrl:'partials/news.html',
					controller: 'newsController'
				}).when('/auto',{
					templateUrl:'partials/autocomplete.html',
					controller: 'typeController'
				});
});

angularTipsApp.config(function($httpProvider){
	 delete $httpProvider.defaults.headers.common["X-Requested-With"];
});
/*.factory('featureData',function($http){
	return{
		doCrossDomainGet: function() {
                return $http({
                    url:'http://vnexpress.net',
                    method: 'GET'
                })
            }       
	}
});*/



angularTipsApp.factory('FeedService',['$http',function($http){
	return {
		parseFeed : function(url){
			return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	}
}]);