"use strict";
//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
// Version 1 ( runs the if block)
console.log(`\n1st version of code`);
let alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations! You Just Earned 5 Points For Shooting The Alien.");
}
else {
    console.log("Congratulations! You Just Earned 10 Points For Shooting The Alien");
}
;
// Version 2 ( runs the else block.)
console.log(`\n2nd version of code`);
alien_color = 'blue';
if (alien_color === 'green') {
    console.log("Congratulations! You Just Earned 5 Points For Shooting The Alien.");
}
else {
    console.log("Congratulations! You Just Earned 10 Points For Shooting The Alien.");
}
;
