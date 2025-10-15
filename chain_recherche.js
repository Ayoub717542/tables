const prompt = require("prompt-sync")();

let tab = []

for(i = 0 ; i<3 ; i++){
    tab[i]=(prompt("donner " +i+  " chaines : "))
    
}

    let chain = prompt("donner un chain a rechercher : ")

    for(i = 0 ; i<3 ; i++){
    if (tab[i]===chain){
        console.log(chain+" est présent à la position "+i)

    }}
