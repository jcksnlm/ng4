import * as express from 'express'
import * as https from 'https'
import * as expressLoader from './loaders/express'

async function startServer() {

  const server: express.Express = express();

  await expressLoader.default({ server: server });

  https.createServer(expressLoader.options, server).listen(expressLoader.PORT, () => {
      console.log('JSON Server is running on https://localhost:' + expressLoader.PORT)
  })
}

startServer();
