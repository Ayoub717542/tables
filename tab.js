let car = ["toyota","honda","mercedes"]

car.unshift("BMD")
car.shift()
car.push("BMW")
car.pop()
car[1]="fiat"
let L = car.length
console.log(L)

for (let i = 0 ; i < car.length; i++){
    console.log(car[i])
}
