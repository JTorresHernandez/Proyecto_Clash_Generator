'use strict'

const Carta = require('../models/carta');
const mongoose = require('mongoose');
const User = require('../models/user')
let Usuario;

function GuardarUsuario(req, res) {
  Usuario = req.body.userval;
  res.redirect('/')
  }

function getCartas(req, res) {

  Carta.find({}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});
  res.status(200).send({cartas})

  })

}

function saveCarta(req, res) {


if(Usuario === "admin@gmail.com") {
    let carta = new Carta()
    carta.nombre = req.body.nombre;
    carta.imagen = req.body.imagen;
    carta.coste = req.body.coste;
    carta.categoria = req.body.categoria;

    carta.save((err, cartaAlmacenada) => {
      if (err) res.status(500).send({message: `Error al guardar la carta en la base de datos: ${err}`});
    res.status(200)
    res.redirect('/Icarta')
    })
}else{

  res.redirect('/acceder')
}

}

function guardarMazo(req, res) {


  let guardarMazo = req.body;

 User.findOneAndUpdate({"email" : Usuario}, {"$push": {"Mazo": guardarMazo}},  {"new": true, "upsert": true }, (err, doc) => {
if (err) res.status(500).send({message: `Error al encontrar al usuario: ${err}`})

  return res.status(200);
  })

}


function mazosGuardados(req, res) {

  User.findOne({"email" : Usuario}, "Mazo", (err, Mazo) => {
    if (err) res.status(500).send({message: `No se han encontrado mazos guardados ${err}`})
      res.status(200).send({Mazo})
    })

}


function deleteCarta(req, res) {

if(Usuario === "admin@gmail.com") {
  let cartaNombre = req.body.nombre;

  Carta.findOne({nombre: cartaNombre}, (err, carta) => {
    if (err) res.status(500).send({message: `Error al eliminar la carta: ${err}`})

    carta.remove(err => {
      if (err) res.status(500).send({message: `Error al eliminar la carta: ${err}`})
      res.status(200);
      res.redirect('/Dcarta')
    })
  })
  }else{

    res.redirect('/acceder')
  }
}

function randomCarta(req, res) {

  Carta.findRandom().limit(8).exec(function(err, cartas) {
  if (err) res.status(500).send({message: `Error al randomizar las cartas no legendarias ${err}`})
      res.status(200).send({cartas})
  })

  Carta.syncRandom(function(err, result) {
    if (err) res.status(500).send({message: `Error al sincronizar las cartas ${err}`})
  })
}

function randomSinLegendarias(req, res) {


  var filtro = {categoria: {$in: ["epica","comun","especial"]}}
  Carta.findRandom(filtro).limit(8).exec(function(err, cartas) {
  if (err) res.status(500).send({message: `Error al randomizar las cartas no legendarias ${err}`})
      res.status(200).send({cartas})
  })

  Carta.syncRandom(function(err, result) {
    if (err) res.status(500).send({message: `Error al sincronizar las cartas ${err}`})
  })
}

function popularesMazos8(req, res) {

  Carta.find({'nombre' : {$in: ['caballero', 'pekka', 'tronco', 'bebedragon', 'arqueras', 'mosquetera', 'mago', 'descarga', 'bolafuego']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}
function popularesMazos82(req, res) {

  Carta.find({'nombre' : {$in: ['torreinfernal', 'descarga', 'pandilladuendes', 'bebedragon', 'magoelectrico', 'sabueso', 'tornado', 'esqueletos']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}


function popularesMazos83(req, res) {

  Carta.find({'nombre' : {$in: ['torreinfernal', 'descarga', 'sabueso', 'minero', 'mosquetera', 'sabueso', 'bolafuego', 'ejercitoesqueletos', 'pandilladuendes']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function popularesMazos9(req, res) {

  Carta.find({'nombre' : {$in: ['torreinfernal', 'descarga', 'caballero', 'bebedragon', 'pandilladuendes', 'bolafuego', 'gigante_noble', 'esqueletos']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function popularesMazos92(req, res) {

  Carta.find({'nombre' : {$in: ['pekka', 'descarga', 'tornado', 'caballero', 'mosquetera', 'torreinfernal', 'bolafuego', 'esqueletos']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function popularesMazos93(req, res) {

  Carta.find({'nombre' : {$in: ['torreinfernal', 'gigante_noble', 'pandilladuendes', 'esqueletos', 'mago', 'bebedragon', 'tornado', 'tronco']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function popularesMazos10(req, res) {

  Carta.find({'nombre' : {$in: ['torreinfernal', 'descarga', 'montapuercos', 'pandilladuendes', 'bolafuego', 'esqueletos', 'magoelectrico', 'ejercitoesqueletos', 'pandilladuendes']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function popularesMazos102(req, res) {

  Carta.find({'nombre' : {$in: ['montapuercos', 'rayo', 'minero', 'mosquetera', 'esqueletos', 'tornado', 'ejercitoesqueletos', 'pandilladuendes']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}

function popularesMazos103(req, res) {

  Carta.find({'nombre' : {$in: ['descarga', 'pekka', 'minero', 'mago', 'tornado', 'bolafuego', 'esqueletos', 'pandilladuendes']}}, (err, cartas) => {
    if (err) return res.status(500).send({message: `Error al realizar las peticiones de las cartas: ${err}`});
    if (!cartas) return res.status(404).send({message: `No existen cartas`});

  res.status(200).send({cartas})

  })

}


module.exports = {
  mazosGuardados,
  getCartas,
  saveCarta,
  guardarMazo,
  deleteCarta,
  randomSinLegendarias,
  popularesMazos8,
  popularesMazos82,
  popularesMazos83,
  popularesMazos9,
  popularesMazos92,
  popularesMazos93,
  popularesMazos10,
  popularesMazos102,
  popularesMazos103,
  GuardarUsuario,
  randomCarta

}
