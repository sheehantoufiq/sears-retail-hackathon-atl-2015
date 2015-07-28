var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Merchant = require('../models/merchant');
var Campaign = require('../models/campaign');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

Merchant.methods(['get', 'put', 'post', 'delete']);
Merchant.register(router, '/merchants/:id/campaigns');

//Campaign.methods(['get', 'put', 'post', 'delete']);
//Campaign.register(router, '/merchants/:id/campaigns');

module.exports = router;