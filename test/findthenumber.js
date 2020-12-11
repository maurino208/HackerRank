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
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findNumber(arr, k) {
 
    let ordenado = arr.slice().sort((a, b) => a - b);
    let min = 0;
    let max = arr.length - 1;
    let b;
    
    while(min <= max) {
        b = Math.floor((min + max) / 2);
        if(ordenado[b] === k){
            return "YES";
        } else if(ordenado[b] < k) {
            min = b+1;
        } else if(ordenado[b] > k) {
            max = b -1
        }
    }
    return "NO";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = findNumber(arr, k);

    ws.write(result + '\n');

    ws.end();
}
