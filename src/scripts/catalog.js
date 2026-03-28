<<<<<<< Updated upstream
export function Catalog(harvestAllFood) {
=======
export function Catalog(yearlyPlan) {
>>>>>>> Stashed changes
  const fullHarvest = document.querySelector(".container")
for (const plant of harvestAllFood) {
fullHarvest.innerHTML += `<section class="plant">${plant.name}</section>`
}
}


/*export function Catalog(harvestAllFood) {
    const fullHarvest = document.querySelector(".container")
    let plantHTML = "" 

    for (const plant of harvestAllFood) {
        plantHTML += `<section class="plant">${plant.type}</section>`
    }

    fullHarvest.innerHTML = plantHTML
}
*/
