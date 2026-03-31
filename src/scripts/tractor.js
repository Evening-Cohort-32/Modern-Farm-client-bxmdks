import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

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
      

