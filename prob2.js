// given the name of the customer, X, the mobile Number M,billing address A, number of items I and cost of each item C 
//w.a.p to print the bill    Bill Amt = I * C

// x='Anjana'
// m=9988113322
// a='3rd cross-down south-CA'
// i=3
// c=2.5
// billAmt=0
// console.log(`Name: ${x}, Mobile: ${m},Address: ${a},Items: ${i},Bill Amount: ${i*c}`)

function bill(i,c) {
    return i*c;    
}

x='Anjana'
m=9988113322
a='3rd cross-down south-CA'
billAmt=bill(3,2.5)
console.log(`Name: ${x}, Mobile: ${m},Address: ${a},Bill Amount: ${billAmt}`)
