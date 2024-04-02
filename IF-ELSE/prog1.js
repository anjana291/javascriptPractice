//w.a.p to find the 2nd largest number from the given 3 nos and sort the given 3 nos in descending order

n1 = 700
n2 = 40
n3 = 100

if(n1>n2 && n1>n3){
    if(n2>n3){
        console.log('Second largest num is ',n2);
        console.log(`descending order is ${n1},${n2},${n3}`);
    }
    else{
        console.log('Second largest num is ',n3);
        console.log(`descending order is ${n1},${n3},${n2}`);
    }
} 
else if(n2>n1 && n2>n3){
    if(n1>n3){
        console.log('Second largest num is ',n1);
        console.log(`descending order is ${n2},${n1},${n3}`);
    }
    else{
        console.log('Second largest num is ',n3);
        console.log(`descending order is ${n2},${n3},${n1}`);
    }
}
else if(n3>n1 && n3>n2){
    if(n1>n2){
        console.log('Second largest num is ',n1);
        console.log(`descending order is ${n3},${n1},${n2}`);
    }
    else{
        console.log('Second largest num is ',n2);
        console.log(`descending order is ${n3},${n2},${n1}`);
    }
}
else{
    console.log('All numbers are equal');
}