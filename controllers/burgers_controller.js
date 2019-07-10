const express = require('express');

// var burger = require('./../models/burger.js');

var router = express.Router();
// const routes = require('./burgers');
var orm = require('./../config/orm')

router.get('/', function(req, res) {

  orm.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});


// router.post('/', function(req, res) {
//   burger.insertOne([
//     'burger_name',
//   ], [
//     req.body.burger_name

//   ], function(data) {
//     res.redirect('/');
//   });
// });


// router.post('/', function(req, res) {

//   burger.updateOne(['burger_name', true], function(data){
//       res.redirect('/');
//   })
//     // devoured: true
// });

// Export routes for the server.js to use.
module.exports = router;



   