// $$$$$
//  $ $
//   $
//  $ $
// $$$$$

for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        if(row==1||row==5||row==col||(row+col)%6==0){
            str=str+'$'
        }
        else{
            str=str+' '
        }
    }
    console.log(str);
}