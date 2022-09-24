package com.tpe.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tpe.domain.Student;
import com.tpe.service.StudentService;

@Controller
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	

	@GetMapping("/hello")
	public ModelAndView sayHi() {
		ModelAndView mav=new ModelAndView();
		mav.addObject("message","Hi");
		mav.addObject("messagebody","I am student management system");
		mav.setViewName("hi");
		return mav;
	}
	
	
	@GetMapping("/new")
	public String sendStudentForm(@ModelAttribute("student") Student student) {
		return "studentForm"; //studentForm bir view name
	}
	
	
	@PostMapping("/saveStudent")
	public String createStudent(@Valid @ModelAttribute Student student, BindingResult bindingResult) {
		//validation
		if(bindingResult.hasErrors()) {
			return "studentForm";
		}
		
		studentService.saveStudent(student);
		return "redirect:/students";
	}
	
	@GetMapping("/update")
	public String showFormForUpdate(@RequestParam("id") Long id, Model model) {
		Student student= studentService.findStudentById(id);
	    model.addAttribute("student",student);
	    return "studentForm";
	
	}
	
	
	
	@GetMapping
	public ModelAndView getStudents() {
		List<Student> list= studentService.getAllStudent();
		ModelAndView mav=new ModelAndView();
		mav.addObject("students",list);
		mav.setViewName("students");
		return mav;
	}
	
	
	
	
}
