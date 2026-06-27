require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const app = express();

connectDB();

const logger = require("./middleware/logger");

const booksRouter = require("./routes/books");

const usersRouter = require("./routes/users");

app.use(logger);

app.use("/books", booksRouter);

app.use("/users", usersRouter);


app.listen(process.env.PORT,() =>{
    console.log("server running");
});