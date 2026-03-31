export function catalog = (harvestAllFood) => {
  const fullHarvest = document.queryselector(".messages")
for (const plant of harvestAllFood) {
fullHarvest.innerHTML += `<section class="plant">${plant.name}</section>`
}
}
