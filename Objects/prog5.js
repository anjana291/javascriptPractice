text="hai hello all hello world all"
//w.a.p to find the word count i the given text
//o/p : {hai:1,hello:2,all:2,world:1}

words = text.split(" ")
// console.log(words);
obj = {}
for(word of words){
    // console.log(word);
    if(word in obj){
        obj[word] += 1
    }else{
        obj[word] = 1
    }
}
console.log(obj);

console.log('------------------------------------');
wc = {}
text.split(' ').map(element => element in wc ? wc[element] += 1:wc[element] = 1);
console.log(wc);