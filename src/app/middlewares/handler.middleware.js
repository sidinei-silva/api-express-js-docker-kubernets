import 'dotenv/config';

import Youch from 'youch';

import ExceptionError from '../../utils/ExceptionError';

export default async function handler(err, req, res) {
  if (err instanceof ExceptionError) {
    const { statusCode, message, errors } = err;
    return res.status(statusCode).json({
      status: 'error',
      message,
      errors,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();

    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal Server Error' });
}
