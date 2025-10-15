const prompt = require("prompt-sync")()

let chaine = prompt("Donner une chaîne de caractères : ");
let tab = chaine.split('');

let c = 0

for (let i = 0 ; i < tab.length ; i++ ){
    if(tab[i] === 'a'|| tab[i] === 'e' || tab[i] === 'i' || tab[i] === 'o' || tab[i] === 'u' || tab[i] === 'y'){
       c ++
    }
}
console.log("le nombre de voyelles dans une chaîne de caractères est :"+c)
