var car = {
    name : 'Bolero',
    model : 'hatch black',
    manufacturer : 'maruti',
    price : '10 Lakhs'
}

console.log(car.name,car.manufacturer);

"model" in car && console.log(car.model);

car["varient"] = ['manual']
console.log(car);

car['varient'].push('automatic')
console.log(car);

car["color"] = ['red','white','blue']
console.log(car);

