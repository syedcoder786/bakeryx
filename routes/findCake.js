const express = require('express');
const router = express.Router();
const Cake = require('../modals/Cake');


router.post('/',(req,res) => {
    const { id } = req.body
    console.log(id)
    Cake.findById(id)
        // .sort({ date: -1 })
        .then(cake => {
            // console.log(product)
            res.json(cake)
        }).catch(err => {
            console.log(err)
            res.json(err)
        })
            

})

module.exports = router;