//w.a.p to print all prime numbers b/w 1-50

for(i=2;i<=50;i++){
    isPrime = true
    for(j=2;j<i;j++){
        if (i%j==0) {
            isPrime = false
            break            
        }
    }
    if(isPrime){
        console.log(i);
    }
}