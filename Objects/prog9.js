products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
products.forEach(element => {
    console.log(element.pName);    
});
console.log('---------------------------------------');

//2. print all mobile details whose display is lcd
products.filter((item)=> item.display == 'lcd').forEach((element)=>console.log(element.pName))
console.log('---------------------------------------');

//3. print 5g mobile phone name
products.filter((item)=>item.band == '5g' && console.log(item.pName))
console.log('---------------------------------------');

//4. sort mobile based on price
sortPro = products.sort((item1,item2)=>item1.price - item2.price).forEach(element=>{console.log(element.pName,element.price)})
// console.log(sortPro);
console.log('---------------------------------------');


//5. print costly mobile
costly = products.reduce((item1,item2)=>item1.price>item2.price?item1:item2)
console.log(costly.pName);
console.log('---------------------------------------');

//6. print low cost mobile
lowCost = products.reduce((item1,item2)=>item1.price>item2.price?item2:item1)
console.log(lowCost.pName);