
const express = require("express");

const router = express.Router();

router.get("/",(req,res) =>{
    res.send("All Books");
});

router.get("/:id",(req,res) =>{
    res.send("single Book");
});

module.exports = router;