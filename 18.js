// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// 1• Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2• Print your array in its original order.
// 3• Print your array in alphabetical order without modifying the actual list.
// 4• Show that your array is still in its original order by printing it.
// 5• Print your array in reverse alphabetical order without changing the order of the original list.
// 6• Show that your array is still in its original order by printing it again.
// 7• Reverse the order of your list. Print the array to show that its order has changed.
// 8• Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// step 1. Creat an array to store Travle Destinations.
var travelDestinations = [
    "United Arab Emirates",
    "Turkey",
    "London",
    "Canada",
    "Switzerland"
];
// step 2. Print you array in its orignal order
console.log("origional Order:");
console.log(travelDestinations);
// step 3, Print your array in alphabetical order withouth modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log(__spreadArray([], travelDestinations, true).sort());
// step 4.Show that your array is still in its original order by printing it.
console.log("\n Showing array is still in its original order");
console.log(travelDestinations);
// step 5.Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modifying the actual list");
console.log(__spreadArray([], travelDestinations, true).sort().reverse());
// step 6.Show that your array is still in its original order by printing it again.
console.log("\n Showing array is still in its original order");
console.log(travelDestinations);
// step 7.Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse Order");
travelDestinations.reverse();
console.log(travelDestinations);
// step 8.Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back To Original Order");
travelDestinations.reverse();
console.log(travelDestinations);
// step 9.Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabetical order");
travelDestinations.sort();
console.log(travelDestinations);
// step 10.Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to Reverse Alphabetical order");
travelDestinations.sort().reverse();
console.log(travelDestinations);
