const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Author = new Schema({
     books:[{
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }],
        meta: {
            first_name: {
                type: String,
                required:true,
            },
            last_name: {
                type: String,
                required:true,
        }
    }
});

const AuthorModel = mongoose.model('Author', Author);
module.exports = AuthorModel;