const express = require('express');
const {adminAuth,userAuth} = require("./middlewares/auth");

const app = express();

// app.use("/user",userAuth);

// app.use("/admin",adminAuth);

app.get("/userdata",(req,res)=>{

    throw new Error("jhfgjhsd");
    res.send("data");
});

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
});

app.listen(4444,()=>{
    console.log("Server is successfullly listening on port 4444"); 
        
});