const express = require('express');
const router = express.Router();
const Role = require('../modals/Role');


router.post('/',(req,res) => {
    const { id } = req.body
    console.log(id)
    Role.findById(id)
        // .sort({ date: -1 })
        .then(role => {
            // console.log(product)
            res.json(role)
        }).catch(err => {
            console.log(err)
            res.json(err)
        })
            

})

module.exports = router;