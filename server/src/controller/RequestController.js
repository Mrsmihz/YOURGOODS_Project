const Request = require('../model/Request')

exports.createRequest = async (req, res) => {
   try{
       var request = new Request()
       let result = await request.createRequest(req.file.path, req.body.status, req.body.customer_id, req.body.operator_id)
       res.status(201).send({
           request_id:result
       })
   }
   catch(err){
       console.log(err)
       res.sendStatus(400)
   }
}
exports.getRequestById = async (req, res) => {
    try{
        var request = new Request()
        var id = req.params.id
        let result = await request.getRequestById(id)
        res.status(200).send(result)
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
    }
}

exports.getAllRequestByCustomerId = async(req, res) => {
    try{
        var request = new Request()
        var customer_id = req.session.user.id
        let result = await request.getAllRequestByCustomerId(customer_id)
        res.status(200).send(result)
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
    }
}

exports.deleteRequestById = async (req, res) => {
    try{
        var request = new Request()
        var id = req.params.id
        await request.deleteRequestById(id)
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
    }
}

exports.editRequest = async (req, res) => {
    try{
        var request = new Request()
        var id = req.params.id
        await request.editRequest(req.file.path, id)
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
    }
}

