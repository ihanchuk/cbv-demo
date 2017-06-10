const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Genre = new Schema({
     books:[{
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }],
        meta: {
            genre_short: {
                type: String,
                required:true,
            },
            genre_long: {
                type: String,
                required:true,
        }
    }
});

const AuthorModel = mongoose.model('Genre', Genre);
module.exports = GenreModel;