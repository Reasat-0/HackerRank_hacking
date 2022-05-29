'use strict';

const fs = require('fs');

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

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(a) {
    // Write your code here
    
    let sum = 0;
    let temp_sum = 0;
    let x = ""
    for(var i = 0; i< a.length-2; i++){
    
        for(var j = 0 ; j<a.length-2; j++){
            
                temp_sum =  parseInt(a[i][j],10) + parseInt(a[i][j+1],10) + parseInt(a[i][j+2],10) +
                            parseInt(a[i+1][j+1],10) +
                            parseInt(a[i+2][j],10) + parseInt(a[i+2][j+1],10) + parseInt(a[i+2][j+2],10)
            
            if(i === 0 && j === 0){
                sum = temp_sum
            }
            sum = temp_sum > sum ? temp_sum : sum
        }
    
    }
    
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    
    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
