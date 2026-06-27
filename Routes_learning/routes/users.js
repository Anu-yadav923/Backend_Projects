
const express = require("express");
const { route } = require("./books");

const router = express.Router();

const {getProfile} = require("../controllers/getProfile");
const auth = require("../middleware/auth");

router.get("/", (req,res) =>{
    res.send("all users");
});

router.get("/:id", (req,res) =>{
    res.send("single users");
});

router.get("/profile", 
    auth,getProfile
);

module.exports = router;

