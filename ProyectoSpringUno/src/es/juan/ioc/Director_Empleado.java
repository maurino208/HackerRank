package es.juan.ioc;

public class Director_Empleado implements Empleados {
	
	//Creacion de campo de tipo creacion informe
	private Creacion_Informes informeNuevo;
	private String email;
	private String nombreEmpresa;
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email=email;
	}
	
	public String getNombreEmpresa() {
		return nombreEmpresa;
	}
	
	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa=nombreEmpresa;
	}
	
	
	public Director_Empleado(Creacion_Informes informeNuevo) {
		this.informeNuevo=informeNuevo; //creacion de constructor que inyecta la dependencia
	}
	
	@Override
	public String getTareas() {
		// TODO Auto-generated method stub
		return "Gestionar la empresa";
	}

	@Override
	public String getInforme() {
		// TODO Auto-generated method stub
		return "Informe creado por el Director: " + informeNuevo.getInforme();
	}
	
	//Método init: ejectutar tareas antes que el bean este disponible
	
	public void metodoInicial() {
		System.out.println("Dentro del método init, van las tareas a ejecutar antes del que el bean esté listo");
	}
	
	//Método destroy: ejecutar tareas despues que el bean este utilizado
	
	
	public void metodoFinal() {
		System.out.println("Dentro del método destroy, van las tareas a ejecutar despues de usar el bean");
	}

}
