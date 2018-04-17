var express = require('express')
var firebase = require('firebase')
var admin = require('firebase-admin')
var bodyParser = require('body-parser')
var dotenv = require('dotenv').config();

var router = require('./routes/index')
var app = express()

var port = process.env.PORT || 1111;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Set Firebase credential and connect to Firebase
var serviceAccount = require("./nodejspractice-4e840-firebase-adminsdk-k4pcq-680712920f");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodejspractice-4e840.firebaseio.com"
})

if(admin.apps !== null) {
    console.log('Connected to Firebase')    
} else {
    console.log('Failed to connect')
}
    
// Get a database reference to our posts
var db = admin.database()

app.use('/api', router)
app.listen(port, function(){
  console.log('Server listening on port', port)
})