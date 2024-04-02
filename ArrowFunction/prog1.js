//w.a.p to find cube of a given number using function

const cube = (num) => num**3
console.log(cube(3));

//w.a.p to check whether a given number is odd/even

const evenOdd = (num) => num%2==0?'Even Number':'Odd Number'
console.log(evenOdd(90));

//w.a.p to check whether a given number is positive or negative

const PositiveOrnegative = (num) => num<0?'Negative': num>0?'Positive':'Neither positive nor negative'
console.log(PositiveOrnegative(7));
console.log(PositiveOrnegative(-7));
console.log(PositiveOrnegative(0));