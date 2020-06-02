export default class ExceptionError extends Error {
  constructor(statusCode, { title, messages }) {
    super();
    this.statusCode = statusCode;
    this.message = title;
    this.errors = messages;
  }
}
