export default function validateSchema(schema) {
  return (req, res, next) =>
    schema
      .validate(req.body, { abortEarly: false })
      .then(() => next())
      .catch((err) => {
        const errors = [];

        err.inner.reduce((field, error) => {
          const fields = {};
          fields[error.path] = error.message;
          errors.push(fields);
          return {};
        }, {});

        return res.status(400).json({
          status: 'fail',
          message: 'Dados inválidos',
          errors,
        });
      });
}
