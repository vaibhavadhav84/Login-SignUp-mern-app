const mongoose = require('mongoose');

//username:vaibhavadhav98 & password:QCplY1CHmFcRxMPj

const mongo_url= process.env.MONGO_CONN;

mongoose.connect(mongo_url)
     .then(()=>{
        console.log("Connected to MongoDB");
     }).catch((err)=>{
        console.log("MongoDB Connection error:",err);
     })