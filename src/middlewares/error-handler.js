export const errorHandler = (error, req, res, next) => {
  let status = error.status ?? 500
  let message = error.message ?? 'Internal Server Error'

  res.status(status).send({ message, status })
}
