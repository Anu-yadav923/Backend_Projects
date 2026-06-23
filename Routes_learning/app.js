
const express = require("express");

const app = express();

const booksRouter = require("./routes/books");

const usersRouter = require("./routes/users");

app.use("/books", booksRouter);

app.use("/users", usersRouter);

app.listen(3000,() =>{
    console.log("server running");
});