
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credential : true
}))






module.exports = app