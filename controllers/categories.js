const categoryRouter = require('express').Router()
const Category = require('../models/category')

categoryRouter.get('/', async(req, res) => {
  const categories = await Category.find({})
  return res.json(categories)
})

categoryRouter.post('/', async(req, res) => {
  const body = req.body
  const category = new Category({
    ...body
  })
  const savedCategory = await category.save()
  return res.json(savedCategory)
})

module.exports = categoryRouter