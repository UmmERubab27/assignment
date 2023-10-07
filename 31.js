"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.31.
// Empty array case
const emptyUserName = [];
// Non-empty array case
const userNames = ['admin', 'Shakeela Batool', 'Bushra', 'Hira', 'Shumaila',];
// Functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We Need To Find Some users!');
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello Admin, Would You Like To See A Status Report?');
        }
        else {
            console.log(`Hello ${username}, Thank You For Logging Again.`);
        }
    }
}
;
console.log(`For non empty username: \n`);
greetUsers(userNames);
// To make array empty we just assing an empty array to userNames
const userNames1 = [];
console.log(`\n\n For empty username: \n`);
greetUsers(userNames1);
