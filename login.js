const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');
const { response } = require('express');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'happy_birthday_advertising'
});

const app = express();

app.use(session({
    // word 'secret' is a key to encrypt or decrypt data
    //key should be random that can not be get by someone easily
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static means that data which usually won't change
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
//root
app.get('/', function(request, response) {
    // check if logged in
    if (request.session.loggedin) {
		// redirect to homepage
		response.redirect('/index');
	} else {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
	}
	
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/index');
			} else {
				response.send('<script>alert("Your username or password is incorrect")</script>');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/index', function(request, response) {

	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		// response.redirect( '/index.html');
	response.sendFile(path.join(__dirname + '/index.html'));

	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	// response.end();
});

// app.get('/index', function(request, response) {
//     // check if logged in
//     if (request.session.loggedin) {
// 		// redirect to homepage
// 		response.sendFile(path.join(__dirname + '/index.html'));
// 	} else {
// 	// Render login template
// 	response.send('Please login to view this page!');
// }
	
// });


// Comments
// app.get('/remark', (request, response)=>{
// 	connection.query('SELECT * FROM feedbacks WHERE username = ? AND email = ? AND comments = ?', [username, email, comments], function(error, results) {
// 		if(error) throw error;

// 		response.end();
// });
// });

// app.post('/remark', (request, response)=>{
// 	let username = request.body.username;
// 	let email = request.body.email;
// 	let comments = request.body.comments;
	
// 	connection.query('INSERT INTO feedbacks (username, email, comments) VALUES(?, ?, ?)', [username, email, comments], function(error, results) {
// 		if(error) throw error;

// 		response.write('INSERTED :-)');

		
// });
// });

app.get('/remark', function(request, response) {
    // check if logged in
    if (request.session.loggedin) {
		// redirect to homepage
		response.redirect('/index');
	} else {
	// Render login template
	response.sendFile(path.join(__dirname + '/index.html'));
	}
	
});

app.post('/remark', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let email = request.body.email;
	let comments = request.body.comments;
	if( !username.length||!email.length||!comments.length){
		response.send('<script>alert("Enter valid detail")</script>');
	}
	else{
	// Ensure the input fields exists and are not empty
	if (request.session.loggedin = true) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('INSERT INTO feedback (username, email, comments) VALUES(?, ?, ?)', [username, email, comments], function(error, results) {
		// connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if ( typeof results.insertId !== 'undefined') {

				response.send('thank you');
			} else {
				response.send('<script>alert("Could not insert data")</script>');
			}			
			response.end();
		});
	}else {
		response.send('Please login first');
		response.end();
	}
	} 
});




app.listen(3000);