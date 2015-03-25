/** 
* A simple API hosted under localhost:8080/books
*/

var express = require('express')
var app = express();

var Twit = require('twit')

var client = null;

function connectToTwitter() {
	client = new Twit({
		consumer_key: '',
		consumer_secret: '',
		access_token: '',
		access_token_secret:
	});
}

//get the app to connect to twitter 
connectToTwitter();

//additional setup to allow CORS requests