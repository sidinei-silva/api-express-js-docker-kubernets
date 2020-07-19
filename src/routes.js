import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  const hello_env = process.env.HELLO_ENV;
  res.json({ message: 'Hello', env: hello_env });
});

export default routes;
