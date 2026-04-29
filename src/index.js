import jsonServer from 'json-server';
import path from 'path';
import HttpStatus from 'http-status-codes';
import config from '@config';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../mocks/documents.json'));
const middlewares = jsonServer.defaults();

const PORT = config.PORT;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

server.get('/health', (req, res) => {
  res.status(HttpStatus.OK);
  res.json({
    status: 'ok',
    service: config.APP_NAME,
    version: config.APP_VERSION,
    environment: config.ENVIRONMENT
  });
});

server.use(router);

server.listen(PORT, () => {
  console.log(`Best doc JSON Mock API running 🚀 at http://localhost:${PORT}`);
});