'use strict'

const User = require('../models/user')
const bcrypt = require('bcryptjs')


function registrarse (req, res) {

  var salt = bcrypt.genSaltSync(14)
  var password = bcrypt.hashSync(req.body.password, salt)

  const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: password
    })

    user.save ((err) => {
      if(err) res.status.send({message: `Error al crear el usuario: ${err}`})

      return res.redirect('/../acceder')
      return res.status(200).send({user})



    })
}

function acceder (req, res) {

 User.findOne({ email: req.body.email}, (err, user) => {
   User.findOne({ password: req.body.password}, (err, user) => {
  if (err) return res.status(500).send({message: err})
  if(!user) return res.status(404).send({message: 'No existe el usuario'})

  req.user = user
  res.status(200).send({
    message: 'Has accedido correctamente',
  })
})
})
}

  function logout (req, res){
    req.logout();
    res.redirect('/acceder')

  }

module.exports = {
registrarse,
acceder,
logout

}
