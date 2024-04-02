let arr = [10,23,11,2,5,3]
//check whether 2 is present

num=2
isPresent = false
for(let i of arr){
    // console.log(i);
    if(i == num){
        isPresent=true
    }
}
console.log(isPresent?'2 is present':'Not present');