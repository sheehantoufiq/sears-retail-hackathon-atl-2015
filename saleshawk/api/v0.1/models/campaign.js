var restful = require('node-restful');
var mongoose = restful.mongoose;

var campaignSchema = new mongoose.Schema({
	_creator: {type: Number, ref: 'Merchant'},
	name: String,
	description: String,
	product: String,
	ad: String,
	customers: String
});

module.exports = restful.model('Campaign', campaignSchema);