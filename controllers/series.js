const serieRouter = require('express').Router()
const Serie = require('../models/serie')

serieRouter.get('/', async(req,res) => {
  const series = await Serie.find()
  return res.json(series)
})

serieRouter.post('/', async (req,res) => {
  const body = req.body
  const serie = new Serie({
    ...body,
    isActive: body.isActive || true
  })
  console.log(body)
  const savedSerie = await serie.save()
  return res.status(200).json(savedSerie)
})

module.exports = serieRouter