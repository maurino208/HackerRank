process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function updateMap(map, l, n) {
    map[l]--
    if (!map[l]) delete map[l]

    if (!map[n]) map[n] = 0 
    map[n]++

    return map
}

function getMedian(map, d, p) {
    let index = 0
    const keys = Object.keys(map)
    let a = 0
    let b = 0
    while (p > 0) {
        const key = keys[index]
        p -= map[key]
        if (1 > p) {
            a = key
        }
        if (!b && 2 > p) {
            b = key
        }
        index += 1
    }
    
    if (d % 2 === 0) {
        return (Number(a) + Number(b)) / 2
    } else {
        return a
    }
}

function activityNotifications(expenditure, d) {
    let map = {}
    let count = 0
    let list = []
    const p = d % 2 === 0 ? d / 2 + 1 : (d + 1) / 2

    expenditure.slice(0, d).forEach((i) => {
        if (!map[i]) map[i] = 0
        map[i]++
    })

    for (let i = 0; expenditure.length - d > i; i++) {
        if (i !== 0) {
            map = updateMap(map, expenditure[i - 1], expenditure[i + d - 1])
        }
        const m = getMedian(map, d, p)
        const s = expenditure[i + d]

        if (s >= m * 2) count++
    }
    
    console.log(count)
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var d = parseInt(n_temp[1]);
    expenditure = readLine().split(' ');
    expenditure = expenditure.map(Number);
    activityNotifications(expenditure, d);
}