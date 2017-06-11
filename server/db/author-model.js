const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Author = new Schema({
     books:[{
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }],
        img: {
                 type: String,
                 required:true   
        },
        meta: {
            first_name: {
                type: String,
                required:true,
            },
            last_name: {
                type: String,
                required:true,
             },
        }
});

Author.virtual('idk').get( ()=> {
     return this._id; 
    });

const AuthorModel = mongoose.model('Author', Author);
module.exports = AuthorModel;