const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.users

exports.login = (req, res) =>{
    const username = req.body.username
    const password = req.body.password


    user.findOne({where: {username, password}}).then(user=>{

        if(user){
            const token = "Bearer " + jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                username,
                token
            })
        }else{
            res.send({
                error:true,
                message: "Username yang anda masukkan salah!"
            })
        }
    })
 }

 exports.register = ( req, res ) => {
    const token = jwt.sign({ username: req.body.username}, 'my-secret-key')
    const username = req.body.username

    user.findOrCreate({
        where: {username: req.body.username},
        defaults:{
            password: req.body.password,
            // name: req.body.name
        }
    }).then( ([user, created]) => {
        // console.log(user.get
        //     ({ plain: true})
        // )
        if(created) {
            res.send({
                message: 'success',
                username,
                token
            })
        }else{
            res.send({
                message: "Username yang anda masukkan sudah digunakan"
            })
        }
    })

}


//get semua user
exports.getUser = (req, res) => {
    user.findAll().then(item=>res.send(item));
}