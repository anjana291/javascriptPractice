const arr = [[2,49],[34,24],[3,5],[34,67]]
for (num of arr) {
    // console.log(num);
    for(n of num)    {
        // console.log(n);
        if(n>25){
            console.log(n);
        }
    }
}

arr1 = [[2,49,[8,92,[12,2]]],[34,24],[3,5],[34,67]]
a = arr1.flat(4)
console.log(a);