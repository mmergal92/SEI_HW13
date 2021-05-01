//Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Create a new user
router.get('/new', (req,res) =>{
    res.render('users/new.ejs')
})

//export
module.exports = router;