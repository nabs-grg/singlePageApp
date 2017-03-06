var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// ***** ROUTING ***** //
// Set the static files directory
app.use(express.static(__dirname + '/public'));

// Catch extraneous GET requests for the HTML page
app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

// ***** LISTEN ***** //
app.listen(port,function(){
	console.log('Server is running on port ' + port + '\n');
})