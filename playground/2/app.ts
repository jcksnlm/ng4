import { Spacecraft, Containership } from './base-ships'
import { MillennuiumFalcon } from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("TS EGs", 40, "="))

let ship = new Spacecraft('suparshaft')
ship.jumpIntoHyperspace()

let mil = new MillennuiumFalcon()

mil.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(mil) ? 'Hell yeah' : 'Hell no'}`)
