var restful = require('node-restful');
var mongoose = restful.mongoose;

//var Campaign = require('./campaign');

var merchantSchema = new mongoose.Schema({
	twitter: String,
	campaigns: {
		name: String,
		description: String,
		product: String,
		ad: String,
		customers: String		
	}
	//campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' }]
});

module.exports = restful.model('Merchant', merchantSchema);