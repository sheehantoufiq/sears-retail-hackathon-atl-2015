'use strict';

/* Controllers */

var app = angular.module('SaleshawkApp.controllers', []);

app.controller('MainController', ['$scope', '$location', function($scope, $location){
}]);

app.controller('AuthController', ['$scope', '$rootScope', '$location', '$firebaseAuth', 'FIREBASE_URL', function($scope, $rootScope, $location, $firebaseAuth, FIREBASE_URL){

  var ref = new Firebase(FIREBASE_URL);

	$scope.twitterLogin = function() {
	  ref.authWithOAuthPopup("twitter", function(error, authData) {
	  	if (error) {
	  		console.log("Login Failed!", error);
	  	} else {
				console.log("Authenticated successfully:", authData);
				console.log("Authenticated successfully:", authData.twitter.username);
				var isNewUser = true;
				ref.onAuth(function(authData) {
				  if (authData && isNewUser) {
				    ref.child("users").child(authData.uid).set(authData);
				  }
				});
				$location.path('/dashboard');
				$rootScope.$apply();
	  	}
	  });
	};

}]);

app.controller('CampaignsController', ['$scope', '$location', '$http', 'Campaigns', 'API_KEY', function($scope, $location, $http, Campaigns, API_KEY){

	$scope.campaign = {
		campaign_owner: "",
		campaign_name: "",
		campaign_description: "",
		campaign_product: "",
		campaign_image: "",
		campaign_ad: "",
		campaign_customers: "",
		campaign_keyword: ""
	};

	$scope.campaigns = Campaigns.getCampaigns();

	$scope.createCampaign = function() {
		var name = $scope.campaign.campaign_name;
		var des = $scope.campaign.campaign_description;
		var prod = $scope.campaign.campaign_product;
		var img = $scope.campaign.campaign_image;
		var ad = $scope.campaign.campaign_ad;
		var cust = $scope.campaign.campaign_customers;

		Campaigns.setCampaign(name, des, prod, img, ad, cust);

		$scope.campaign = {
			campaign_name: "",
			campaign_description: "",
			campaign_product: "",
			campaign_image: "",
			campaign_ad: "",
			campaign_customers: "",
			campaign_keyword: ""
		};
		window.open("http://twitter.com/home?status=@CaringtonWhit @Iukeshairgame @allyrenda @gabby_duraan Sorry to hear that, Check out our new Kenmore! http://www.sears.com/43869209/p-02280379000P");
		$location.path('/campaigns');
	};
	$scope.products = [];

	$scope.getProducts = function() {
		$http.get('http://api.developer.sears.com/v2.1/products/search/Sears/json/keyword/%7B' + $scope.campaign.campaign_keyword + '%7D?apikey=' + API_KEY).
		  success(function(data, status, headers, config) {
		  	if ($scope.products !== null) {
		  		$scope.products = [];
		  	}
				for(var i=0; i<10; i++) {
					$scope.products.push(data.SearchResults.Products[i]);
				}		  
			}).
		  error(function(data, status, headers, config) {
				console.log("Error: " + status);
		  });
	}
	$scope.nextOne = function() {
		$scope.campaign.campaign_ad = "http://sears.com" + $scope.campaign.campaign_product;
		$location.path('/create-campaign-2');
	}
	$scope.getTweets = function() {
		$http.get(twitterCall).
		  success(function(data, status, headers, config) {
		  	console.log(data);
			}).
		  error(function(data, status, headers, config) {
		  	console.log("Error: " + data);
		});	
	}
}]);