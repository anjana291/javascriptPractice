let fruits = ['apple',"orange","kiwi","grapes","pineapple"]

console.log(fruits);

for(index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}

console.log('Index positions:');
console.log('----------------');
for (let i in fruits){
    // console.log(i);
    console.log(fruits[i]);
}

console.log('Items access in for loop:');
console.log('-------------------------');
for(let x of fruits){
    console.log(x);
}