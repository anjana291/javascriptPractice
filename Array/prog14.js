a=[10,5,2,13,58,1]
//highest number
highest = a.reduce((item1,item2)=>item1>item2?item1:item2)
console.log(highest);
//lowest number
lowest = a.reduce((item1,item2)=>item1<item2?item1:item2)
console.log(lowest);
console.log('lowest using for loop');
low=a[0]
for(n of a){
    if(n<=low){
        low = n
    }
}
console.log(low);
//sum
sum = a.reduce((item1,item2)=>item1+item2)
console.log(sum);