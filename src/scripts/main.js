import { createPlan } from "./plan.js"
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
=======
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
>>>>>>> develop
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
<<<<<<< HEAD
import { Catalog } from "./catalog.js"

>>>>>>> Stashed changes
=======
import {addPlant, usePlants} from "./field.js"

>>>>>>> develop
const yearlyPlan = createPlan()

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const fullHarvest = document.querySelector(".container")
console.log("Welcome to the main module")
<<<<<<< HEAD
=======

//Create seed objects
const asparagus = createAsparagus();
const corn = createCorn();  // Returns an array of 2 corn objects
const wheat = createWheat();

// Add them to the field
addPlant(asparagus);  // Adds 1 asparagus
addPlant(corn);       // Adds 2 corn (handled by Array.isArray check)
addPlant(wheat);      // Adds 1 wheat
>>>>>>> develop
