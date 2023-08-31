const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  areasOfExpertise: [String]
});

const blogPostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  author: { type: authorSchema, required: true }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
