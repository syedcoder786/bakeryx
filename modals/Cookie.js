const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CookieSchema = new Schema({
    img_path: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    discp: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    percent: {
        type:String,
        required:true
    }
})

module.exports = Cookie = mongoose.model('cookies', CookieSchema);