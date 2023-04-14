import { ApiError } from './api-error.js'

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found Error') {
    super(404, message)
    this.name = 'NotFoundError'
  }
}
