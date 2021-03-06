class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.errorName = 'ForbiddenError';
    this.errorMessage = message;
  }
}

module.exports = ForbiddenError;
