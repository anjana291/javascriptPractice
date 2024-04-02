// 1
// 01
// 101
// 0101

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        if(row==col || row-col==2){
            str=str+'1'
        }
        else if(row-col==1 || row-col==3){
            str=str+'0'
        }
    }
    console.log(str);
}


for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        if((row+col)%2==0){
            str=str+'1'
        }
        else{
            str=str+'0'
        }
    }
    console.log(str);
}