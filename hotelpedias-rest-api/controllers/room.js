const jwt = require('jsonwebtoken')
const models = require('../models')
const room = models.rooms


//get semua Room
exports.getRoom = (req, res) => {
    room.findAll().then(item=>res.send(item));
}

 //CREATE MY Room
 exports.storeMyRoom = (req, res) => {
    room.create(req.body).then(result=> res.send(result))
}

//UPDATE MY ROOM
 exports.updateMyRoom = (req, res) => {
    const {name} = req.body
    room.update({
        name
    },
    {
        where:{id: req.params.id},
    }).then(res.send(req.body))
}