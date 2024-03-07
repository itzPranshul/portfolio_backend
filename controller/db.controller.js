const db_model = require("../model/db.model")

exports.db_controller = (req,res)=>{
    try{
        req_body = req.body
        reqObj = {
            name : req_body.name,
            email : req_body.email,
            message : req_body.message
        }
        const obj_created = db_model.create(reqObj)
        const resObj = {
            name : obj_created.name,
            email : obj_created.email,
            message : obj_created.message 
        }
        res.status(501).send({
            message: "user registered"
        })
    }catch(error){
        res.status(401).send({
            message : "errror happend while registering the user"
        })
    }
}

