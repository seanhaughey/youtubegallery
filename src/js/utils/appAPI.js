var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
	saveVideo: function(video){
		console.log('API called...');
		this.firebaseRef = new Firebase("https://youtubegallery11.firebaseio.com/videos");
		this.firebaseRef.push(video);
	}
}