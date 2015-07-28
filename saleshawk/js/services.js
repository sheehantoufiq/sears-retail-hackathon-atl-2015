'use strict';

var app = angular.module('SaleshawkApp.services', []);

app.value('version', '0.1');

app.factory('Merchants', ['$firebase', 'FIREBASE_URL', function($firebase, FIREBASE_URL){
	var Merchant = {

	}
	return Merchant;
}]);

app.factory('Campaigns', ['Merchants', function(Merchants){

	var campaigns = [];

	function campaign(name, des, prod, img, ad, cust) {
		this.campaign_name = name;
		this.campaign_description = des;
		this.campaign_product = prod;
		this.campaign_image = img;
		this.campaign_ad = ad;
		this.campaign_customers = cust;
	};

	var Campaign = {
		getCampaign: function(id) {
			var current_campaign = "";
			return current_campaign;
		},
		getCampaigns: function() {
			return campaigns;
		},
		setCampaign: function(name, des, prod, img, ad, cust) {
			var newCampaign = new campaign(name, des, prod, img, ad, cust);
			campaigns.push(newCampaign);
		}
	};
	return Campaign;

}]);