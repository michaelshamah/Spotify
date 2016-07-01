const router = require('express').Router();
const { createUser, loginUser } = require('../models/user');

router.get('/new', function(req,res) {
  res.render('user/new');
});

router.post('/new', createUser, function(req,res) {
  console.log(req.body);
  res.redirect('login');
});

router.get('/login', function(req,res) {
  res.render('user/login');
});

router.post('/login', loginUser, function(req,res) {
  console.log('hello')
  console.log(res.user);
  req.session.user = res.user;

  req.session.save(function(err) {
    if(err) throw err;
    res.redirect('/search');
  });
});

router.delete('/logout', function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/search');
  });
});

module.exports = router;
