package com.tpe.service;

import java.util.List;

import com.tpe.domain.Student;

public interface StudentService {
	List<Student> getAllStudent();
	Student findStudentById(Long id);
	void saveStudent(Student student);
	void updateStudent(Student student);
	void deleteStudent(Long id);

}
