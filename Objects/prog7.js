//w.a.p to find first recursive letter
pattern='ABCBACCBAA'  //B

characters = pattern.split('')
// console.log(characters);
obj={}

for(let char of characters){
    if(char in obj){
        // console.log(`first recursive letter : ${char}`);
        // break;
        obj[char] += 1
    }else{
        obj[char] = 1
    }
}
console.log(obj);