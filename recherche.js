const prompt = require("prompt-sync")();

let tab = []

for(let i = 0 ; i<8 ; i++){
    tab[i]=prompt("donner " +i+ "entiers : ")
    
}

    let NR = prompt("donner un number a rechercher : ")

    for(i = 0 ; i<8 ; i++){
    if (tab[i]===NR){
        console.log(NR+" est présent à la position "+i)

    }}
