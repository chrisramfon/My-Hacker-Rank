'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const S = readLine();
    
    try {
        
        let value = Number( S )

        console.log( value ? value : value = error ) 
    
    } catch(err) {
        console.log( "Bad String" )
    }
    
    
}
