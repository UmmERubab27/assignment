//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//Arry of magician's names

const magicianNames: string[] = ["David Copperfield","Ricky Jay","David Devant","Harry Blackstone Sr.","Harry Kellar"];

function show_magicians(magicians: string[]): void 
{
    for (const magician of magicians) 
    {
        console.log(magician);
    
    }
};

//Call the function to show the magician's names

show_magicians(magicianNames);