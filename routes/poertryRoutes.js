const express = require("express");
const { createPoetry, getPoetry } = require("../controllers/PoetController");

const router = express.Router();
router.post("/createPoetry", createPoetry);
router.get("/getPoetry", getPoetry);

module.exports = router;