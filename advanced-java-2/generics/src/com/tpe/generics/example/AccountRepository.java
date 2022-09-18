package com.tpe.generics.example;

import java.util.ArrayList;
import java.util.List;

public class AccountRepository implements IRepository<Account>  {

	//in memory data base
	private static List<Account> list=new ArrayList<>();
	
	@Override
	public void save(Account t) {
		// TODO Auto-generated method stub
		list.add(t);
	}

	@Override
	public Account find(Account t) {
		//list.stream().filter(null);
		return null;
	}

	@Override
	public void update(Account t) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Account t) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Account> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
