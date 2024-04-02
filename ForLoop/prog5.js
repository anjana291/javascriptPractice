//w.a.p to check whether given number is prime or not

num = 5
isPrime = true
for(i=2;i<num;i++){
    if(num%i == 0){
        isPrime = false   ;
        break
    }    
}
console.log(isPrime?'Prime Number':'Not Prime');