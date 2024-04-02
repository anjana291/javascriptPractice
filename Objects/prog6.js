//w.a.p to find the number count from the given array
arr=[10,20,50,20,30,80,10,20,70,50,20,10]

count = {}

arr.map(element => element in count? count[element] += 1: count[element] = 1);
console.log(count);