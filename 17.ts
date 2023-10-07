//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList: Array<string> =
[
  "Shumaila", 
  "Shakeela Batool", 
  "Minal",
  "Bushra",
  "Hira",
  "Mehreen",
 ]

 // message about inviting only two guest

 console.log(`I can invite only two people for dinner.`)

 // step 2. removed guest from the list untill only two name remaing.

 while(guestList.length > 2 ) 
 {
    let removedGuest = guestList.pop()
    console.log(`Sorry! ${removedGuest}, I can't Invite You To Dinner.`)
 };

 // step 3. print a message to each of the two people  still on your list, letting them know they're still invited.

 for(let guest of guestList)
 {
    console.log(`Hello, ${guest}, You're Still Invited To Dinner.`)
 };

 // step 4. Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

 guestList.pop();
 guestList.pop();

// print empty string

console.log(`Guest List After Dinner:`, guestList);