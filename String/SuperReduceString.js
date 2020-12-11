'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the superReducedString function below.
function superReducedString(s) {

    let a = s.split('');
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            a.splice(i, 2);
            i = -1;
        }
    }
    return a.length === 0 ? 'Empty String' : a.join('');

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
