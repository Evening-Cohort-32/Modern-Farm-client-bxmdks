let fieldPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const plant of seed) {
            fieldPlants.push(plant)
        }
    } else {
        fieldPlants.push(seed)
    }
}

export const usePlants = () => {
    return structuredClone(fieldPlants)
}