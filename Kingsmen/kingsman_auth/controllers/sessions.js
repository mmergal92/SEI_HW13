//Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Create a new user
router.get('/new', (req,res) =>{
    res.render('sessions/new.ejs')
})

router.post('/', (req,res)=>{
    User.create(req.body, (error, createdLog) => {
        res.redirect('/')
    })
})

//export
module.exports = router;