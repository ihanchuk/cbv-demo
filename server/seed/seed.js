const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const authors = require ('./data/dummy-data.js');

mongoose.connect(`mongodb://localhost:27017/books`);

const Author = require('../db/author-model');
const Book = require('../db/book-model');

authors.forEach( (author) => {
    let newAuthor = new Author({
        meta: author. meta
    });

    newAuthor.save()
    .then( (res) => {
        return {
           authorID: res._id,
           books: author.books
        }
    })
    .then( (data) =>{
        let  authorID =data.authorID;
        let booksIDS = [];

        data.books.forEach( (book) =>{
            let newBook = new Book({
                author: data.authorID,
                img: book.img,
                book_name: book.name,
                intro_text: book.intro_text,
                isbn: book.isbn
            });

            newBook.save().then( (res)=>{
                Author.findById(authorID,  (err, author)=> {  
                    if (err) {
                        console.log(err);
                    } else {
                        author.books.push(res._id);
                        author.save(function (err, author) {
                            if (err) {
                                console.log(err);
                            }
                            console.log(`Seeded author:: ${author.meta.last_name} with book ${res.book_name}`);
                        });
                    }
                });
            })
        });
    })
    .catch( (err)=>{
        console.log(err);
    })
});


