package es.juan.ioc;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoEmpleado {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		//Creacion de objeto Empleado
		Empleados empleado1 = new Director_Empleado();
		//Uso de objetos
		System.out.println(empleado1.getTareas());
		*/
		
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("aplicationContext.xml");
		Secretario_Empleado juan = context.getBean("miSecretarioEmpleado", Secretario_Empleado.class);
		Director_Empleado alejandro = context.getBean("miEmpleado", Director_Empleado.class);
		
		
		System.out.println(juan.getTareas());
		System.out.println(juan.getInforme());
		System.out.println(juan.getEmail());
		System.out.println(juan.getnombreEmpresa());
		System.out.println();
		System.out.println(alejandro.getTareas());
		System.out.println(alejandro.getInforme());
		System.out.println(alejandro.getEmail());
		System.out.println(alejandro.getNombreEmpresa());
		context.close();
	}

}
