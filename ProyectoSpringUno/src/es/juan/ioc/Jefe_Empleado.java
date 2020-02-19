package es.juan.ioc;

public class Jefe_Empleado implements Empleados {

	private Creacion_Informes informeNuevo;

	public Jefe_Empleado(Creacion_Informes informeNuevo) {
		this.informeNuevo=informeNuevo;
	}
	
	public String getTareas() {
		return "Gestiono a los Empleados";
	}

	@Override
	public String getInforme() {
		// TODO Auto-generated method stub
		return "Informe presentado por el Jefe: " + informeNuevo.getInforme();
	}
}
