"use strict";
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
// / step 1 show name in lower case;
let personName = "Muhammad Emmad Ali";
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// step 2 show name in upper case;
let personeName = "muhammad emmad ali";
let uppercaseName = personeName.toUpperCase();
console.log(uppercaseName);
// step 3 show name in titlecase;
let words = personName.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titleCaseName);
