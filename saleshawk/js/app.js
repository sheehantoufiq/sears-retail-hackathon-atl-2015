'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('SaleshawkApp', [
  'ngRoute',
  'firebase',
  'SaleshawkApp.filters',
  'SaleshawkApp.services',
  'SaleshawkApp.directives',
  'SaleshawkApp.controllers'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {templateUrl: 'partials/landing-page.html', controller: 'AuthController'});
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'MainController'});
  $routeProvider.when('/campaigns', {templateUrl: 'partials/campaigns.html', controller: 'CampaignsController'});
  $routeProvider.when('/create-campaign-1', {templateUrl: 'partials/create-campaign-1.html', controller: 'CampaignsController'});
  $routeProvider.when('/create-campaign-2', {templateUrl: 'partials/create-campaign-2.html', controller: 'CampaignsController'});
  $routeProvider.when('/create-campaign-3', {templateUrl: 'partials/create-campaign-3.html', controller: 'CampaignsController'});
  $routeProvider.when('/campaign', {templateUrl: 'partials/campaign.html', controller: 'CampaignsController'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'MainController'});

  $routeProvider.otherwise({redirectTo: '/'});

}]);

app.constant('FIREBASE_URL', 'https://saleshawk.firebaseio.com/');
app.constant('API_KEY', 'kXhGG5ONgAilAeHzquAcQaNfFH2oCkB1');