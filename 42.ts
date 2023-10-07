//42.Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified./42.

// Array of magician's names

const magicianNames: string[] = ["David Copperfield","Ricky Jay","David Devant","Harry Blackstone Sr.","Harry Kellar"];

function show_magicians(magicians: string[]): void 
{
    for (const magician of magicians)
    {
        console.log(magician);
    }
};

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
};

// Modify the array to add "The Great" to each magician's name

const greatMagiciansNames: string[] = make_great(magicianNames);

//Call the function to show the original magician's name

console.log("Original Magicians:");
show_magicians(magicianNames);

//Call the function to show the modified magician's name

console.log("\n Great Magicians:");
show_magicians(greatMagiciansNames);

