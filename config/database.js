const mongoose = require('mongoose')
const configDB = () => {
mongoose.connect('mongodb://localhost:27017/new-meal-basket',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})
.then(()=>{
    console.log('connected to the db')
})

.catch((err)=>{
    console.log(err)
})
}

module.exports = configDB