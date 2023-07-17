const Book = require("./model")
const Author = require('../authors/model')

const addBook = async (req, res) => {
    try {

        const author = await Author.findOne({
            where: {authorName: req.body.author}
        })
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            // AuthorId: author.id
        })

        res.status(201).json({message: "success", book: newBook})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
        console.log(error)
    }
}

const updateBook = async (req, res) => {
    try {
        const updateBook = await Book.update(
            {
                title: req.body.newTitle
            },
            {
                where: {
                    title: req.body.title
                }
            }
        )
        res.status(200).json({message: "success", updateResult: updateBook})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
        console.log(error)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const getallbooks = await Book.findAll({
            attributes: ["id", "title", "author"],
            where: {title: req.body.title, author: req.body.author,}
        });
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
        console.log(error)
    }
};

const deleteBook = async (req, res) => {
    try {
        const deletebook = await Book.findAll({
            name: req.body.name,
        })
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
        console.log(error)
    }
};

module.exports = {
    addBook,
    updateBook,
    getAllBooks,
    deleteBook

}