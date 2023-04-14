import { ApiError } from './api-error.js'

export class BadRequestError extends ApiError {
  constructor(message = 'Bad Request Error') {
    super(400, message)
    this.name = 'BadRequestError'
  }
}
