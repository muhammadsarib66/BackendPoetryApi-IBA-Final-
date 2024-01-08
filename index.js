// const mongoose = require('mongoose');
// const {DB_NAME} = require('./constants') 


// exports.connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); ""
//         console.log(`MONOGDB connected !! DB HOST: ${connectionInstance.connection.host}`);

//     }


//     catch (error) {
//         console.log("MONGODB connection error", error.message)
//         process.exit(1)
//     }
// };
// const dotenv = require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const cors = require("cors");

const app = require("./app");
app.use(cors());

mongoose
  .connect("mongodb+srv://muhammadsarib49:sarib123@cluster0.xj6pknu.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("db not conected error");
  });

//Route
const poetry = require("./routes/poertryRoutes");
app.use("/api/v1", poetry);

const port = 8000 ;
app.listen(port, () => console.log("server connected ", port));