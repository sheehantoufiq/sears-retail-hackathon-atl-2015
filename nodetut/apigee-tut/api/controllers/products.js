'use strict';

var request = require('request');

var api_url = 'API URL GOES HERE';

module.exports = {
	getProducts: getProducts
}

function getProducts(req, res) {
	console.log("Products Bitches!");

	var keyword = req.swagger.params.keyword.value;
	var limit = req.swagger.params.limit.value;

	if (!limit) {
		limit = 20;
	}

	request(api_url, function(error, response, body) {
		if (error) {
			res.send(error);
		} else {
			body = JSON.parse(body);
			var results = [];
			for(var i=0; i<limit; i++) {
				results.push(body.SearchResults.Products[i]);
			}
			res.send(results);
		}
	});

}