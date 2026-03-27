import { addPlant } from "./field.js"
import { createAsparagus } from "./Asparagus.js"
import { createCorn } from "./corn.js"
import { createPotato } from "./Potato.js"
import { createSoybean } from "./Soybean.js"
import { createSunflower } from "./Sunflower.js"
import { createWheat } from "./Wheat.js"

export const plantSeeds = (plan) => {
    plan.forEach((row) => {
        row.forEach((plant) =>{
            if (plant === "Asparagus") {
            const newPlant = createAsparagus()
            addPlant(newPlant)
            }
            else if (plant === "Corn") {
            const newPlant = createCorn()
            addPlant(newPlant)
            }
            else if (plant === "Potato") {
            const newPlant = createPotato()
            addPlant(newPlant)
            }
            else if (plant === "Soybean") {
            const newPlant = createSoybean()
            addPlant(newPlant)
            }
            else if (plant === "Sunflower") {
            const newPlant = createSunflower()
            addPlant(newPlant)
            }
            else if (plant === "Wheat") {
            const newPlant = createWheat()
            addPlant(newPlant)
            }
               

        })

    })
  
}
      

