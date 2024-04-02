p=[10,20,11,23]
q=[11,10,22,90]

isFound=false
for(i of p){
    for(j of q){
        if(i==j){
            isFound=true
            console.log(i);
        }
    }
}
!isFound && console.log('No duplicate')