
const express = require("express");

const app = express();

app.use(express.json());

const books = [];

app.get("/books", (req,res) =>{
    res.json(books);
});

app.get("/books/:title",(req,res) =>{
    const title = req.params.title;

    const book = books.find((b) =>{
        return b.title === title;
    });

    if(book) {
        res.json(book);
    }else{
        res.status(404).json({
            message: "book Not found"
        });
    }
});

app.post("/books", (req,res) => {
    books.push(req.body);

    res.status(201).json({
        message: "Books added successfully",
        book: req.body
    });
});


// update data
app.put("/books/:title", (req,res) => {
    const title = req.params.title;

    const book = books.find(b => b.title === title);

    if(book) {
        book.author = req.body.author;

        res.json({
            message: "Book updated successfully",
            book: book
        });
    } else {
        res.status(404).json({
            message: "Book not found"
        });
    }
});

// delete data
app.delete("/books/:title", (req,res) => {
    const title = req.params.title;

    const index = books.findIndex(b => b.title === title);

    if(index !== -1) {
        books.splice(index,1);

        res.json({
            message: "Book deleted successfully"
        });
    } else {
        res.status(404).json({
            message: "Book not found"
        });
    }
});


app.listen(3000,() =>{
    console.log("Books API is running on Port 3000");
});

