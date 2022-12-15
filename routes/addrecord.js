const express = require('express');
const router = express.Router();
const Cookie = require('../modals/Role');
// const auth = require('../middleware/auth')


router.post('/',  (req,res) => {
    const {img_path,rname,discp,price,percent} = req.body;

    console.log(rname)

    if(!img_path || !rname || !discp || !price || !percent){
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    const newRole = new Role({
        img_path, 
        name:rname, 
        discp, 
        price,
        percent
    });

    newRole.save()
        .then(role => {
            res.json(role)
        })

})

module.exports = router;