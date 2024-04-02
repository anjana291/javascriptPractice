for(row=1;row<=5;row++){
    str=''
    for(sp=5;sp>row;sp--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
