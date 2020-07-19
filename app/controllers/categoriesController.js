const Category = require('../models/category')


module.exports.list = (req,res) => {
    Category.find()
    .then((Category)=>{
        res.json(Category)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.create = (req,res) =>{
    const body = req.body
    const category = new Category(body)
    category.save()
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Category.findById(id)
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const body = req.body
    const id = req.params.id
    Category.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destory = (req,res) => {

    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then(()=>{
        res.json({
            message:'deleted Successfully!!'
        })


    })
    .catch((err)=>{
        res.json(err)
    })
}