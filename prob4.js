//w.a.p to print the number of digits of given number

function noOfdigits(num) {
    let str=num.toString();
    console.log(str.length);    
}

noOfdigits(100000);

const no = (num)  => (num.toString()).length;

console.log(no(10000));