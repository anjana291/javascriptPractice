const arr = [11,10,2,3,4,12]

searchkey = 15
low = 0
up = arr.length-1
isPresent = false
arr.sort((a,b)=>a-b)


while (low<=up) {
    mid = Math.floor((low + up)/2)
    if(arr[mid] == searchkey){
        isPresent = true
        break
    }
    else if (arr[mid]>searchkey) {
        up = mid-1    
    } 
    else {
        low = mid+ 1    
    }    
}
console.log(isPresent?`${searchkey} found`:`${searchkey} Not found`);