'use strict'

const express = require('express')
const CartaController = require('../controllers/carta')
const UserController = require('../controllers/user')
const passport = require('passport')
const auth = require('../middlewares/auth')
const api = express.Router()



api.get("/carta", CartaController.getCartas)
api.get("/Mguardados", CartaController.mazosGuardados)
api.post("/Gusuario", CartaController.GuardarUsuario)
api.post("/Icarta",auth.isLogged, CartaController.saveCarta)
api.post("/Gmazo", CartaController.guardarMazo)
api.post("/Dcarta",auth.isLogged, CartaController.deleteCarta)
api.post("/registrarse", UserController.registrarse)
api.post("/acceder", passport.authenticate('local',{
  successRedirect: '/Gusuario', failureRedirect: '../acceder'
}))
api.get("/Rmazo", CartaController.randomCarta)
api.get("/RSLmazo", CartaController.randomSinLegendarias)
api.get("/Pmazos8", CartaController.popularesMazos8)
api.get("/Pmazos82", CartaController.popularesMazos82)
api.get("/Pmazos83", CartaController.popularesMazos83)
api.get("/Pmazos9", CartaController.popularesMazos9)
api.get("/Pmazos92", CartaController.popularesMazos92)
api.get("/Pmazos93", CartaController.popularesMazos93)
api.get("/Pmazos10", CartaController.popularesMazos10)
api.get("/Pmazos102", CartaController.popularesMazos102)
api.get("/Pmazos103", CartaController.popularesMazos103)
api.get("/logout",auth.isLogged, UserController.logout)

/*
api.get("/private", auth, (req, res) => {
  res.status(200).send({ message: 'Acceso concecido'})
})
*/
module.exports = api
