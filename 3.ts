//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase


// / step 1 show name in lower case;

let personName : string = "Muhammad Emmad Ali";

let lowercaseName: string = personName.toLowerCase();

console.log(lowercaseName);


// step 2 show name in upper case;

let personeName: string = "muhammad emmad ali";

let uppercaseName: string = personeName.toUpperCase();

console.log(uppercaseName);

// step 3 show name in titlecase;

let words: string[] = personName.split(" ");

let titleCaseName: string = ""

for (let i = 0; i < words.length; i++) {

    titleCaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};


console.log(titleCaseName);

