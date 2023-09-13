const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const route = express.Router();
const DataUser1 = require('../modules/DataUser1');
const User = require('../modules/User');
const LawyerData = require('../modules/LawyerData');
const { check, validationResult } = require('express-validator');


route.get('/getuserdata/client',fetchuser, async (req ,res) => {
    try {       
        const datas = await DataUser1.find({email: req.email})
        res.status(200).json(datas);
     }
     catch (error) {
        res.status(400).json({ error: `some error occored ${err}`});
    }
})
route.get('/getuserdata/lawyer',fetchuser, async (req ,res) => {
    try {       
        const datas = await DataUser1.find({lawyer: req.email})
        res.status(200).json(datas);
     }
     catch (error) {
        res.status(400).json({ error: `some error occored ${err}`});
    }
})


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

    const name =  User.find({email : req.user});

    const isClient = await  DataUser1.find({lawyer : req.body.lawyer});
        let count = isClient.find(item => item.email === req.user);
    
    if(!count){
        await LawyerData.create({
            client: req.user,
            lawyer: req.body.lawyer,
            status: true,
        })
            .catch((err) => {
                res.status(400).json({ error: `some error occored ${err}`});
            })
    }
    await DataUser1.create({
        name: name.name,
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
            res.status(200).json({ dataOfuser1 });
        })
        .catch((err) => {
            res.status(400).json({ error: `some error occored ${err}`});
        })
})

module.exports = route;