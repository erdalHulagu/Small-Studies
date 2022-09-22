package com.tpe.service;

import com.tpe.domain.Message;
import com.tpe.repository.Repository;

public class SMSService implements MessageService {

	Repository repository;
	
	public SMSService(Repository repository) {
		this.repository=repository;
		
		//repository=new FileRepository();
	}
	
	
	@Override
	public void sendMessage(Message message) {
		System.out.println("I am an SMS Service, I am sending an SMS:"+message.getMessage());
		repository.saveMessage(message);
	}

}
