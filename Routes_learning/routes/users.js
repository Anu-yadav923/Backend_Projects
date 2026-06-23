
const express = require("express");
const { route } = require("./books");

const router = express.Router();

router.get("/", (req,res) =>{
    res.send("all users");
});

router.get("/:id", (req,res) =>{
    res.send("single users");
});

module.exports = router;

