const express = require('express');
const router = express.Router();
const Cake = require('../modals/Cake');
// const auth = require('../middleware/auth')


router.get('/', (req,res) => {
    Cake.find()
        // .sort({ date: -1 })
        .then(cakes => {
            res.json(cakes)
        })

})

module.exports = router;