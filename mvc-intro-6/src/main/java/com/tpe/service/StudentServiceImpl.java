package com.tpe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tpe.domain.Student;
import com.tpe.exception.ResourceNotFoundException;
import com.tpe.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public List<Student> getAllStudent() {
		return studentRepository.getAll();
	}

	@Override
	public Student findStudentById(Long id) {
		return studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student not found with id:"+id));
	}

	@Override
	public void saveStudent(Student student) {
		studentRepository.save(student);
		
	}

	@Override
	public void updateStudent(Student student) {
		studentRepository.update(student);
		
	}

	@Override
	public void deleteStudent(Long id) {
       studentRepository.delete(id);    		
	}

}
