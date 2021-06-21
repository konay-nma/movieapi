const movieRouter = require('express').Router()
const Movie = require('../models/movie')

movieRouter.get('/', async(req,res) => {
  const movies = await Movie.find({})
  return res.json(movies)
})

movieRouter.post('/', async (req,res) => {
  const body = req.body
  const movie = new Movie({
    ...req.body,
    isActive: body.isActive || true
  })
  //console.log(body)
  const savedMoive = await movie.save()
  return res.status(200).json(savedMoive)
})

movieRouter.get('/:id', async(req, res) => {
  const movie = await Movie.findById(req.params.id)
  if (movie) {
    return res.json(movie)
  } else {
    return res.status(404).end()
  }
})

module.exports = movieRouter