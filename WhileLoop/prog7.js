//check whether the given no is palindrome or not
//121 12321

num = 12321
str = ''
temp = num

while (num!=0) {
    lastdigit = num % 10
    str = str + lastdigit
    num = parseInt(num/10)    
    // console.log(str);
    // console.log(num);
}
console.log(str);


console.log(temp == str?'Palindrome':'Not Palindrome');