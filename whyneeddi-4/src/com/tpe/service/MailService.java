package com.tpe.service;

import com.tpe.domain.Message;
import com.tpe.repository.Repository;



public class MailService implements MessageService {

	Repository repository;
	
	public MailService( Repository repository) {
		//MailService Repositorya ihtiyacý var
	 this.repository=repository;
	 
	    //maintance zor, hardcoded
		//repository=new DBRepository();
	}
	
	@Override
	public void sendMessage(Message message) {
		System.out.println("I am a mail service, I am sending a message:"+message.getMessage());

		//Gönderilen mesajý ayný zamanda kaydetmek istiyorum. O nedenle bir saveMessage çaðýrmaya
		//ihtyiacým var.saveMessage'i kimin üzerinden kullnanýyorum: Repository;
		repository.saveMessage(message);
		
	}
	
	
	

}
