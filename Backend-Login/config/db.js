const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("Connected to db");
        });
    }catch(err){
        console.log("Failed to connect to db:", err);
    }
}

module.exports = connectDB