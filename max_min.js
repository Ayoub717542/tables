const prompt = require("prompt-sync")();

let tab = []

for(let i = 0 ; i<7 ; i++){
 
    tab[i]=parseInt(prompt("donner " +i+  " number : "))
}
let max = tab[0]
let min = tab[0]
 for(i = 1; i<7 ; i++){
    if ( tab[i] > max){
        max = tab[i]
    }
    if (tab[i] < min){
        min = tab[i]
    }
 }
    
    for(i = 0; i<7 ; i++){
       console.log("tab ["+i+"] = " +tab[i])
    }
        console.log("le max est : "+max)
        console.log("le min est : "+min)
    
