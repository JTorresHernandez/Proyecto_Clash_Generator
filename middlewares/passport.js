const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/user')

module.exports = function(passport){

  passport.serializeUser(function(user, done){
    done(null, user)
  })

  passport.deserializeUser(function(obj, done){
      done(null, obj)
      /*  db.collection("users").findOne({ _id: mongodb.ObjectId(id) })
    .then(
      doc => done(null, doc),
      reason => done(reason)
    );*/
  })

  passport.use(new LocalStrategy({
    passReqToCallback: true
  }, function(req, email, password, done){

    User.findOne({ email: email}, (err, user) => {
      if (err) {return done(err)}

      if(bcrypt.compareSync(password, user.password)){
        return done(null, user)
      }
    })


}))
}
