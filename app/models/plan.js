const mongoose = require('mongoose')
const Schema = mongoose.Schema
const planSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image: {
         type: String,
         required:true 
          },
    average_macro:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    isVeg:{
        type:String
    }
})


const Plan = mongoose.model('Plan',planSchema)
module.exports = Plan