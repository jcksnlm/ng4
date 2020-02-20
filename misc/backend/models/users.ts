class User {

  constructor (
    public email: string,
    public name: string,
    public password: string
  ){}

  public matchesPassword(password: string):boolean {
    return this.password === password;
  }

}
export {User}
