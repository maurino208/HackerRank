'use strict';

const fs = require('fs');

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

// Complete the arrayManipulation function below.
const queriesToTriplets = queries => (
    queries
    .reduce((arr, [start, end, value]) => {
        arr.push(
            ['start', start, value],
            ['end', end, value]
        );

        return arr;
    }, [])
);

const compareTriplets = ([typeA, indexA], [, indexB]) => {
    if (indexA !== indexB) {
        return indexA - indexB;
    }
    if (typeA === 'start') {
        return -1;
    }

    return 1;
};

const maxReducer = ([max, before], [type, , value]) => {
    const current = type === 'start' ?
        before + value :
        before - value;

    return [Math.max(max, current), current];
};

const arrayManipulation = (size, queries) => {
    const [max] = queriesToTriplets(queries)
        .sort(compareTriplets)
        .reduce(maxReducer, [-Infinity, 0]);

    return max;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}