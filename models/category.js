const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  }
})

categorySchema.set('toJSON', {
  transform: (_document, returnedCategory) => {
    returnedCategory.id = returnedCategory._id
    delete returnedCategory._id
    delete returnedCategory.__v
  }
})

module.exports = mongoose.model('Category', categorySchema)
