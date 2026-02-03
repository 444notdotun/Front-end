function uniqueness(array){
        let list = [];
        for(let number of array){
            if(!list.includes(number)){
                list.push(number);
            }
        }
        return list;
    }


    function  occurrence( numbers){
        largest = Math.max(...numbers);
        let counter =  new Array(largest+1).fill(0);
        for(let number of numbers){
            if(number!=0){
                counter[number]++;
            }
        }
        return counter;
    }

    function main(){
        let numbers = [1,1,2,3,3,3,4];
        let occurrences = occurrence(numbers);
        let unique = uniqueness(numbers);
        let occur = {};
        for(let i=0; i<occurrences.length; i++){
            if(occurrences[i]>0){
                occur[i] = occurrences[i];
            }
        }
        
        return { unique, ...occur };
    }
    console.log(main());