const errorHandler = (error, req, res, next) => {
  if(error.name === 'CastError') {
    return res.status(404).json({error: 'invalid id'})
  }
  next(error)
}

module.exports = { errorHandler }