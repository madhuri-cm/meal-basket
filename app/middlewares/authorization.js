const User = require('../models/user')
const authorizeUser = function(req,res,next){
   
    const {user} =  req
    
    
    if(user.role === 'admin'){
        next()
    }else{
        res.status('401').send('not an admin')
    }
}

module.exports = {
authorizeUser
}