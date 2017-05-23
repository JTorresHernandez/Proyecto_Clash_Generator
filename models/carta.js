'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartaSchema = Schema({
  nombre: String,
  imagen: String,
  coste: Number,
  categoria: {type : String, enum: ['legendaria', 'epica', 'especial', 'comun']}
})

module.exports = mongoose.model('Carta', CartaSchema)
