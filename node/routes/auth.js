const router = require('express').Router();
const User = require('../model/users.model');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
	const user = new User({
		'name': req.body.name,
		'email': req.body.email,
		'username': req.body.username,
		'password': req.body.password
	});

	try{
		const saveUser = await user.save();
		res.send('savedUser');
	}
	catch(err){
		res.status(400).send(err);
	}
});

router.post('/login', async (req, res)=> {
	const user = await User.findOne({ username : req.body.username});
	if(!user){
		res.status(400).send('Username not found');
	}
	const token = jwt.sign({_id: user._id}, process.env.TOKEN_KEY);
	res.send(token);
});


module.exports = router;