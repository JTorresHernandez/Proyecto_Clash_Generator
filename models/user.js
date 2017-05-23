'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const UserSchema = new Schema({
  email: { type: String, unique: true, lowecase:true},
  username: String,
  avatar:String,
  contraseña: {type: String, select:false},
  FechaAcceso: {type: Date, default: Date.now()},
  UltimoAcceso: Date
})

UserSchema.pre('save', (next) => {
let user = this
if(!user.isModified('contraseña')) return next()

bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

      bcrypt.hash(user.contraseña, salt, null, (err, hash) => {
        if (err) return next (err)

        user.contraseña = hash
        next()
      })
  })
})

UserSchema.methods.gravatar = function() {
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`

}

module.exports = mongoose.model('User', UserSchema)

/*
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTUxMTU3NjQsImV4cCI6MTQ5NTI4ODU2NH0.wekOoaNWO8sJR18ZLN4MaGNbGoCKnLBImbJjH5sjyzM
token (prueba@gmail.com, prueba, prueba)*/
