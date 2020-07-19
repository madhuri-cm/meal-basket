const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.register = (req,res) => {
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password,salt)
        .then((encrypted)=>{
            user.password = encrypted
            user.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err)
            })

        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.adminRegister = (req,res) => {
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password,salt)
        .then((encrypted)=>{
            user.password = encrypted
            user.role = 'admin'
            user.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err)
            })

        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        res.json(err)
    })
    
    
}


module.exports.login = (req,res) => {
    const body = req.body
    User.findOne({email:body.email})
    .then((user)=>{
        if(!user) {
            res.json({
                errors:'invalid user or password'
            })
        }

        bcryptjs.compare(body.password,user.password)
        .then((match)=>{
            if(match) {
                const tokenData = {
                    
                    _id:user._id,
                    email:user.email,
                    username:user.username

                }
                const token = jwt.sign(tokenData,'secret123')
                res.json({
                    token:`Barer ${token}`
                })



            }
            else {
                res.json({
                    errors:'invalid user or password'
                })
            }
        })
    })
}

module.exports.account = (req,res) => {
    res.json(req.user)
}