//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('district having Highest +ve case:');
highest = covid_data.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(highest[1]);
//2. district having Highest 1st dose vaccine
console.log('-------------------------------------------');
console.log('district having Highest 1st dose vaccine:');
highvacc = covid_data.reduce((item1,item2)=>item1[5]>item2[5]?item1:item2)
console.log(highvacc[1]);
//3. district having lowest death rate
console.log('-------------------------------------------');
console.log('district having lowest death rate');
low = covid_data.reduce((rate1,rate2)=>rate1[3]<rate2[3]?rate1:rate2)
console.log(low[1]);
//4. sort data with +ve case in descending order
console.log('-------------------------------------------');
console.log('sort data with +ve case in descending order');
covid_data.sort((item1,item2)=>item2[2]-item1[2]).forEach(element => {
    console.log(element[1]);
});

//5. is district with +ve cases > 15000
console.log('-------------------------------------------');
console.log('is district with +ve cases > 15000');
cases = covid_data.some((item)=>item[3]>15000)
console.log(cases?'Yes':'No');
//6. sort data with 1st dose vaccine ascending order
console.log('-------------------------------------------');
console.log('sort data with 1st dose vaccine ascending order');
// sortvaccine = 
covid_data.sort((item1,item2)=>item1[5]-item2[5]).forEach((element)=>{
    console.log(element[1]);
})
//7. Print Thrissur details
console.log('-------------------------------------------');
console.log('Print Thrissur details');
findT=covid_data.find((item)=>item[1]=='Thrissur')
console.log(findT);
//8. Print total number of positive cases
console.log('-------------------------------------------');
console.log('Print total number of positive cases');
// console.log(covid_data.reduce((item1,item2)=>item1[2]+item2[2]))
sum=covid_data.map((item)=>item[2]).reduce((item1,item2)=>item1+item2)
console.log(sum);
//9. Print total number of cured cases
console.log('-------------------------------------------');
console.log('Print total number of cured cases');
cured = covid_data.map((item)=>item[4]).reduce((item1,item2)=>item1+item2)
console.log(cured);
//10. Print cured cases in Idukk
console.log('-------------------------------------------');
console.log('Print cured cases in Idukk');
cured_Idukki = covid_data.find((item)=>item[1]=='Idukki')
console.log(cured_Idukki[4])
