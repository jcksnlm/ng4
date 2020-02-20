import {Request, Response} from "express";
import {User} from '../models/users'
import * as jwt from "jsonwebtoken";
import {apiConfig} from "../config/api-config";
import * as UserService from "./userService"


export const handleAuthentication = async (req: Request, resp: Response) => {

  const user: User = req.body
  if (await isValid(user)) {

    const token = jwt.sign({
      sub: user.email,
      iss: 'backend'
  }, apiConfig.secret, {expiresIn: 86400}) //um dia

    resp.json({email: user.email, accessToken: token})
  }
  else {
    resp.status(403).json({message:'Dados inválido'})
  }
}


async function isValid(user: User): Promise<boolean> {

  if (!user){

    return false
  }
  else {

    const users:Array<User> = await UserService.getUsers();

    const foundUser = UserService.findUser(users, user.email);
    if (!foundUser) {
        return false;
    }
    const matchedUser = new User(foundUser.email, foundUser.name, foundUser.password)

    return matchedUser.matchesPassword(user.password)
  }
}
