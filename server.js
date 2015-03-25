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
var allowCrossDomain = function(req, response, next) {
	response.header('Access-Control-Allow-Origin', "http://localhost");
	response.header('Access-Control-Allow-Methods', 'OPTIONS, GET,PUT,POST,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');

	if ('OPTIONS' == req.method) {
		response.send(200);
	}
	else {
		next();
	}
};

app.configure(function() {
	app.use(allowCrossDomain);
	//Parses the JSON object given in the body request

app.use(express.bodyParser());
});

//start up the app on port 8080
app.listen(8080);