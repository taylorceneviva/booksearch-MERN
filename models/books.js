// Model for books API 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
// - Title
// -authors 
// - description 
// - image 
// - link

});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
