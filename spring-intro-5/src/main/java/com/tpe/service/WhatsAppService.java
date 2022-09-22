package com.tpe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.tpe.domain.Message;
import com.tpe.repository.Repository;
import com.tpe.thirdParty.ThirdPartyRepository;

@Component
@Qualifier("whatsAppService")
public class WhatsAppService implements MessageService {

	
	//Eðer bir adet constructorýnýz var ise @Autowired kullanmanýza gerek yok
//	public WhatsAppService() {
//		// TODO Auto-generated constructor stub
//	}
	
	
	
	//Constructor injection-Daha verilmli olan constructor injection
	private Repository repository; 
	@Autowired
	public WhatsAppService( @Qualifier("dbRepository") Repository repository) {
		this.repository=repository;
	}
	
	
	//Setter Injection
	
//	private Repository repository;
//	
//	@Autowired
//	@Qualifier("dbRepository")
//	public void setRepository(Repository repository) {
//		this.repository=repository;
//	}
	
	
	//Field Injection
//	@Autowired
//	@Qualifier("fileRepository")
//	private Repository repository; 
	
	@Value("${app.count}")
	private Integer count;
	
	@Autowired
	ThirdPartyRepository thirdPartyRepository;
	
	@Override
	public void sendMessage(Message message) {
		System.out.println("I am a WhatsApp Service, I am sending a message to "+count+" users:" + message.getMessage());
		
		thirdPartyRepository.save(message.getMessage());
		
		repository.saveMessage(message);
	}

}
