require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const path = require('path')
const app = express()
// const cors = require('cors')
const db = require('./models')
const userRoutes = require('./routes/user')
const gameRoutes = require('./routes/game')
const playedRoutes = require('./routes/playedgame')
const { restart } = require('nodemon')


// app.use(cors())
app.use(helmet())
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})

db.sequelize.sync({
    force: false
})

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/auth', userRoutes)
app.use('/games', gameRoutes)
app.use('/played', playedRoutes)



module.exports = app;