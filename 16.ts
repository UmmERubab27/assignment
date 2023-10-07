// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let guestList: Array<string> = 
[
    "Shakeela Batool",
    "Bushra",
    "Hira",
];

// Exercise 16 Solution
// Step 1 Informing people that you found a bigger dinner table.

for (let guest of guestList) 
{
    console.log(`Hello, ${guest}, We Have A Found A Bigger Dinner Table.`)
};

// Step 2. Add a new guest to the beginning of array.

let newGuestAtBeginning: string = "Shumaila";
guestList.unshift(newGuestAtBeginning);

console.log(guestList);

// Step 3. add one guest to the middle of array

let newGuestInMiddle: string = "Minal";
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle);

console.log(guestList);

//step 4. use appen()to add new guest to the end of your list

let newGuestAtEnd: string = "Mehreen";

guestList.push(newGuestAtEnd)

console.log(guestList)

// step 5. print a new set of invitation messgae for each

console.log("New Set of Invitation Messages:")

for(let guest of guestList) 
{
    console.log(`Dear ${guest},  You Are Invited To Dinner Pleace Join Us.`)

};

console.log(guestList)