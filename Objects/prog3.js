//w.a.p to check whether gender is present in the object employee.
//if present print 'present' else add new key as gender with value as male
employee = {
    empID : 1000,    //0:1000
    empName :'Neel',  //1:neel
    empDesig :'Developer',
    location :'kochi',
    salary : 25000
}

'gender' in employee? console.log('gender is present') :( employee["gender"]='male',console.log(employee))
'gender' in employee? console.log('gender is present') :( employee["gender"]='male',console.log(employee))
