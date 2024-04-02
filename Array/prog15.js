a=[10,5,2,13,58,1]
even = a.filter((num)=>num%2==0)
console.log(even);

greater = a.filter((num)=>num>10)
console.log(greater);
console.log('is there any number greater than 10');
atf = a.some(num=>num>10)
console.log(atf?'yes':'no');

findex = a.find(num=>num%2==0)
console.log(findex);