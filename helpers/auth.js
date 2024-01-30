const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if(token) {
            token = token.split(' ')[1]
            let verification = jwt.verify(token, process.env.SECRET_KEY)
            req.userId = verification._id;
        } else {
            res.status(401).json({message: "UnAuthorised"})
        }
        next()
    } catch(error) {
        console.error(error);
        return res.status(401).json({message: "UnAuthorised"})
    }
}

module.exports = authenticate