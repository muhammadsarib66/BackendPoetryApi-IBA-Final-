const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("db not conected",err.message);
  });
//Route
const poetry = require("./routes/poertryRoutes");
app.use("/api/v1", poetry);

const port = process.env.PORT || 8000 ;
app.listen(port, () => console.log("server connected ", port));