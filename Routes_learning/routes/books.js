
const express = require("express");

const router = express.Router();

const {addBook} = require("../controllers/booksController");

router.get("/",(req,res) =>{
    res.send("All Books");
});

router.get("/:id",(req,res) =>{
    res.send("single Book");
});

router.post("/",(req,res) =>{
    addBook();
});

module.exports = router;