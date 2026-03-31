export const harvestPlants = (plants) => {
    const harvest = []
    
    for (const plant of plants) {
        if (plant.type === "Corn") {
            // Only half of corn output is harvested (rest goes to cattle ranchers)
            const cornToHarvest = Math.floor(plant.output / 2)
            for (let i = 0; i < cornToHarvest; i++) {
                harvest.push(plant)
            }
        } else {
            // All output of other plants goes to harvest
            for (let i = 0; i < plant.output; i++) {
                harvest.push(plant)
            }
        }
    }
    
    return harvest
}