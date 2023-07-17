const { Router } = require("express")

const bookRouter = Router()

const {addBook, updateBook, getAllBooks, deleteBook} = require("./controllers")
 
bookRouter.post("/books/addBook", addBook)

bookRouter.put("/books/updateBook", updateBook)

bookRouter.get("/books/getAllBooks", getAllBooks)

bookRouter.delete("/books/deleteBook", deleteBook)

module.exports = bookRouter