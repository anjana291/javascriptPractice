employee = {
    empId : 1001,
    empName : 'Maxwell',
    empDesig : 'Developer',
    emploc : 'Kochi'
}
console.log(employee.empId);
console.log(employee["empName"]);

employee['Salary'] = 32000
console.log(employee);

Object.assign(employee,{'DOJ':'Jan 2022'})
console.log(employee);

delete employee.DOJ
console.log(employee);

Object.assign(employee,{'experience': 3})
console.log(employee);

employee['Salary'] = 35000
console.log(employee);

employee['experience'] += 3
console.log(employee["Salary"]);

for(key in employee){
    console.log(key);
}
