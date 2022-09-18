package com.tpe.generics.interfacetype;

//Eğer bir generic interface implement ederseniz, Class'da generic olmalı 
public class GenericClassImpl<T> implements GenericInterface<T> {

	@Override
	public void setValue(T t) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public T getValue() {
		// TODO Auto-generated method stub
		return null;
	}

}
