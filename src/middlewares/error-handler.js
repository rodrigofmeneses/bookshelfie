export const errorHandler = (error, req, res, next) => {
  const status = error.status || 500
  const message = 'Internal Server Error'

  res.status(status).send({ message, status })
}
