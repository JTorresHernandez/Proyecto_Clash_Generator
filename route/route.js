'use strict'

const express = require('express')
const CartaController = require('../controllers/carta')
const UserController = require('../controllers/user')
const auth = require('../middlewares/JWT')
const api = express.Router()

api.get("/carta", CartaController.getCartas)
api.get("/carta/:cartaId", CartaController.getCarta)
api.post("/Icarta", CartaController.saveCarta)
api.put("/actualizarcarta/:cartaId", CartaController.updateCarta)
api.delete("/eliminarcarta/:cartaNombre", CartaController.deleteCarta)
api.post("/registrarse", UserController.registrarse)
api.post("/acceder", UserController.acceder)
api.get("/Rmazo", CartaController.randomCarta)


api.get("/private", auth, (req, res) => {
  res.status(200).send({ message: 'Acceso concecido'})
})

module.exports = api
