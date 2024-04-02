//w.a.p to display given number in reverse order 
// i/p :123
// o/p :321

num = 120
str = ''

while (num > 0) {
    last = num%10
    str = str + last
    num = Math.floor(num/10)
}
console.log(str);

num1 = 1230
rev = 0
while (num1 != 0) {
    lastd = num1 % 10
    rev = rev * 10 + lastd
    num1 = Math.floor(num1/10)
}
console.log(rev);