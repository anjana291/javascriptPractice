//w.a.p to swap 2 numbers without using temp variable

function swap(n1,n2) {  //10,20
    console.log(`n1=${n1} && n2=${n2}`);
    n1=n1+n2;           //30
    n2=n1-n2;           //30-20= 10
    n1=n1-n2;           //30-10=20
    console.log('After swapping:');
    console.log(`n1=${n1} && n2=${n2}`);
}

swap(10,20);

