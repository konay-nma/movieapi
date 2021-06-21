const allapisRouter = require('express').Router()
const Movie = require('../models/movie')
const Serie = require('../models/serie')
const Category = require('../models/category')

allapisRouter.get('/', async(req, res) => {
const movies = await Movie.find({})
const series = await Serie.find({})
const categories = await Category.find({})
// console.log(series)
for (let serie of series) {
  serie._doc.source = [] // make the source empty array
}
return res.status(200).json({ movie: movies.reverse(), serie: series.reverse(), categories: categories.reverse()})
})

module.exports = allapisRouter