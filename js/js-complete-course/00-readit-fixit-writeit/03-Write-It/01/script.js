const movies = [
   `Gate to Heaven` ,
   `Tout S'est Bien Passe`,
   `Herself`,
   `Dune`,
   `Bebedetta`,
   `Respect`,
   `Titan`,
   `Give Me Liberty`,
   `Une Vie Demente`,
   `Paw Patrol: De Film`,
   `Wolfwalkers`
];

document.write(`<ol>`);
for (let i = 0; i < movies.length; i++){
    document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);