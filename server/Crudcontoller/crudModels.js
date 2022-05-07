// const express =require("express");
// const router = express.Router();
// const {model}= require("mongoose")


// const getAll =(model)=>async(req,res)=>{
//     try{
//       const  item =await model.find().lean().exec();
//       console.log(item)
//       return res.send(item)

//     }
//     catch(err){
//         return res.status(500).send(err.message)
//     }
// }


// module.exports=(model)=>({
//     // post:post(model),
//     get:getAll(model)
//     // getOne:getOne(model)
// })