'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let a = 0;

    for(let i = 0; i < q.length; i++) {
        const b = q[i] - 1;
        const c = b - i;

        if(c > 2) {
            return console.log("Too chaotic");
        }
        if(c <= 0) {
            for(let j = Math.max(0, b - 1); j < i; j++){
                const d = q[j] -1;

                if(d > b) {
                    a++;
                }
            }
        }
    }

    console.log(a);

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
