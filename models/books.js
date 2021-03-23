// Model for books API 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
// - Title
// -authors 
// - description 
// - image 
// - link
title: { 
    type: String, 
    required: true 
},
author: { 
    type: String, 
    required: true 
},
description: {
    type: String,
    required: true
},
image: {
    type: URL,
},
link: {
    type: URL,
}


});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
