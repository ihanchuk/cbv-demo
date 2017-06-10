const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Book = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    book_name: {
            type: String,
            required:true,
    },
    meta: {
        intro_text: {
            type: String,
            required:true,
        },
        isbn: {
            type: String,
            required:true,
        }
    }
});
const BookModel = mongoose.model('Book', Book);

module.exports = BookModel;