const jwt = require('jsonwebtoken')
const models = require('../models')
const customer = models.customers


//get semua Room
exports.getCustomer = (req, res) => {
    customer.findAll().then(item=>res.send(item));
}

 //CREATE MY Room
 exports.storeCustomer = (req, res) => {
    const {name, identity_number, phone_number, image} = req.body;
    customer.create({
        name,
        identity_number,
        phone_number,
        image
    }).then(result => res.send(result));
}

//UPDATE MY CUSTOMER
exports.updateCustomer = (req, res) => {
    const {name, identity_number, phone_number, image} = req.body
    customer.update({
        name,
        identity_number,
        phone_number,
        image
    },
    {
        where:{id: req.params.id_cutomer},
    }).then(res.send(req.body))
}