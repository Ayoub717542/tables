const prompt = require("prompt-sync")();
let tab=[];
for (let i = 0 ; i < 5 ; i++){
   tab[i] = parseInt(prompt("donner un nomber "+i+" : "))
}
console.log("Les carrés des éléments sont :")
for (i=0;i<tab.length;i++){
    console.log(tab[i]*tab[i])
}
