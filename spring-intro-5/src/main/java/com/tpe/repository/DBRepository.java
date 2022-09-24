package com.tpe.repository;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.tpe.domain.Message;

@Component
@Qualifier("dbRepository")
public class DBRepository implements Repository  {

	@Autowired
	Properties properties;
	
	@Override
	public void saveMessage(Message message) {
		System.out.println("My Java Home:"+properties.get("MYJAVA_HOME"));
		System.out.println("Email:"+properties.get("email"));
		System.out.println("Message is saving in DBRepository:"+message.getMessage());
		
	}

}
