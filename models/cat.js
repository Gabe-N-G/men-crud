const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  image: String,
  gender: String,
})

const Cat = mongoose.model('Cat', catSchema)
module.exports = Cat
