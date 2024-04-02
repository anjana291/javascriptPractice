// *****
// *   *
// *   *
// *   *
// *   *
// *   *
// *****

for(row=1;row<=7;row++){
    str=''
    for(col=1;col<=5;col++){
        if(col==1 || row == 1 || row == 7 || col == 5){
            str=str+"*"
        }
        else{
            str=str+" "
        }
    }
    console.log(str);
}