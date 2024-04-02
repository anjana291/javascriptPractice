//w.a.p to check whether the given 3 digit num i s armstrong or not
//153 = 1**3 + 5**3 + 3**3 = 1+125+27 = 153

num = 153
temp = num
sum = 0
while(num>0){
    dig = num % 10
    sum = sum + dig**3
    num = parseInt(num/10)
}
console.log(temp == sum ?'Armstrong':'Not Armstrong');
