const express = require('express');
const router = express.Router();
const Cookie = require('../modals/Cookie');


router.post('/',(req,res) => {
    const { id } = req.body
    console.log(id)
    Cookie.findById(id)
        // .sort({ date: -1 })
        .then(cookie => {
            // console.log(product)
            res.json(cookie)
        }).catch(err => {
            console.log(err)
            res.json(err)
        })
            

})

module.exports = router;