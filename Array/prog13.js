a=[10,11,12,13,14,15]
for(num of a){
    console.log(num**2);
}

console.log('-------------------------');
a.forEach(element => {
    console.log(element**2);
});
console.log('-------------------------');
square = a.map((element)=>element**2)
console.log(square);

cube = a.map((item)=>item**3)
console.log(cube);

alter = a.map((item)=> item<=13? item+1 : item-1)
console.log(alter);