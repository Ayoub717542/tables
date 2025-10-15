const prompt = require("prompt-sync")();
let tab=[];
let s=0
let m=0
for (let i = 0 ; i < 10 ; i++){
   tab[i] = parseInt(prompt("donner un nomber : "))
    s += tab[i];

}
m=s/tab.length

 console.log("le somme est : "+s)
 console.log("la moyenne est : "+m)
