
const db = require('../models')

exports.addPlayed = (req, res, next) => {

    const gameUuid = req.params.uuid;
    const { userUuid } = req.body;
    console.log(gameUuid);
    try {
        db.user.findOne({
            where: {
                uuid: userUuid
            }
        })
            .then((user) => {
                db.game.findOne({
                    where: {
                        uuid: gameUuid
                    }
                })
                    .then((game) => {
                        db.playedgame.create({
                            userId: user.id,
                            gameId: game.id
                        })
                    })
                    .then(response => res.status(200).json({ response }))
            })
            // .then((user) => {
            //     db.game.findOne({
            //         uuid: gameUuid
            //     })
            // })
            // .then((game) => {
            //     db.playedgame.create({
            //         userId: user.id,
            //         gameId: game.id
            //     })
            // })
            .catch((error) => res.status(404).json({ error, message: 'Utilisateur non trouvé !' }))
    } catch (err) {
        console.log(err)
        res.status(400)
    }

}