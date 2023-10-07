//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Function to create a fruit object

function createFruits(name: string, colour: string, taste: string) {
    return {
        name,
        colour,
        taste,
    }
};


const fruits = 

[
    createFruits("Apple", "Red", "Sweet"),
    createFruits("Banana", "Yellow","Sweet"),
    createFruits("Orange", "Orange", "Citrusy"),
    createFruits("Grapes", "Purple/Green", "Sweet"),
    createFruits("Mango", "Yellow", "Sweet"),
];

// Access an invalid index
const invalidIndex = 10; //There are only 5 elements in the array, so this will cause an error

console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);

// Print the fruits

fruits.forEach((fruits) => {
   console.log(`Name: ${fruits.name}, Colour: ${fruits.colour}, Taste: ${fruits.taste}`);
});

export{};