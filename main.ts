function sandwich(...items: string[]): void {
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++){
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich kamran tessori")

sandwich(`capsicum`,`tomato`,`chicken`)
sandwich(`beef`,`cheese`)
sandwich(`garlic chicken`,`mayo sauce`)


type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
return{
    manufacture,
    model,
    ...optional
}
}
 const mycar: car = createCar("toyota","corolla",{color: "silver", year: "2024"})
 console.log(mycar)