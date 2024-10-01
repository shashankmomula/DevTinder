
const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://shashankmomula4:5W1ogqBX3uAF8t8R@namastenode.jptlt.mongodb.net/devTinder");
};

module.exports = connectDB;
