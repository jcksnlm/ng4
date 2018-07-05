class Spacecraft {

  constructor (public propulsor: string) {}

  jumpIntoHyperspace () {
    console.log(`Entering hyperspace using ${this.propulsor}`)
  }
}

interface Containership {

  cargoContainers: number

}

export {Spacecraft, Containership}
