package com.tpe.app;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.tpe.AppConfiguration;
import com.tpe.domain.Message;
import com.tpe.service.MessageService;

public class MyApplication {

	public static void main(String[] args) {
		
		String serviceName="mailService";
		if(args.length>0) {
			serviceName=args[0];
		}
		
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(AppConfiguration.class);
		
		//No qualifying bean of type 'com.tpe.service.MessageService' 
		//available: expected single matching bean but found 3: mailService,SMSService,whatsAppService
		MessageService messageService= context.getBean(serviceName,MessageService.class);
		MessageService messageService2= context.getBean(serviceName,MessageService.class);
		
		if(messageService==messageService2) {
			System.out.println("Same Object Reference");
		}else {
			System.out.println("Different Object Reference");
		}
		
		

		
		Message message=new Message();
		message.setMessage("Your order was sent");
		
		messageService.sendMessage(message);
		
		
		//-------get all Beans
		System.out.println("------------------------");
		 String[] beanList=   context.getBeanDefinitionNames();
		
		 for (String beanName : beanList) {
			System.out.println(beanName);
		}
		
		//-------
		
		
		context.close();

	}

}
