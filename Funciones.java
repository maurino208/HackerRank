Dado un string obtiene un arraylist con los caracteres

static ArrayList<String> getChar(String s) {
		ArrayList<String> arrayString=new ArrayList<String>();
		for(int i=0; i<arrayString.size(); i++) {
			String carac= Character.toString(s.charAt(i));
			if(!arrayString.contains(carac)) {
				arrayString.add(carac);
			}


----------------------------------------------------------------------------------------------------------------------------------------------

