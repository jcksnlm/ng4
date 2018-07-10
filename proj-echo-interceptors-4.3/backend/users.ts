class User {

  constructor (
    public email: string,
    public name: string,
    public password: string
  )
  {}

  public matches(incomming: User):boolean {
    return incomming !== undefined && incomming.email === this.email && incomming.password === this.password
  }

}

const users: {[key: string]: User}  = {
  "hue@hue.hue": new User('hue@hue.hue','hue','br'),
  "br@br.br": new User('br@br.br','br','hue')
}

export {User, users}
