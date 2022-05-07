const express =require("express");
const mongoose =require("mongoose");
const connect= require("./db");
// const Pizza =require("./Models/pizzaModel")
const app=express();
// const crudController =require("./Crudcontoller/crudModels");

const router = express.Router();

app.use(express.json());


// app.get("/pizza",(req,res)=>{

//     res.send("Server Working")
// })

const pizzaSchema =mongoose.Schema({
name:{type:String ,require:true},
variants:[],
prices:[],
category:{type:String ,require:true},
image:{type:String ,require:true},
description:{type:String ,require:true},

    
},{
    timeStamps:true
})

const Pizza=mongoose.model("pizza",pizzaSchema);


app.get("/getpizza",async (req,res)=>{
    try{
        const users=await Pizza.find().lean().exec();  //.lean() will convert Mongoose object into JSON object & .exec()will gives us a full Promise
            return  res.send(users)
    }
    catch(err){
        return res.status(500).send(err.message);
    }

})
const  PORT=process.env.PORT || 5000;
app.listen(PORT, async function(){   
    try{
        await connect()               //we use await here because "mongoose.connect" will returns PROMISE 
        console.log(`Connection Is Succesfull...${PORT}`);
    }
    catch(err){
        console.log("Not Connected to server!",err)
    }
        
})