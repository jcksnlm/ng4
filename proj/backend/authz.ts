import {Request, Response} from 'express'
import * as jwt from 'jsonwebtoken'
import {apiConfig} from "./api-config";

export const handleAuthorization = (req, resp, next) => {
  const token = extractToken(req)
  if (!token) {
    resp.setHeader('WWW-Authenticate', 'Bearer token_tyte = "JWT"')
    resp.status(401).json({message: 'Não autenticado'})
  }
  else {
    jwt.verify(token, apiConfig.secret, (error, decoded) => {
      if (decoded){
        next()
      }
      else {
        resp.status(403).json({message:'falha de autenticação'})
      }
    })
  }
}

function extractToken(req: Request): string {
    let token: string = undefined

    if (req.headers && req.headers.authorization) {
      const parts: string[] = req.headers.authorization.split(' ')
      if (parts.length === 2 && parts[0] === 'Bearer') {
          token = parts[1]
      }
    }

    return token
}
