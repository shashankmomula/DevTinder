
const adminAuth = (req,res,next)=>{
    console.log("admin getting authenticated");

    const token = "xyz";
    const isAuthenticated = token === "xyz";

    if(!isAuthenticated){
        res.status(401).send("Admin unauthorized");
    }
    else{
        next();
    }
};


const userAuth = (req,res,next)=>{
    console.log("User getting authenticated");

    const token = "xyz";
    const isAuthenticated = token === "xyz";

    if(!isAuthenticated){
        res.status(401).send("user unauthorized");
    }
    else{
        next();
    }
};

module.exports = {adminAuth,userAuth};