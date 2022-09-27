package com.tpe.exception;

import java.sql.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.NoHandlerFoundException;



@ControllerAdvice
public class CustomExceptionHandler {
	
	Logger logger=LoggerFactory.getLogger(CustomExceptionHandler.class); 
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ModelAndView handle(RuntimeException ex) {
		logger.error("ResourceNotFoundException occurred:............."+ex.getMessage());
		ModelAndView mav=new ModelAndView();
		mav.setViewName("notFound");
		return mav;
	}
	
	
	@ExceptionHandler(NoHandlerFoundException.class)
	public ModelAndView handle(Exception ex) {
		logger.error("NoHandlerFoundException occurred:............."+ex.getMessage());
		ModelAndView mav=new ModelAndView();
		mav.setViewName("notFound");
		return mav;
	}
	

}
