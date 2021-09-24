const db = require('../models')
const { Op } = require('sequelize')
const fs = require('fs');


exports.addOne = (req, res, next) => {
    const { userUuid, name } = req.body;
    try {
        db.user.findOne({
            where: {
                uuid: userUuid
            }
        })
            .then((user) => {
                db.game.create({
                    name: name,
                    userId: user.id
                })

                    .then((game) => res.status(200).json({ message: 'Jeu enregistré', game }))
                    .catch((error) => res.status(400).json({ error }))
            })

    } catch (error) {
        res.status(500).json({ error })
    }
}

exports.getAll = (req, res, next) => {
    db.game.findAll({
        include: [db.user, db.playedgame]
    })
        .then((games) => res.status(200).json({ games }))
        .catch((error) => res.status(400).json({ error }))
}

exports.findTerms = (req, res, next) => {

    db.game.findAll({
        where: {
            name: {
                [Op.like]: `%${req.params.name}%`
            }
        }
    })
        .then(response => {
            if (response === null) {
                res.status(404).json({ message: 'Jeu non trouvé' })
            }
            res.status(200).json({ response })
        })
        .catch((error) => res.status(400).json({ error }))
}