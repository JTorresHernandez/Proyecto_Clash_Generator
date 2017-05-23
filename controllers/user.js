'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const helper = require('../helpers/helper')

function registrarse (req, res) {
  const user = new User({
      email: req.body.email,
      username: req.body.username,
      contraseña: req.body.contraseña
    })
    user.save ((err) => {
      if(err) res.status.send({message: `Error al crear el usuario: ${err}`})

      return res.status(200).send({token: helper.crearToken(user) })

    })
}

function acceder (req, res) {
 User.find({ email: req.body.email}, (err, user) => {
  if (err) return res.status(500).send({message: err})
  if(!user) return res.status(404).send({message: 'No existe el usuario'})

  req.user = user
  res.status(200).send({
    message: 'Has accedido correctamente',
    token:  helper.crearToken(user)

  })
})
}

module.exports = {
acceder,
registrarse

}
