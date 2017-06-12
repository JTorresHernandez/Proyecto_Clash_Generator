'use strict'

const mongoose = require('mongoose')
const random = require('mongoose-random')
const Schema = mongoose.Schema

const CartaSchema = Schema({
  nombre: String,
  imagen: String,
  coste: Number,
  categoria: {type : String, enum: ['legendaria', 'epica', 'especial', 'comun']}
})


  CartaSchema.plugin(random, { path: 'r' })

module.exports = mongoose.model('Carta', CartaSchema)
