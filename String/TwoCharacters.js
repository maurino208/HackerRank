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

// Complete the alternate function below.
function alternate(s) {

    let char1;
    let char2;
    let long = 0;

    for(let i = 0; i < s.length; i++){

        if(s.indexOf(s.charAt(i)) === i){
            char1 = s.charAt(i);

            for(let j = i + 1; j < s.length; j++){
                let a = s;

                if(s.indexOf(s.charAt(j)) === j){
                    char2 = s.charAt(j);

                    for(let k = 0; k < s.length; k++){
                        if(s.indexOf(s.charAt(k)) === k){
                            let c3 = s.charAt(k);

                            if(c3 !== char1 && c3 !== char2){
                                let arr = a.split(c3);
                                a = arr.join(``);
                            }
                        }
                    } 
                    if(a.length > long) {
                        long = lenghtIfValid(a);
                    }
                }
            }
        }
    }
    return long;

    function lenghtIfValid(a){
        for(let i = 0; i < a.length - 1; i++){
            if(a.charAt(i) === a.charAt(i+1)){
                return long;
            }
        }
        return a.length;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
