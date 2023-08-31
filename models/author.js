const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  areasOfExpertise: [String]
});

module.exports = mongoose.model('Author', authorSchema);
