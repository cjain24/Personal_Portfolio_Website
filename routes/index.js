/*
Index.js
Chirag Jain
301307988
September 25th, 2022

*/



var express = require('express');
var router = express.Router();

//This is where all the routes for the index are created
 
/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' }); //renders the home page
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); //another way of rendering the home page
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

module.exports = router;
