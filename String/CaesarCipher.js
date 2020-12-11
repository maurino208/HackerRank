// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the caesarCipher function below.
// function caesarCipher(s, k) {



// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const s = readLine();

//     const k = parseInt(readLine(), 10);

//     let result = caesarCipher(s, k);

//     ws.write(result + "\n");

//     ws.end();
// }

function caesarCipher(s, k) {

    if (k < 0) {
        return caesarShift(s, k + 26);
    }

    let output = "";

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c.match(/[a-z]/i)) {
            let code = s.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + k) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + k) % 26) + 97);
            }
        }
        output += c;
    }
    return output;


}
caesarCipher('Juan', 2);