require("dotenv").config()

const express = require("express")

const Book = require("./books/model")
const Author = require("./authors/model")

const bookRouter = require("./books/routes")
const authorRouter = require("./authors/routes")

const port = process.env.PORT || 5005

const app = express()

app.use(express.json())

const syncTables = () => {
    Author.hasMany(Book);
    Book.belongsTo(Author);

    Book.sync({alter:true});
    Author.sync({alter:true})
}

app.use(bookRouter)
app.use(authorRouter)

app.listen(port, () => {
    syncTables()
    console.log(`Server is running on port ${port}`)
})