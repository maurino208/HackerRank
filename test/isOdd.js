/* 
 * COMPLEJIDAD DEL ALGOTIRMO 
 * Este algoritmo pertenece a O(n) y es lineal.
 * Ya que, en el peor de los casos (numero 109), el algoritmo recorre  
 * hasta la raiz de n y sale del ciclo, corroborando que es primo.
*/

function esPrimo(n) {
    if(n === 2) {
        return true; // unico numero par que es primo
    }
    if(n%2 === 0) {
        return false; // no es dos y es par, entonces NO es primo
    }
    else { //es impar
        let i = 2;
        let divisores = 0;
        while((i <= Math.sqrt(n)) && (divisores === 0)){
            if(n%i === 0) {
                divisores++; //es divisor de n
            }
            i++;
        }
        if(divisores === 0) {return true;} //es primo
        else {return false;} //no es primo
    }    
}
function main() {
    let num = 109;
    let primo = esPrimo(num);
    if (primo) {
        return "El numero " + num + " es primo";
    }else {
        return "El numero " + num + " no es primo";
    }
}

console.log(main());



