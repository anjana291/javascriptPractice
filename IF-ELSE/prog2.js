/* w.a.p to display FIZZ when a number is divisible by 3 & 
BUZZ when a number is divisible by 5 &  
FIZZBUZZ  when a number is divisible by 15 */

num = 150
if (num % 3 == 0 && num % 5 == 0) {
    // console.log(`${num} is divisible by 15`); 
    console.log('FIZZBUZZ');   
} 
else if(num % 5 == 0) {
    // console.log(`${num} is divisible by 5`); 
    console.log('BUZZ');   

}
else if(num % 3 == 0) {
    // console.log(`${num} is divisible by 3`); 
    console.log('FIZZ');   
}
else{
    console.log(`${num} is not divisible by 3,5 or 15`);
}

num1 = 800
(num1 % 3 == 0 && num1 % 5 == 0)? console.log('FIZZBUZZ') :
(num1 % 5 == 0)? console.log('BUZZ'):
(num1 % 3 == 0)? console.log('FIZZ'): 
console.log('${num1} is not divisible by 3,5 or 15');