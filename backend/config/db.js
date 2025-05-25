import mongoose from "mongoose";
import 'dotenv/config'
export const  connectDB = async () =>{

    await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB Connected"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
   
}

// const mongoose = require("mongoose");
// require("dotenv").config();

// exports.connect = () => {
//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
//     })
//     .then(() => console.log("DB Connected Successfully"))
//     .catch( (error) => {
//         console.log("DB Connection Failed");
//         console.error(error);
//         process.exit(1);
//     } )
// };


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.