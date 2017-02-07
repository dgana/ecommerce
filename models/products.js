const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var productsSchema = new Schema({
  name: String,
  category: String,
  stock: Number,
  price: Number,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
const Products = mongoose.model('Products', productsSchema);

// make this available to our users in our Node applications
module.exports = Products;
