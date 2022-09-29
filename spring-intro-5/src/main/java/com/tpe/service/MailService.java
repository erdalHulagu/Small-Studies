package com.tpe.service;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.tpe.domain.Message;
import com.tpe.repository.Repository;

@Component("mailService")
//@Scope("singleton")//default scope singleton
@Scope("prototype")  //new object for each request

public class MailService implements MessageService {
	
	//Field injection
	
	@PostConstruct
	public void init() {
		System.out.println("Initializing");
	}
	
	@PreDestroy
	public void destroy() {
		System.out.println("Destroying");
	}
	
	
	@Autowired//otomatik olarak ba�la
	@Qualifier("fileRepository")
	private Repository repository; 
	
	@Value("${app.email}")
	private String email;
	

	@Override
	public void sendMessage(Message message) {
		System.out.println("I am a mail service, I am sending a message to "+email+":"+message.getMessage());
		repository.saveMessage(message);
	}
	
	
	

}
