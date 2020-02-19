package es.juan.ioc;

public class Secretario_Empleado implements Empleados {
	
	private Creacion_Informes nuevoInforme;
	private String email;
	private String nombreEmpresa;
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email=email;
	}
	
	
	public String getnombreEmpresa(){
		return nombreEmpresa;
	}
	
	public void setnombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa=nombreEmpresa;
	}
	
	
	public void setInformeNuevo(Creacion_Informes nuevoInforme) {
		this.nuevoInforme=nuevoInforme;
	}
	

	@Override
	public String getTareas() {
		// TODO Auto-generated method stub
		return "Gestiono la agenda de los jefes";
	}
	

	@Override
	public String getInforme() {
		// TODO Auto-generated method stub
		return "Informe generado por el secretario: " + nuevoInforme.getInforme();
	}

}
