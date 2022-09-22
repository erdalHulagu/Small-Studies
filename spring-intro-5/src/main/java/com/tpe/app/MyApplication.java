package com.tpe.app;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.tpe.AppConfiguration;
import com.tpe.domain.Message;
import com.tpe.service.MessageService;

public class MyApplication {

	public static void main(String[] args) {
		
		String serviceName="whatsAppService";
		if(args.length>0) {
			serviceName=args[0];
		}
		
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(AppConfiguration.class);
		
		//No qualifying bean of type 'com.tpe.service.MessageService' 
		//available: expected single matching bean but found 3: mailService,SMSService,whatsAppService
		MessageService messageService= context.getBean(serviceName,MessageService.class);
		
		
		Message message=new Message();
		message.setMessage("Your order was sent");
		
		messageService.sendMessage(message);
		
		context.close();

	}

}
