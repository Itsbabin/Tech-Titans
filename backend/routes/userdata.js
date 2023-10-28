const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const route = express.Router();
const DataUser1 = require('../modules/DataUser1');
const User = require('../modules/User');
const { check, validationResult } = require('express-validator');

// to show clients their requested case
route.get('/getuserdata/client',fetchuser, async (req ,res) => {
    try {       
        const datas = await DataUser1.find({email: req.user})
        res.status(200).json(datas);
     }
     catch (error) {
        res.status(400).json({ error: `some error occored ${err}`});
    }
})

// to show lawyers thier cases
route.get('/getuserdata/lawyer',fetchuser, async (req ,res) => {
    try {       
        const datas = await DataUser1.find({lawyer: req.user})
        res.status(200).json(datas);
     }
     catch (error) {
        res.status(400).json({ error: `some error occored ${err}`});
    }
})

// this rpout is use to creat a case file datas
route.post('/creatuserdata',fetchuser, [
    // Validate the field
    check('type')
        .isString()
        .isLength({ min: 4 }),

    check('description')
        .isString()
        .withMessage('enter a valid description')
        .isLength({ min: 10 }),

] ,async (req ,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    await DataUser1.create({
        name:req.body.name,
        email: req.user,
        type: req.body.type,
        lawyer: req.body.lawyer,
        description: req.body.description,
        address: req.body.address,
        court: req.body.court,
        section: "todo",
        hearing: "todo",
    })
        .then((dataOfuser1) => {
            res.status(200).json({ data : dataOfuser1});
        })
        .catch((err) => {
            res.status(400).json({ error: `some error occored ${err}`});
        })
})

module.exports = route;