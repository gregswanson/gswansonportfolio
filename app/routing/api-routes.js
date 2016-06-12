// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var portfolioimg 	= require('../data/portfolioimg.js');
var path 			= require('path');
var nodemailer 		= require('nodemailer');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api', function(req, res){
		res.json(portfolioimg);
	});


	app.post('/', function (req, res) {
		console.log(req.body);
	    var smtpTransport = nodemailer.createTransport('SMTP', {
	      service: 'Gmail',
	      auth: {
	        user: 'gregwebcontact@gmail.com',
	        pass: 'serpico2000'
	      }
	    });

	    smtpTransport.sendMail({
	       from: req.body.email, // sender address
	       to: 'gregswanson78@gmail.com', // comma separated list of receivers
	       subject: 'portfolio email from ' + req.body.subject, // Subject line
	       text: 'New message from: ' + req.body.email + ' : ' + req.body.mess // plaintext body
	    }, function(error, response){
	       if(error){
	           console.log(error);
	       }else{
	           console.log("Message sent: " + response.message);
	       }
	    });
	});

	// app.get('/api/waitlist', function(req, res){
	// 	res.json(waitListData);
	// });

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	// app.post('/api/tables', function(req, res){

	// 	// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
	// 	// It will do this by sending out the value "true" have a table 
	// 	if(tableData.length < 5 ){
	// 		tableData.push(req.body);
	// 		res.json(true); // KEY LINE
	// 	}

	// 	// Or false if they don't have a table
	// 	else{
	// 		waitListData.push(req.body);
	// 		res.json(false); // KEY LINE
	// 	}

	// });

	// // ---------------------------------------------------------------------------
	// // I added this below code so you could clear out the table while working with the functionality.
	// // Don't worry about it!

	// app.post('/api/clear', function(req, res){
	// 	// Empty out the arrays of data
	// 	tableData = [];
	// 	waitListData = [];

	// 	console.log(tableData);
	// })
}