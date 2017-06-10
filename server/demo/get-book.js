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
        log("\n Book::: \n \n",  data[0]);
    });

Author.find()
    .populate("books")
    .exec()
    .then( (data) =>{
        log("\n Author::: \n \n",  data[0]);
    });
