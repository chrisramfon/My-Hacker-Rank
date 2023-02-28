function processData(input) {
    //Enter your code here
    
    // Divide the input
    const data = input.split('\n');
    
    for(let i = 0; i < data[0]; i++){
        
        let str = data[i+1], even = '', odd = '';
        
        for(let j = 0; j < str.length; j++){

            (j%2) > 0 ? odd = odd + str[j] : even = even + str[j];
        }
        
        console.log(`${even} ${odd}`);
    }
} 