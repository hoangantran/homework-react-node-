const router = require('express').Router();
const Product = require('../model/products.model');

router.get('/all', async (req, res) => {
	const products = await Product.find();
	res.send(products);
});

module.exports = router;