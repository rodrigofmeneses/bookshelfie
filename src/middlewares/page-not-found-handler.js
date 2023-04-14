import { NotFoundError } from '../errors/index.js'

export const pageNotFoundHandler = (req, res, next) => {
  throw new NotFoundError('Page Not Found')
}
