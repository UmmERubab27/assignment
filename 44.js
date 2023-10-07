"use strict";
//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log(`Sandwich Summary:`);
    if (items.length === 0) {
        console.log("     -Your ordered an empty sandwich. Please add some item.");
    }
    else {
        items.forEach((items, index) => {
            console.log(`    ${index + 1}, ${items}`);
        });
    }
    console.log("\n");
}
;
// Call the function with different numbers of arguments
makeSandwich();
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Lettuce", "Tomato", "Mayonnaise", "BBQ Chiken");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
