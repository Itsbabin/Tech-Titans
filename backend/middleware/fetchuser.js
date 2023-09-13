var jwt = require('jsonwebtoken');


const secreat = "thisIsSecreat"

const fetchuser = (req ,res , next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(400).json({ errors: "pleas use a valid token" });
    }
    try {
        const data = jwt.verify(token,secreat);
        req.user = data;
        next();
    } catch (error) {
        res.status(400).json({ errors: "pleas use a valid token" });
    }

}

module.exports = fetchuser;