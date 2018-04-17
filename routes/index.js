// Set up and initiate router
var express = require('express');
var router = express.Router()

// CREATE A USER
router.post('/regist', function (req, res) {
    user_email = req.body.email
    phone = req.body.phone
    admin.auth().createUser({
      email: user_email,
      emailVerified: false,
      phoneNumber: phone,
      password: "secretPassword",
      displayName: "John Doe",
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false
    })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch(function(error) {
        console.log("Error creating new user:", error);
      })
  })
  
  // BASE ROUTES 
  router.get('/Version', function(req, res) {
    var ref = db.ref('DataVersion')
      ref.once('value', function(snapshot) {
      res.json({Version: snapshot.val()})
    })
  })
  
  // BASE ROUTES 
  router.get('/', function(req, res) {
    var ref = db.ref('/')
      ref.once('value', function(snapshot) {
      res.json(snapshot.val())
    })
  })
  module.exports = router