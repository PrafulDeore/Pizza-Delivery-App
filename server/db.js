const mongoose=require("mongoose")

// var mongoURL="mongodb+srv://PrafulDeore:Anjor143@cluster0.k77jo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

// var db=mongoose.connection;

// db.on("connected",()=>{
//     console.log("mongo Db connection successfull")
// });

// db.on("error",()=>{
//     console.log("mongo Db connection FAIL");})

//     module.exports=mongoose




// 1 -> Create a connection in between node/Express & mongoDB using MONGOOSE atlas

const connect =()=>{          //calling back this function at the last.
    return(   
     mongoose.connect("mongodb+srv://PrafulDeore:Anjor143@cluster0.k77jo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")  //*creating a new db and store the data on Mongodb-ATLAS(Thise url connects our pc to ATLAS)
    )
                                                         
};
module.exports=connect