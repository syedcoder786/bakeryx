const express = require('express');
const router = express.Router();
const Cookie = require('../modals/Cookie');
// const auth = require('../middleware/auth')


router.get('/', (req,res) => {
    Cookie.find()
        // .sort({ date: -1 })
        .then(cookies => {
            res.json(cookies)
        })

})

module.exports = router;