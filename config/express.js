'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const app = express()
const api = require('../route/route')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'

}))


app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/acceder', (req, res) => {
  res.render('acceder')
})

app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/carta', (req, res) => {
  res.render('carta')
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/Icarta', (req, res) => {
  res.render('Icarta')
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/api/eliminarcarta/', (req, res) => {
  res.render('Dcarta')
})

app.set('view engine', '.hbs')
app.use('/api', api)
app.get('/Rmazo', (req, res) => {
  res.render('Rmazo')
})



module.exports = app
