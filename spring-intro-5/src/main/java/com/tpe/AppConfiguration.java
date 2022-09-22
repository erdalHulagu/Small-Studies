package com.tpe;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.tpe.thirdParty.ThirdPartyRepository;

@Configuration
@ComponentScan("com.tpe")
@PropertySource("classpath:application.properties")
public class AppConfiguration {
	
	
	@Bean
	public ThirdPartyRepository thirdPartyRepository() {
		return new ThirdPartyRepository();
	}
	

}
