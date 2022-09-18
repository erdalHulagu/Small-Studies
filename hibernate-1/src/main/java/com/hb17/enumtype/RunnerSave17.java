package com.hb17.enumtype;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;


public class RunnerSave17 {

	public static void main(String[] args) {
		
		Book17 book=new Book17();
		book.setName("Java Book");
		book.setBookType(BookType.IT);
		
		Configuration con = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Book17.class);

		SessionFactory sf = con.buildSessionFactory();
		Session session = sf.openSession();

		Transaction tx = session.beginTransaction();
		
		session.save(book);

		
		tx.commit();
		session.close();
		
		
		sf.close();

	}

}
