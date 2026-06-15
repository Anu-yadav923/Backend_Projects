
const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("Home Page");
});

app.get("/about",(req,res) =>{
    res.send("About Page");
});

app.get("/contact",(req,res) =>{
    res.send("Contact Page");
});

app.get("/users/:id",(req,res) =>{
    
    console.log(req.params.id);
    res.send("Done");
});

app.get("/search",(req,res) =>{
    console.log(req.query.name)
    res.send("Done");
});


app.listen(3000, () =>{
    console.log("Server Running");
});