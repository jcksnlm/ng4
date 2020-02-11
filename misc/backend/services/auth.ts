import {Request, Response} from "express";
import {User, users} from '../models/users'
import * as jwt from "jsonwebtoken";
import {apiConfig} from "../config/api-config";


export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]

    const token = jwt.sign({
      sub: dbUser.email,
      iss: 'backend'
  }, apiConfig.secret, {expiresIn: 86400}) //um dia

    resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
  }
  else {
    resp.status(403).json({message:'Dados inválido'})
  }
}


function isValid(user: User): boolean {
  if (!user){
    return false
  }
  else {
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
  }
}
