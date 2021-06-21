const mongoose = require('mongoose')

const serieSchema = new mongoose.Schema({
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
  }
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category'
  // }
})

serieSchema.set('toJSON', {
  transform: (_document, returnedSerie) => {
    returnedSerie.id = returnedSerie._id.toString()
    delete returnedSerie._id
    delete returnedSerie.__v
  }
})

module.exports = mongoose.model('Serie', serieSchema)