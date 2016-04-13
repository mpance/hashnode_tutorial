var express = require('express');
var app = express();

app.use(express.static('static'));

var bugData = [
	{ id: 1, priority:"P1", status:"Open", owner:"Ravan", title:"App crashes on open" },
	{ id: 2, priority:"P2", status:"New", owner:"Eddie", title:"Misaligned border on panel"}
];

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Stated server at port", port);
});

app.get('/api/bugs', function(req, res) {
	res.status(200).send(JSON.stringify(bugData));
});
