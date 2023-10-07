//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//Define the array of fruits

const favoriteFruits: string[] = ["apple", "banana", "orange", ];
// syntex: arrayName.includes("element")

// Check for specific fruits using independent if statements

if
( favoriteFruits.includes( "apple"))
{
    console.log("I really like apples!");
}

if ( favoriteFruits.includes( "banana"))

{
    console.log("I Enjoy bananas!");
}

if ( favoriteFruits.includes( "orange"))

{
    console.log("Oranges are Delicious!");
}

if ( favoriteFruits.includes( "mango"))

{
    console.log("Mangoes are one of my Favorites!");
}

if ( favoriteFruits.includes( "kiwi"))

{
    console.log("kiwis is so Soure!")
};

if ( favoriteFruits.includes("Pinapple"))
{
    console.log("Pinapple is so Bread Bread Bread!") 
};