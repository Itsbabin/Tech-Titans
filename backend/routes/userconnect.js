const express = require('express');
const route = express.Router();

route.get('/user',(req,res)=>{
    res.send("this is user authentication");
})

module.exports = route;