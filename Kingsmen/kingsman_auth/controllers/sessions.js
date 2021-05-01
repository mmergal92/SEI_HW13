//Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Create a new user
router.get('/new', (req,res) =>{
    res.render('sessions/new.ejs')
    // req.session.anyProperty = "any value"
})

// router.get('/retrieve', (req, res) =>{
//     if (req.session.anyProperty === "password"){
//         console.log('it matches')
//     } else {
//         console.log('not a match')
//     }
//     res.redirect('/')
// })

router.post('/', (req,res)=>{
    User.find({})
    console.log(req.body.password)
    User.find({}, (error, getLog)=>{
        console.log(getLog.username)
    })
    User.find(req.body, (error, cretedLog)=>{
        res.redirect('/')
    })
})

//export
module.exports = router;