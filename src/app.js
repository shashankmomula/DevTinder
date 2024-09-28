const express = require('express');
const {adminAuth,userAuth} = require("./middlewares/auth");

const app = express();

app.use("/user",userAuth);

app.use("/admin",adminAuth);

app.get("/user/getUserData",(req,res)=>{
    res.send("User data added");
});

app.get("/admin/getAllData",(req,res)=>{
    res.send("Admin data added succesfully");
});

app.get("/admin/DeleteAdmin",(req,res)=>{
    res.send("Admin Deleted");
});

app.listen(4444,()=>{
    console.log("Server is successfullly listening on port 4444"); 
        
});