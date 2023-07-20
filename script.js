const age = 56;
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", updateMessage);
let index = 0;
const seconds = 31557600;
const minutes = seconds / 60;
const hours = 8766;

const timeMeasurements = {
    "minutes": minutes,
    "hours": hours,
    "days": 365.25,
    "weeks": 52,
    "decades": .1,
    "centuries": .01,
    "millenia": .001,
    "cretaceous periods": .000000012658,
    "fly lifepans": 24,
    "league games": 13149,
    "'quick' runs to the grocery store": hours * 5,
    "picoseconds": 1e12,
    "star wars marathons": Math.floor(hours / 6.5),
    "star wars marathons (with the bad ones)": hours / 14,
    "star wars marathons (with all the bad ones)": Math.floor(hours / 25.5),
    "blinks": Math.floor(seconds / 3),
    "naps": Math.floor(hours / 3),
    "books read": Math.floor(hours / 6),
    "stunning renditions of happy birthday": seconds / 20,
}

const names = Object.keys(timeMeasurements);

function updateMessage() {
    let output = document.getElementById("output");
    if(index >= names.length) {
        index = 0;
    }
    let timeMeasurement = names[index];
    const message = (age * timeMeasurements[timeMeasurement]) + " " + timeMeasurement;
    index += 1;
    output.innerHTML = message;
}
