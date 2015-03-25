//Dealing with the connection to the server, retrieving a list of tweets each of which will be represented by a tweet object.

var com || {};
com.apress = com.apress || {};
com.apress.collection = com.apress.collection || {};

com.apress.collection.Timeline = Backbone.Collection.extend({

	//the model the collection uses
	model: com.apress.model.Tweet,
	//the server side url to connect to for the collection
	url: 'http://localhost:8080/timeline',

	initialize: function(options){
	//anything to be defined on construction
	},
});