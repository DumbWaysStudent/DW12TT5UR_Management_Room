const jwt = require('jsonwebtoken')
const models = require('../models')
const order = models.orders
const room = models.rooms
const customer = models.customer

//get semua Checkin
exports.getCheckin = (req, res) => {
    order.findAll({
        attributes: ['id', 'is_done', 'is_booked', 'duration', 'order_end_time'],
        include: [{
            model: room,
            as: 'roomsID',
            attributes: ['name', 'id'],
        },
        // {
        //     model: customer,
        //     as: 'customerID',
        //     attributes: ['name', 'id', 'identity_number', 'phone_number', 'image'],
        // },
    ],
    }).then(result=>res.send(result))   
}

    //CREATE MY Room
    exports.storeCheckin = (req, res) => {
    const {room_id, customer_id, duration, order_end_time, is_booked, is_done} = req.body;
    order.create({
        room_id,
	    customer_id,
	    duration,
	    order_end_time,
	    is_booked,
	    is_done
    }).then(result => res.send(result));
}

//UPDATE MY ROOM
 exports.checkout = (req, res) => {
    const {is_booked, is_done} = req.body
    order.update({
        is_booked,
	    is_done
    },
    {
        where:{id: req.params.id},
    }).then(res.send(req.body))
}