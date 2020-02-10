class User {

  constructor (
    public email: string,
    public name: string,
    public password: string
  ){}

  public matches(incomming: User):boolean {

    return incomming !== undefined && incomming.email === this.email && incomming.password === this.password
  }

}

const users:{
    [key: string]: User
} = {
  "user1@gmail.com": new User('user1@gmail.com','fulano','123'),
  "user2@hotmail.com": new User('user2@hotmail.com','ciclano','123')
}

export {User, users}
