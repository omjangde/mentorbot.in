// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    dateNumber: String,    
    postTitle: String,
    author: String,
    category: String,
    blogadditional: String,
    postExcerpt: String,
    blogImage: {
        data: Buffer,
        contentType: String
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
