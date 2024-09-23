const express = require('express');

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from the server");
});

app.listen(4444,()=>{
    console.log("Server is successfullly listening on port 4444");      
});