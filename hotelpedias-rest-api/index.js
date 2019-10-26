const express = require('express');
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express();
const port = 5000

//controllers
const AuthController = require('./controllers/auth')
const RoomController = require('./controllers/room')
const CustomerController = require('./controllers/customer')
const OrderController = require('./controllers/order')


//middlewares
const {authenticated} = require('./middleware');


app.use(bodyParser.json())




app.group("/api/v2", (router) => {

    //AUTH
    //login
    router.post('/login', AuthController.login)
    //register
    router.post('/register', AuthController.register)
    //Get semua user
    router.get('/user', AuthController.getUser)


    //ROOM
    //GET ROOM
    router.get('/rooms', RoomController.getRoom)
    //ADD ROOM
    router.post('/rooms', authenticated, RoomController.storeMyRoom)
    //UPDATE MY ROOM
    router.patch('/rooms/:id', authenticated, RoomController.updateMyRoom)


    //CUSTOMER
    //GET CUSTOMER
    router.get('/customers', authenticated, CustomerController.getCustomer)
    //ADD CUSTOMER
    router.post('/customers', authenticated, CustomerController.storeCustomer)
     //EDIT CUSTOMER
    router.patch('/customers/:id_customer', authenticated, CustomerController.updateCustomer)


    //Checkin
    router.get('/checkin', OrderController.getCheckin)
    //ADD CHECKIN
    router.post('/orders', authenticated, OrderController.storeCheckin)
    //CHECKOUT
    router.patch('/orders/:id', authenticated, OrderController.checkout)

})

app.listen(port, ()=> console.log(`listen on port ${port}!`))