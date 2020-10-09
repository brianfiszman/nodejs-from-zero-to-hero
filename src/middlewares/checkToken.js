const jwt = require("jsonwebtoken");
const { secret } = require("../config/env");
const { promisify } = require("util");

const verify = promisify(jwt.verify);

const verifyToken = async (req, res, next) => {
    try {
        const tokenHeader = req.headers['authorization'];

        if (!tokenHeader) return res.status(403).send({message: "Forbidden"});

        
        const [token] = tokenHeader.match(/Bearer.(.+)/).reverse();
        
        req.token = await verify(token, secret);

        console.log("test");

        next();
    } catch(e) {
        console.log(e);
        return res.status(403).send({
            message: "Forbidden"
        });
    }
};

module.exports = { verifyToken };