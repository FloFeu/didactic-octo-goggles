const express = require('express')
const router = express.Router()
const playedCtrl = require ('../controllers/playedgame')

router.post('/games/:uuid', playedCtrl.addPlayed)

module.exports = router