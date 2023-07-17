const { Router } = require("express")

const router = Router()

const {addAuthor, getAuthorAndBooks} = require("./controllers")

router.post("/authors/addAuthor", addAuthor)

router.post("/authors/getBooksandAuthors", getAuthorAndBooks)

module.exports = router