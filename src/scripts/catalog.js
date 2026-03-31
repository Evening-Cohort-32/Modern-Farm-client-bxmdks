
export function Catalog(harvestAllFood) {
    const fullHarvest = document.querySelector(".container")
    let plantHTML = "" 

    for (const plant of harvestAllFood) {
        plantHTML += `<section class="plant">${plant.type}</section>`
    }

    fullHarvest.innerHTML = plantHTML
}

