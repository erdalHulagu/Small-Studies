package com.tpe.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tpe.domain.Student;

@Repository
public class StudentRepositoryImpl implements StudentRepository  {

	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public List<Student> getAll() {
		Session session= sessionFactory.openSession();
		Transaction tx= session.beginTransaction();
		List<Student> listOfStudent= session.createQuery("FROM Student",Student.class).getResultList();
		tx.commit();
		session.close();
		return listOfStudent;
	}

	@Override
	public Student findById(Long id) {
		Session session= sessionFactory.openSession();
		Transaction tx= session.beginTransaction();
		Student student= session.get(Student.class, id);
		tx.commit();
		session.close();
		return student;
	}

	@Override
	public void save(Student student) {
		Session session= sessionFactory.openSession();
		Transaction tx= session.beginTransaction();
		session.saveOrUpdate(student);
		tx.commit();
		session.close();		
	}

	@Override
	public void update(Student student) {
		Session session= sessionFactory.openSession();
		Transaction tx= session.beginTransaction();
		session.update(student);
		tx.commit();
		session.close();	
	}

	@Override
	public void delete(Long id) {
		Session session= sessionFactory.openSession();
		Transaction tx= session.beginTransaction();
		
		Student student=session.load(Student.class, id);
		session.delete(student);
		tx.commit();
		session.close();
		
	}

}
