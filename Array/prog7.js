a=[10,20,30,40,50,60,30,20,10]

isPresent = false
// console.log(search);
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isPresent=true
            console.log(a[i]);
        }
    }
}
// console.log(isPresent?'Duplicate Present':'No duplicate');
!isPresent && console.log('Duplicate not present');
