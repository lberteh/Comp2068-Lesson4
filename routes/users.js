var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var users = ['Mackenzie', 'Lucas', 'Sarah'];
  res.render('users',
    { title: 'User List',
      users: users
    });
});

module.exports = router;
