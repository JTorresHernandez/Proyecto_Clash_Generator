'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
require('../middlewares/passport')(passport)

const app = express()
const api = require('../route/route')

app.use(cookieParser())
app.use(session({
  secret: 'eyJzdWIiOiJFbFF1ZVNlRnVFYVNlVmlsTGFQZVJkSW9TdVNpTGxhIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('imagenes'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'

}))

//app.set('view engine', '.hbs')
//app.use('/api', api)
//app.get('/Mguardado', (req, res) => {
//  res.render('MGuardados', {
//    cuenta: req.isAuthenticated(),
//    user: req.user
//  })
//})
app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/Gusuario', (req, res) => {
  res.render('GuardarUsuario', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/registrarse', (req, res) => {
  res.render('Registrarse', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/acceder', (req, res) => {
  res.render('acceder', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})

app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/carta', (req, res) => {
  res.render('carta', {
    cuenta: req.isAuthenticated(),
    user: req.user

  })
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/Icarta', (req, res) => {
  res.render('Icarta', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/Dcarta', (req, res) => {
  res.render('Dcarta', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})


app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/', (req, res) => {
  res.render('Rmazo', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/Pmazos', (req, res) => {
  res.render('Pmazos', {
    cuenta: req.isAuthenticated(),
    user: req.user
  })
})

module.exports = app
