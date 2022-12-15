const express = require('express');
const router = express.Router();
const Role = require('../modals/Role');
// const auth = require('../middleware/auth')


router.get('/', (req,res) => {
    Role.find()
        // .sort({ date: -1 })
        .then(roles => {
            res.json(roles)
        })

})

module.exports = router;