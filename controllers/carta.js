'use strict'

const Carta = require('../models/carta');

function getCarta(req, res) {

  let cartaId = req.params.cartaId

  Carta.findById(cartaId, (err, carta) => {
    if (err) return res.status(500).send({message: `Error al realizar la peticion de la carta: ${err}`})
    if (!carta) return res.status(404).send({message: `La carta no existe`})

    res.status(200).send({ carta })
  })

}

function getCartas(req, res) {

  Carta.find({}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function saveCarta(req, res) {

  console.log('POST /api/Icarta')
  console.log(req.body)

    let carta = new Carta();
    carta.nombre = req.body.nombre
    carta.imagen = req.body.imagen
    carta.coste = req.body.coste
    carta.categoria = req.body.categoria

    carta.save((err, cartaAlmacenada) => {
      if (err) res.status(500).send({message: `Error al guardar la carta en la base de datos: ${err}`});

      res.status(200).send({carta: cartaAlmacenada});
    })

}

function updateCarta(req, res) {

  let cartaId = req.params.cartaId
  let update = req.body

  Carta.findByIdAndUpdate(cartaId, update, (err, cartaUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto ${err}`})

      res.status(200). send({carta: cartaUpdated})
    })

}

function deleteCarta(req, res) {

  let cartaNombre = req.params.cartaNombre

  Carta.findOne({nombre: cartaNombre}, (err, carta) => {
    if (err) res.status(500).send({message: `Error al eliminar la carta: ${err}`})

    carta.remove(err => {
      if (err) res.status(500).send({message: `Error al eliminar la carta: ${err}`})
      res.status(200).send({message: 'Carta eliminada de la base de datos'})
    })
  })

}

function randomCarta(req, res) {

  Carta.find({}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`})
    if (!cartas) return res.status(404).send({message: `No existen cartas`})

  res.status(200).send({cartas})

  })

}

module.exports = {
  getCarta,
  getCartas,
  saveCarta,
  updateCarta,
  deleteCarta,
  randomCarta

}
