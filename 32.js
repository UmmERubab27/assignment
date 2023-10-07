"use strict";
//32Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted..
// Step 1 arrays
const current_users = ["Batool", "Bushra", "Hira", "Shumaila", "Mehreen", "Minal"];
const new_users = ["batool", "bushra", "hina", "saiMa", "aisha", "seema"];
// Step 2 function
function checkUserNames(current_users, new_users) {
    //1st step function
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    //2nd step function
    for (const newUser of new_users) {
        const lowercaseNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercaseNewUser)) {
            console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}
;
// console.log(current_user);
// Test the function
checkUserNames(current_users, new_users);
