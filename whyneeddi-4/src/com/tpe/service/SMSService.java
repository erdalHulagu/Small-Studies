package com.tpe.service;

public class SMSService implements MessageService {

	@Override
	public void sendMessage() {
		System.out.println("I am an SMS Service, I am sending an SMS");

	}

}
