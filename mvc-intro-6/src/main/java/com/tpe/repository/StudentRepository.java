package com.tpe.repository;

import java.util.List;
import java.util.Optional;

import com.tpe.domain.Student;

public interface StudentRepository {
	
	List<Student> getAll();
	Optional<Student> findById(Long id);
	void save(Student student);
	void update(Student student);
	void delete(Long id);

}
