import * as express from 'express';
import * as bodyParser from 'body-parser';

export function startServer() {
  const server = express();
  var myLogger = function(req, res, next) {
    console.log(`body :: ${req.body}`);
    next();
  };
  server.use(bodyParser.json());
  server.use(myLogger);
  server
    .route('/book')
    .get(function(req, res) {
      res.send('Get a random book');
    })
    .post(function(req, res) {
      res.send(req.body);
    })
    .put(function(req, res) {
      res.send('Update the book');
    });
  server.listen(3000, () => {
    console.log('JSON Server is running');
  });
}
