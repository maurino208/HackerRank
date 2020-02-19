package es.juan.ioc;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UsoCicloVidaBean {

	public static void main(String[] args) {
		// carga de archivo xml
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("aplicationContext3.xml");
		
		//petición de beans al contenedor spring
		Director_Empleado juan=context.getBean("miEmpleado", Director_Empleado.class);
		
		System.out.println(juan);
		context.close();
		
	}

}
