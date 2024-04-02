//w.a.p to find gcd/hcf of given 2 no.

num1 = 12
num2 = 30
gcf = 0
for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        gcf= i
    }
}
console.log(gcf);