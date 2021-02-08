const Uitvoer = document.getElementById('Uitvoer')
let dataObject;

const uitvoeren = () => {
    // Deze functie voert de data uit in de div met de ID Uitvoer
    Uitvoer.innerHTML = `<div>${dataObject[0].tijd} </div>`;
    Uitvoer.innerHTML += `<div>${dataObject[1].tempBuiten} </div>`;
}

const starten = () => {
    // De data array in onze dataObject stoppen
    dataObject = energieData
    // De data uitvoeren
    uitvoeren();
}

document.addEventListener('DOMContentLoaded', starten)