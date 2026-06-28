const { model } = require("mongoose");
const Book = require("../models/Book");

const addBook = async()=>{
    await Book.create({
        title: "atomic habits",
        author: "james clear",
        price:499
    });
};

module.exports = {addBook};