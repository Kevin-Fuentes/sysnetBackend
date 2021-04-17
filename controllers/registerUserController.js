
const RegisterUser = require("../models/registerUser");



exports.getUser = async (req, res) => {
     const data = await RegisterUser.find();
     res.send({ok:true, data})
}
 

exports.getUserById = async (req, res) => {
     const id = req.params.id
     const data = await RegisterUser.findById({_id:id})
     res.json({ok:true , data});
 }

 

exports.createUser = async (req, res) => {
     const user = req.body;
     console.log(user);
     const newUser = await new RegisterUser(user);
     await newUser.save()
     res.send({ok:true , message:'Registro Completado'});
}

exports.updateUser = async (req, res) => {
     const id = req.params.id
     let data = req.body
     delete data._id
     await RegisterUser.findByIdAndUpdate(id, data,{new:true});
     res.json({ok:true, message:'Se actualizo Correctamente' });
 }

exports.deleteUser = async (req, res) => {

     await RegisterUser.findByIdAndRemove({_id:req.params.id});
     res.send({ok:true, message:'Eliminado Correctamente'})
 } 