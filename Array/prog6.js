//i/p : [4,5,6]
//o/p : [11,10,9]

let arr = [4,5,6]
sum=0
x=[]
for(a of arr){
    sum+=a
}
console.log(sum);

for(i of arr){
    x.push(sum-i)
}
console.log(x);
