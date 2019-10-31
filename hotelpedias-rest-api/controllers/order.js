const jwt = require('jsonwebtoken')
const models = require('../models')
const order = models.orders
const room = models.rooms
const customer = models.customers

// get semua Checkin
// exports.getCheckin = (req, res) => {
//     order.findAll({
//         attributes: ['id', 'is_done', 'is_booked', 'duration', 'order_end_time'],
//         include: [{
//             model: room,
//             as: 'roomsID',
//             attributes: ['name', 'id'],
//         },
//         {
//             model: customer,
//             as: 'customersID',
//             attributes: ['name', 'id'],
//         }
//     ],
//     }).then(result=>res.send(result))   
// }


// exports.getCheckin = (req, res) => {
//     models.sequelize.query('select rooms.name from rooms left join orders on rooms.id=orders.room_id').then(result=>res.send(result))  
// }


//get semua Checkin
exports.getCheckin = (req, res) => {
    room.findAll({
        // attributes: ['id', 'is_done', 'is_booked', 'duration', 'order_end_time'],
        include: [{
            model: order,
            as: 'order',
            // attributes: ['id'],
            include : [{
                model : customer,
                as : 'customersID',
            }],
        }
        ],
        order: [
            ['name', 'ASC'],
        ],
    }).then(result=>res.send(result))   
}

    //CREATE MY Room
    exports.storeCheckin = (req, res) => {
    const {room_id, customer_id, duration, order_end_time, is_booked, is_done, token} = req.body;
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

//Delete Checkin/checkout
exports.deleteCheckin = (req, res) => {
    order.destroy({
        where : {id: req.params.id}
    }).then(result => res.send({
        message : "Checkin dihapus"
    })
    )
}