var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
	price: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
	description: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
	imageUrl: {
		type: String,
		required: true,
		max: 255,
		min: 6
	},
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;