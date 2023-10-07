// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = [
    "Shakeela Batool",
    "Bushra",
    "Hira",
];
// Exercise 16 Solution
// Step 1 Informing people that you found a bigger dinner table.
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello, ".concat(guest, ", We Have A Found A Bigger Dinner Table."));
}
;
// Step 2. Add a new guest to the beginning of array.
var newGuestAtBeginning = "Shumaila";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
// Step 3. add one guest to the middle of array
var newGuestInMiddle = "Minal";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
console.log(guestList);
//step 4. use appen()to add new guest to the end of your list
var newGuestAtEnd = "Mehreen";
guestList.push(newGuestAtEnd);
console.log(guestList);
// step 5. print a new set of invitation messgae for each
console.log("New Set of Invitation Messages:");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ",  You Are Invited To Dinner Pleace Join Us."));
}
;
console.log(guestList);
