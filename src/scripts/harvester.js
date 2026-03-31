export const harvestPlants = (plantArray) => {
    let harvestedSeeds = []

    for (const plant of plantArray) {
        for (let i=0; i<plant.output; i++) {
            harvestedSeeds.push(plant)
        }
    }

    return harvestedSeeds
}