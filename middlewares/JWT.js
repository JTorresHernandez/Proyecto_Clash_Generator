'use strict'

const helper = require('../helpers/helper')

function ComprobarAuto(req, res, next) {
  if (!req.headers.authorization) {

    return res.status(403).send({ message: 'No estas autorizado'})
}
  const token = req.headers.authorization.split(' ')[1]

      helper.decodeToken(token)
      .then(response => {
        req.user = response
        next()
      })
      .catch(response => {
        res.status(response.status)
      })
}

module.exports = ComprobarAuto
