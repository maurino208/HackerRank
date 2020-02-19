package es.juan.ioc;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoDemoSingletoPrototype {

	public static void main(String[] args) {
		// carga de archivo xml
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("aplicationContext2.xml");
		
		//petición de beans al contenedor spring
		Secretario_Empleado juan=context.getBean("miSecretarioEmpleado", Secretario_Empleado.class);
		Secretario_Empleado sandra=context.getBean("miSecretarioEmpleado", Secretario_Empleado.class);
		
		System.out.println(juan);
		System.out.println(sandra);
		context.close();
	}

}
