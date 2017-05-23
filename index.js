'use strict'

const mongoose = require('mongoose')
const app = require('./config/express')
const confmongoose = require('./config/mongoose')

mongoose.connect(confmongoose.db , (err, res) => {
  if(err) throw err
  console.log('Conexion con la base de datos establecida')

  app.listen(confmongoose.port, () => {
    console.log(`El servidor esta utilizando la siguiente url localhost:${confmongoose.port}`)
  })
})
