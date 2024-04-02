accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]


//1. total number of accounts
console.log('Total Number of Accounts: ');
console.log(accounts.length)
console.log('------------------------------------');

//2. print account number whose ac_type is savings
console.log('account number whose ac_type is savings');
acc = accounts.filter((item=>item.ac_type=='savings')).forEach(element => { console.log(element.acno);});
// console.log(acc);
console.log('------------------------------------');

//3.print the balance of accnount number 1000
console.log('balance of accnount number 1000');
bal = accounts.filter((item=>item.acno == 1000 && console.log(item.balance)))
// console.log(bal);
console.log('------------------------------------');


//4. print all gpay transactions
console.log('all gpay transactions');
gpay = accounts.map((item)=>item.transaction).flat().filter((element)=>element.mode=='gpay').forEach((element)=>console.log(element))
// console.log(gpay);
console.log('------------------------------------');

//5. print all transaction whose amount > 5000
console.log('all transaction whose amount > 5000');
trab = accounts.map((item)=>item.transaction).flat().filter((element)=>element.amount>5000).forEach((item)=>console.log(item))
// console.log(trab);
console.log('------------------------------------');

//6. print credit transaction of account 1002
console.log('credit transaction of account 1002');
credit = accounts.map((item)=>item.transaction).flat().filter((element)=>element.to == 1002)
console.log(credit);
console.log('------------------------------------');

//7. print debit transaction of account 1002
console.log('debit transaction of account 1002');
debit = accounts.filter((item)=>item.acno == 1002).map((item)=>item.transaction).flat()
console.log(debit);
console.log('==========================');
deb = accounts.find((item)=>item.acno == 1002).transaction
console.log(deb);
console.log('------------------------------------');

//8. print transaction history of 1002
console.log('transaction history of 1002');
transHis = {
    creditHis : credit,
    debitHis : debit
}
console.log(transHis);
console.log('------------------------------------');

   //print as array
console.log('transaction history as array');
arrTrans = [...credit,...debit]
console.log(arrTrans);
console.log('------------------------------------');

//9. print highest balance account details
highbal = accounts.reduce((item1,item2)=> item1.balance>item2.balance ? item1 : item2)
console.log(highbal);