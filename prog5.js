//input :  2   3    4
//output: 24  369  4936

num=4;
i=1;
str=' ';
while(i<=num){
    str=str+i;
    i++;
} 
console.log(num*str);

//input :  123   456
//output:  321   654

num1 = 123
st=''
while(num1>0){
    rem=num1%10;
    // console.log(rem)
    st=st+rem;
    num1=Math.floor(num1/10);
}
console.log(st);

//check whether the given no is palindrome or not
//121 12321

palindromeNum=134
str=''
temp=palindromeNum
while(palindromeNum>0){
    rem=palindromeNum%10
    str=str+rem
    palindromeNum=Math.floor(palindromeNum/10)
}
console.log(str)
console.log(temp==str?'Palindrome':'Not Palindrome');

//factorial of given number

num=3;
fact=1
i=1
while(i<=num){
    fact=fact*i
    i++
}
console.log(fact);

//armstrong number

num=154
sum=0
temp=num
while(num>0){
    digit=num%10
    console.log(digit);
    sum=sum+digit**3
    num=Math.floor(num/10)
}
console.log(temp==sum?'Armstrong':'Not Armstrong');