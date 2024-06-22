
              
const testData = 
[
['NewYork', 'Washington'],
['Washington', 'Chicago'],
['Chicago', 'Austin'],
['Chicago', 'NewYork'],
['Washington', 'Houston'],
]

function processTest(path) {
    const lookup = {};
   
    for(const item of path){
        const source = item[0]
        const destinatiion = item[1]

        if(lookup[source]) {
            lookup[source].push(destinatiion) 

        }
        else{
            lookup[source] = [destinatiion]
        }

        if(!lookup[destinatiion]) {//
            lookup[destinatiion] = []
           
        }

    }

    
    const resultArray = []
    for(const row in lookup){
        if(!lookup[row].length)resultArray.push(row)
    }

    return resultArray
}

console.log(processTest(testData))