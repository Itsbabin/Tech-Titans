const express = require('express');
const User = require('../modules/User');
const route = express.Router();
const {check, validationResult} = require('express-validator');

route.post('/user', [
    // Validate the field
    check('password')
      .isString()
      .isLength({ min: 8 })
      .matches(/[a-zA-Z]/)
      .matches(/\d/)
      .matches(/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/)
      .withMessage('Password must be at least 8 characters long and contain at least one alphabet character, one numeric character, and one special character'),

    check('name')
      .isString()
      .isLength({ min: 8 })
      .withMessage('Name must be at least 3 characters long'),

    check('email')
      .isEmail()
      .withMessage('enter a valid email'),

  ], (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
        .then((user) => {
            res.status(200).json({saved: user});
        })
        .catch((err) => {
          res.status(400).json({error: "this email is already register"});
        })
    })
  
module.exports = route;