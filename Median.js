function sorted( values){
    for(let i = 0; i<values.length;i++){
        for(let j = i+1; j<values.length;j++){
            if(values[j]<values[i]){
            let newvalue = values[i]
            values[i] = values[j]
            values[j]=newvalue
        }
        }
    }
   return values
}

function getMedian(sortedValue){
    let result = 0;
    if(sortedValue.length%2>0){
        let value = Math.floor(sortedValue.length/2)
        result = sortedValue[value]
        
    }
    else{
        let value = Math.floor(sortedValue.length/2)
        result = (sortedValue[value-1]+sortedValue[value])/2
    }
    return result
}

function main(){
    let values = [20,15,10,16,17]
    let sortedValue = sorted(values)
    let median = getMedian(sortedValue)
    console.log("Median is: ", median)
}

main()