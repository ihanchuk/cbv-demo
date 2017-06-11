/** Demo file for testing collection */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://localhost:27017/books`);

const Author = require('../db/author-model');
const Book = require('../db/book-model');

const newAuthor = new Author({
    meta:{
        first_name: "Jack",
        last_name: "Daniels"
    }
});

newAuthor.save()
    .then ( (data) =>{
        console.log("Author saved");
        return data._id
    })
    .then( (authorId) =>{
        const newBook = new Book({
            author: authorId,
            img: 'http://',
            intro_text: 'intro',
            isbn: 'f234234',
            book_name: "FrontEnd Developer in Wonderland",
        });
        newBook.save().then( (data) => {
            console.log("book saved");
            return data;
        });
    })
    .catch( (err)=>{
        console.log(err);
    });

