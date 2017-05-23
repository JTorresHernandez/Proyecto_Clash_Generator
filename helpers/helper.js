'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/mongoose')

function crearToken(user) {
  const payload = {
    sub: user._id,
    iat: moment().unix() ,
    exp: moment().add(2,'days').unix()
  }
  return jwt.encode(payload, config.TOKEN_SECRETO)
}

function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try{
      const payload = jwt.decode(token, config.TOKEN_SECRETO)
      if (payload.exp <= moment().unix()){
        reject({
          status:401,
          message: 'El token ha expirado'
        })
      }
      resolve(payload.sub)
    } catch(err){
      reject({
        status: 500,
        message: 'Token invalido'
      })
    }

  })
  return decoded
}

module.exports = {
  crearToken,
  decodeToken
}
