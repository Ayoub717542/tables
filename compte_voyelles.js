const prompt = require("prompt-sync")()
let tab = []
let i=0
tab[i] = (prompt("donner un chain de character  : "))

let c = 0

for (let i = 0 ; i < tab.length ; i++ ){
    if(tab[i] === 'a'|| tab[i] === 'e' || tab[i] === 'i' || tab[i] === 'o' || tab[i] === 'u' || tab[i] === 'y'){
       c += 1
    }
}
console.log("le nombre de voyelles dans une chaîne de caractères est :"+c)
