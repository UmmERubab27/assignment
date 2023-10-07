// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.



let guestList: Array<string> = 

[
    "Shakeela Batool",
    "Bushra",
    "Hira",
];

// step 1, Print the name of a person who can't make it.

let guestHowCantMakeIt: string = "Hira";

console.log(`${guestHowCantMakeIt} can't make it to Dinner`);

// Step 2. Replace the name of a persone who can't make it.

let NewGuest: string = "Minal";
let indexOfguestHowCantMakeIt: number = guestList.indexOf(guestHowCantMakeIt);

// console.log(indexOfguestHowCantMakeIt)

if (indexOfguestHowCantMakeIt !== -1)
{
   guestList[indexOfguestHowCantMakeIt] = NewGuest

};
// console.log(guestList[2])


// Step 3. print a second set of invitation message

console.log("Second set of invitation message.");
guestList.forEach((guest:string) => 

{
    console.log(`Dear ${guest}, You Are Invited To Dinner.`)
} );

export{guestList};