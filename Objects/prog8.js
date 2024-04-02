//object within another object
weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}


wd = {}

for(let data of weatherData){
    districtWd = data.district
    currTemp = data.weather
    // console.log(district,',',currTemp);
    if(districtWd in wd){
        oldTemp = wd[districtWd]
        if(oldTemp>currTemp){
            wd[districtWd] = oldTemp
        }
        else{
            wd[districtWd] = currTemp
        }
    }
    else{
        wd[districtWd] = currTemp  //{thrissur:32}
    }
}
console.log(wd);