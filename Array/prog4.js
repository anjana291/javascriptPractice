let expense = [12000,23000,40000,34000,55000,22000,10000]

//find lowest expense
low=expense[0]
for(let num of expense){
    // console.log(num);
    if(num<=low){
        low=num
    }
}
console.log(`Lowest num is ${low}`);

//find highest expense
high=expense[0]
for(let num of expense){
    // console.log(num);
    if(num>=high){
        high=num
    }
}
console.log(`Highest num is ${high}`);

//total expense
sum=0
for(num of expense){
    sum+=num
}
console.log(`Total expense ${sum}`);