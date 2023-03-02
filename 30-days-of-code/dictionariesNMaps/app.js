function processData(input) {
    //Enter your code here
    const data = input.split('\n'), iterations = parseInt(data[0]), myMap = new Map();
    
    data.slice(1).forEach((i,j) => {
        
        if(j < iterations){
            
            const values = i.split(' ');
            
            myMap.set(values[0], values[1]);
        }else{
            
            myMap.has(i) ? console.log(`${i}=${myMap.get(i)}`) : console.log('Not found');
        }
    });
    
}