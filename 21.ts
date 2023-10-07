//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const bouquet = 
{
  name: "Spring Delight",
  price: 250,
  description: "Beautiful arrangement of spring flowers"
};

// define an array of objects

let bouquets: Array<typeof bouquet> = [];

// pushing multipul object

bouquets.push(bouquet);
bouquets.push(
{
    name: "Summer delight",
    price: 350,
    description: "Beautiful Arrangementfor Summer Artists", 

});

let bouquet3 = {
    name: "Autum Criterion",
    price: 450,
    description: "Beautiful Arrangement for Autum Criterion",
};

bouquets.push(bouquet3);

bouquets.push(
{
   name: "Freshness",
   price: 350,
   description: "A Beautiful Arrangement of Red and White Roses"

});


//console.log(bouquets);

// function to display bouquets

function displayBouquets(bouquets: Array<typeof bouquet>)
 {
    for (let i of bouquets) 
    {
        console.log(
        `title: ${i.name}
        price: ${i.price}
        description: ${i.description}
        ____________\n`);
    }
}

displayBouquets(bouquets);