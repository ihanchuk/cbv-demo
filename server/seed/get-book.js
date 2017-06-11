/** Demo file for testing collection */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb://localhost:27017/books`);

const Author = require('../db/author-model');
const Book = require('../db/book-model');

const util = require("util");
const log = console.log;

Book.find()
    .populate("author")
    .exec()
    .then( (data) =>{
       data.forEach ( (book) =>{
            console.log("\n\n\n", book);
       });
    });

Author.find()
    .populate("books")
    .exec()
    .then( (data) =>{
        data.forEach ( (author) =>{
            console.log("\n\n\n", author);
       });
    });
