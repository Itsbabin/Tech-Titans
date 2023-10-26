const express = require('express');
const User = require('../modules/User');
const route = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const secreat = "thisIsSecreat"

route.post('/singin', [
    // Validate the field
    check('password')
        .isString()
        .isLength({ min: 5 })
        .matches(/[a-zA-Z]/)
        .matches(/\d/)
        .matches(/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/)
        .withMessage('Password must be at least 8 characters long and contain at least one alphabet character, one numeric character, and one special character'),

    check('name')
        .isString()
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long'),

    check('email')
        .isEmail()
        .withMessage('enter a valid email'),

], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(req.body.password, salt);

    await User.create({
        name: req.body.name,
        email: req.body.email,
        usertype: req.body.usertype,
        password: passwordHash,
    })
        .then((user) => {
            const userData = user.email
            const token = jwt.sign(userData, secreat)
            res.status(200).json({ token });
        })
        .catch((err) => {
            res.status(400).json({ error: `this email is already register` });
        })
})


route.post('/login', [
    // Validate the field
    check('password')
        .isString()
        .isLength({ min: 8 }),

    check('email')
        .isEmail()
        .withMessage('enter a valid email'),

], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const emailUser = await User.findOne({ email });
    if (!emailUser) {
        return res.status(400).json({ error: "use a right creadential" });
    }
    await bcrypt.compare(password, emailUser.password, async (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Incorrect password' });
        }

        if (result) {
            const token = jwt.sign(email, secreat)
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Incorrect password' });
        }
    });

})

route.post('/', fetchuser, async (req, res) => {

    try {
        const useremail = req.email;
        const user = await User.findOne({ useremail });
        res.status(200).json({ theUser: user });
    } catch (error) {
        res.status(400).json({ errors: "some error occored" });
    }


})

module.exports = route;