'use strict';

/* Filters */

var app = angular.module('SaleshawkApp.filters', []);


app.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
}]);