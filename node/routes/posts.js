const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/users.model');

router.post('/', verify, async (req, res)=>{
	const user = await User.find({ _id: req.user });
	res.send(user);
});

module.exports = router;