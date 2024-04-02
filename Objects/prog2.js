//w.a.p to check whether location key is present or not
employee = {
    empId: 1001,
    empName: 'Maxwell',
    empDesig: 'Developer',
    emploc: 'Kochi',
    Salary: 35000,
    experience: 6
  }

//  isPresent = false
//   for(let x in employee){
//     if(x == 'emplocc'){
//         isPresent = true
//     }
//   }

//   console.log(isPresent?'location key is present':'location key is not present');

if('emploc' in employee){
    console.log('location key is present');
}
else{
    console.log('location key is not present');

}