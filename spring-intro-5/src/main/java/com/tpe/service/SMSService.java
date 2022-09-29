package com.tpe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.tpe.domain.Message;
import com.tpe.repository.Repository;

//componentscan ile @Component annotation�na sahip sınıf  bulunur ve SpringIOC Container' bu sınıftan bir Bean oluşturur.
@Component("smsService")
public class SMSService implements MessageService {

	@Autowired
	@Qualifier("fileRepository")
	private Repository repository; 
	
	@Override
	public void sendMessage(Message message) {
		System.out.println("I am an SMS Service, I am sending an SMS:"+message.getMessage());
		repository.saveMessage(message);
	}

}
