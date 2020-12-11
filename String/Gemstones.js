function gemstones(arr) {

    let roca = arr[0];
    cantGemas = 0;
    for(let i=0; i<roca.lenght; i++){
        console.log(roca.lenght)
        var letra = roca.charAt(1);
        console.log(letra)
        var j=1;
        console.log(j)
        let isgema = true;
        while(j<arr.lenght && isgema){
            if(!arr[j].includes(letra)){
                isgema = false;
            }
            j++;
        }
        cantGemas++;
    }
    console.log(cantGemas);
    console.log(roca);
}

// function gemstones(arr) {
//     let combined = arr.join('');
//     let unique = [...new Set(combined)];
//     let result = unique.filter(ch =>
//         arr.every(str => str.includes(ch)));
//     console.log(result.length);
// }

gemstones(['abc', 'abc', 'bc']);