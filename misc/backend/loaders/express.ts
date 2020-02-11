import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as fs from "fs";
import {handleAuthentication}  from "../services/auth";
import {handleAuthorization}  from "../services/authz";


export default async ({ server }: { server: express.Express }) => {

    server.post('/login', handleAuthentication)

    server.use('/orders', handleAuthorization)

    server.get('/users', handleAuthorization, (req, res, next) => {
        res.send('hue');
        next();
    })

  // ...More middlewares

  // Return the express app
  return server;
}


export const options = {
  cert: fs.readFileSync('./keys/cert.pem'),
  key: fs.readFileSync('./keys/key.pem')
}

export const PORT:number = 3001
