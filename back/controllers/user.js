const db = require('../models')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            db.user.create({
                email: req.body.email,
                username: req.body.username,
                password: hash
            })
                .then((user) => res.status(200).json({ message: 'Utilisateur créé !', user }))
                .catch((error) => res.status(400).json({ message: 'Email déja utilisé' }))
        })
}

exports.login = (req, res, next) => {
    db.user.findOne({
        where: {
            email: req.body.email
        },
        include: [db.game, db.playedgame]
    })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' })
            }

            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe incorrect' })
                    }
                    res.status(200).json({
                        token: jwt.sign(
                            {
                                userUuid: user.uuid,
                            },
                            process.env.TOKEN_SECRET,
                            { expiresIn: '12h' }
                        ),
                        username: user.username,
                        userId: user.uuid
                    
                    })  
                })
        })
}

exports.findAll = (req, res, next) => {
    db.user.findAll({
        include: [
            db.game,
            db.playedgame
        ]
    })
        .then(users => res.status(200).json({ users }))
        .catch(error => res.status(404).json({ error }))
}