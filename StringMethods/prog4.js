//w.a.p to print all vowels in the given string
str = 'Good Evening All'
vowel = ['a','e','i','o','u','A','E','I','O','U']

characters = str.toLowerCase().split('')
 console.log(characters);

p = []

for(char of characters){
     if (vowel.includes(char) && !p.includes(char)) {
     // console.log(char);        
         p.push(char)
     }
}
console.log(p);
console.log('----------------------------------');

q = []
a = Array.from(str.toLowerCase()).filter((item)=>vowel.includes(item) && !q.includes(item) && q.push(item))
console.log(q);