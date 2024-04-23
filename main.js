"use strict";
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("enjoy your sandwich kamran tessori");
sandwich(`capsicum`, `tomato`, `chicken`);
sandwich(`beef`, `cheese`);
sandwich(`garlic chicken`, `mayo sauce`);
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
