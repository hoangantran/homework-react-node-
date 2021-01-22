require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const post = 4000;

mongoose.connect(process.env.DB_CONNECT);

const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const portsRoute = require('./routes/posts');

app.use((req, res, next) => {
  res.header({
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin' : '*',
	    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
	    'Access-Control-Allow-Headers': 'Content-Type'
	});
  next();
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', authRoute);

app.use('/product', productRoute);

app.use('/posts', portsRoute);

app.listen(post, () => {
	console.log('hello ansama');
});