"use strict";
//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//Array of magician's names
const magicianNames = ["David Copperfield", "Ricky Jay", "David Devant", "Harry Blackstone Sr.", "Harry Kellar"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
;
function make_Great(magicians) {
    const greatMagicians = magicians.map(magician => 'The great ${magician}');
    return greatMagicians;
}
;
// Modify the array to add "the great" to each magician's name
const greatMagicianNames = make_Great(magicianNames);
//Call the function to show the orignal magician's name
console.log("Original Magicians:");
showMagicians(magicianNames);
//Call the function to show the Great magician's name
console.log("\n Great Magicians:");
showMagicians(greatMagicianNames);
