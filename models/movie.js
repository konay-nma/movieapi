const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  isActive:{
    type: Boolean,
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  genres: {
    type: Array,
    required: true
  },
  year: {
    type: Number,
    required: true
  }, 
  image: {
    type: String,
    required: true
  },
  source: {
    type: Array,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
})

movieSchema.set('toJSON', {
  transform: (_document, returnedMovie) => {
    returnedMovie.id = returnedMovie._id.toString()
    delete returnedMovie._id
    delete returnedMovie.__v
  }
})

module.exports = mongoose.model('Movie', movieSchema)