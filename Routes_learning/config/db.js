const mongoose = require("mongoose");

//CONNECTING MONGOOSE

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    } 
    catch(erroor){
        console.log(error.message);
    }
};

module.exports = connectDB;
