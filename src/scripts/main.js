import { createPlan } from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import {addPlant, usePlants} from "./field.js"
import { harvestPlants } from "./harvester.js"

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

console.log("Welcome to the main module")

//Create seed objects
const asparagus = createAsparagus();
const corn = createCorn();  // Returns an array of 2 corn objects
const wheat = createWheat();

// Add them to the field
addPlant(asparagus);  // Adds 1 asparagus
addPlant(corn);       // Adds 2 corn (handled by Array.isArray check)
addPlant(wheat);      // Adds 1 wheat

//Get array of plants and harvest them
let plants = usePlants();
let seeds = harvestPlants(plants);
console.log(seeds)
