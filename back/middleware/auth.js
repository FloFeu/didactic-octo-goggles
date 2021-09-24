const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        const userUuid = decodedToken.userUuid

        if ( req.body.userUuid && req.body.userUuid !== userUuid) {
            throw 'User Id non valable ! '
        }
        else {
            next();
        }
    } catch(err) {
        res.status(401).json({ message: 'Requête non authentifiée !'})
    }
}