//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('product name');
products.forEach((element)=>{
    console.log(element[1]);
})
//2. display product whose price < Rs.50
console.log('product whose price < Rs.50');
products.filter((item)=>item[2]<50).forEach((element)=>console.log(element[1]))
//3. print price of oreo
priceOfOreo=products.find((item)=>item[1]=='oreo')
console.log(priceOfOreo[2]);
//4. print costly product name
costly = products.reduce((element1,element2)=>element1[2]>element2[2]?element1:element2)
console.log(costly[1]);
//5. display out of stock product
products.filter((item)=>item[3]==0).forEach((element)=>{console.log(element[1]);})
//6. sort products based on stock in decsending order
products.sort((item1,item2)=>item2[3]-item1[3]).forEach((element)=>{console.log(element[1]);})
//7. print product having maximum available stock
console.log('---------------------------------');
max = products.reduce((item1,item2)=>item1[3]>item2[3]?item1[1]:item2[1])
console.log(max);
//8. is there any product can be purchased by Rs. 10
can=products.some((element)=>element[2]<=10)
console.log(can?'yes':'no');
//9. Is there any product in the range of 10 to 30
pros = products.some((element)=>element[2]>=10 && element[2]<=30)
console.log(pros?'yes':'no');
//10.print all products in the range of 10 to 30
products.filter((item)=>item[2]>=10 && item[2]<=30).forEach((element)=>{console.log(element[1]);})
// console.log(prod);
 