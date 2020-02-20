import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as fs from "fs";
import {handleAuthentication} from "../services/auth";
import {handleAuthorization} from "../services/authz";
import {getNasaJson} from '../services/nasa'
import * as UserService from '../services/userService'


export default async ({ server }: { server: express.Express }) => {

    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
        next();
    });

    // Body Parser Middleware
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json({limit: '2mb'}));

    server.post('/login', handleAuthentication)

    server.use('/orders', handleAuthorization)

    server.get('/nasa', handleAuthorization, getNasaJson)


  return server;
}


export const options = {
  cert: fs.readFileSync('./keys/cert.pem'),
  key: fs.readFileSync('./keys/key.pem')
}

export const PORT:number = 3001
