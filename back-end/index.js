require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const cors = require('cors')
const AppsConst = require('./share/AppsConst')

// routes
const AuthApi = require('./api/auth.route')

const BrandApi = require('./api/brand.route')

// get db connection
require("./config/database").connect();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express()
app.use(cors(corsOptions))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: (process.env.SESSION_SECURE === 'true') ? true : false,
        httpOnly: true
    }
}))

app.use(morgan('dev'))
app.use(express.json())

app.get('/', function (request, response) {
    return response.status(200).send('It works !')
})

app.use('/',AuthApi)
app.use('/brand', BrandApi)

app.listen(process.env.PORT, () => {
    console.log('Server running on http://127.0.0.1:' + process.env.PORT)
})
