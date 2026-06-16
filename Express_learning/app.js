
const express = require("express");
const app = express();

const auth = (req,res,next) => {
    console.log("checking User");
    next();
};

app.get("/",(req,res) =>{
    res.send("home page");
});

app.get("/about",(req,res) =>{
    res.send("About Page");
});

app.get("/admin",auth,(req,res) =>{
    res.send("Admin Page");
});

app.listen(3000);