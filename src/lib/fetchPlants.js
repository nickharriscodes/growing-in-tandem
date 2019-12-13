const plants = require('./plants.json');

function getPlants(selectedDate) {
    const endTime = 1583816340000;
    let waterToday = [];
    const selectedSeconds = selectedDate.getTime();
    const diffTime = Math.abs(endTime - selectedSeconds);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const dayOfWk = selectedDate.getDay();
    
    //takes in a date, and returns the plant(s) that need to be watered on the given day. 
    const daysPassed = 84 - diffDays;

    /// loop through the plants to get water after days, then evaluate: 
    for (let i = 0; i <= plants.length - 1; i++) {
        let waterAfter = plants[i].water_after.split("").splice(0, 2).join("");
        let plantName = plants[i].name
        let waterAfterNum = Number(waterAfter);

        if (daysPassed % waterAfterNum === 0 && dayOfWk === 1) {
            waterToday.push(plantName);
        } else if ((dayOfWk === 3 || dayOfWk === 5) && waterAfterNum === 2) {
            waterToday.push(plantName);
        } else if ((dayOfWk === 4 || dayOfWk === 1) && waterAfterNum === 3) {
            waterToday.push(plantName);
        }
    }
    return waterToday;
}

module.exports = getPlants;