//Dado un string obtiene un arraylist con los caracteres

static ArrayList<String> getChar(String s) {
		ArrayList<String> arrayString=new ArrayList<String>();
		for(int i=0; i<arrayString.size(); i++) {
			String carac= Character.toString(s.charAt(i));
			if(!arrayString.contains(carac)) {
				arrayString.add(carac);
			}
		}
		return arrayString;
}


--------------------------------------------------------------------------------------------------------------------------------------------
//método para calcular el número de veces que se repite un carácter en un String
public static int contarCaracteres(String cadena, char caracter) {
        int posicion, contador = 0;
        //se busca la primera vez que aparece
        posicion = cadena.indexOf(caracter); //indexOf=devuelve la primera posición dentro del String donde se encuentra el carácter o -1 si no lo ha encontrado.
        while (posicion != -1) { //mientras se encuentre el caracter
            contador++;           //se cuenta
            //se sigue buscando a partir de la posición siguiente a la encontrada
            posicion = cadena.indexOf(caracter, posicion + 1);
        }
        return contador;
}


-------------------------------------------------------------------------------------------------------------------------------------------------------
//Cambia de lugar un objeto dentro de un array
private static void swap(int[] arr, int a, int b) {
		int temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
