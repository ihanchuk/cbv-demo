const express = require('express');
const morgan = require('morgan');
const path = require('path');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('express-cors')

mongoose.connect(`mongodb://localhost:27017/books`);

const Author = require('./db/author-model');
const Book = require('./db/book-model');

const app = express();

// CORS issue
app.use(cors({
    allowedOrigins: [
        'localhost:3000', 'http://localhost:3000'
    ]
}));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get("/authors", function(req,resp){
    Author.find()
    .populate("books")
    .exec()
    .then( (data) =>{
        resp.json(data);
    })
    .catch( (err)=>{
        resp.json({
          error: err
        })
    })
});

app.get("/books", function(req,resp){
    Book.find()
    .populate('author')
    .select(' author img book_name intro_text isbn')
    .exec()
    .then( (data) =>{
        resp.json(data);
    })
    .catch( (err)=>{
        resp.json({
          error: err
        })
    })
});

module.exports = app;