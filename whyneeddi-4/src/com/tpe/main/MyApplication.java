package com.tpe.main;

import com.tpe.domain.Message;
import com.tpe.repository.DBRepository;
import com.tpe.repository.FileRepository;
import com.tpe.repository.Repository;
import com.tpe.service.MailService;
import com.tpe.service.MessageService;
import com.tpe.service.SMSService;
import com.tpe.service.WhatsAppService;

public class MyApplication {
	public static void main(String[] args) {
		String serviceName="mailService";
		String repositoryName="dbRepository";
		if(args.length>0) {
			serviceName=args[0];
			repositoryName=args[1];
		}
		
		Repository repository=null;
		if(repositoryName.equalsIgnoreCase("fileRepository")) {
			repository=new FileRepository();
		}else {
			repository=new DBRepository();
		}
		
		Message message=new Message();
		message.setMessage("Your order  was sent");
	
		MessageService messageService=null;

		if(serviceName.equalsIgnoreCase("whatsAppService")) {
			messageService=new WhatsAppService(repository);
			messageService.sendMessage(message);
		}else if(serviceName.equalsIgnoreCase("smsService")) {
			messageService=new SMSService(repository);
			messageService.sendMessage(message);
		}else {
			messageService=new MailService(repository);
			messageService.sendMessage(message);
		}
		

//		MessageService whatsAppService=new WhatsAppService();
//		whatsAppService.sendMessage();
//		
//		MessageService smsService=new SMSService();
//		smsService.sendMessage();
	}

}
