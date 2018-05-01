import { create, router, defaults, bodyParser } from 'json-server';
import * as path from 'path';

const server = create();
// const routers = router(path.join(__dirname, '../db/', 'db.json'));
const middlewares = defaults();

server.use(middlewares);
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

server.use(bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(router());
server.listen(3000, () => {
  console.log('JSON Server is running');
});
