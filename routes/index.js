//imports express creates router
const express = require('express')
const router = express.Router()
//imports model file
const randomWYRQuestion = require('../model/wyr_questions')

//routes homepage
router.get('/', function(req, res, next){
    res.send('Placeholder for homepage')
})

//routes /wyr page
router.get('/wyr', function(req,res,next){
    //const wyr ={
        //'question': 'Have a hippo the size of a rabbit or a rabbit the size of a hippo.',
        //'answer1': 'Hippo size of a rabbit.',
        //'answer2': 'Rabbit the size of a hippo.'
    //}

    const wyr = randomWYRQuestion()

    res.json(wyr)
})

module.exports = router