export function Catalog(harvestAllFood) {
  const fullHarvest = document.querySelector(".container")
for (const plant of harvestAllFood) {
fullHarvest.innerHTML += `<section class="plant">${plant.name}</section>`
}
}
