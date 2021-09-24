const express = require('express')
const router = express.Router()
const gameCtrl = require ('../controllers/game')

router.post('/', gameCtrl.addOne)
router.get('/:name', gameCtrl.findTerms)
router.get('/', gameCtrl.getAll)

module.exports = router