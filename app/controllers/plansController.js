const Plan = require('../models/plan')
const upload = require('../middlewares/upload')

module.exports.list = (req,res) => {
    Plan.find()
    .then((plan)=>{
        res.json(plan)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    const body = req.body
    console.log(req.file)
    if(req.file) {
        
        body.image = req.file.filename
    }

    const plan = new Plan(body)
    
    plan.save()
    .then((plan)=>{
        res.json(plan)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Plan.findById(id)
    .then((plan)=>{
        res.json(plan)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Plan.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((plan) => {
            if (plan) {
                res.json(plan)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.destory = (req,res) => {
    const id = req.params.id
    Plan.findByIdAndDelete(id)
    .then((plan)=>{
        res.json(plan)
    })
    .catch((err)=>{
        res.json(err)
    })
}