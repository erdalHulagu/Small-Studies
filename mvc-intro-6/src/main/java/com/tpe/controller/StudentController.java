package com.tpe.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.tpe.domain.Student;
import com.tpe.domain.dto.StudentDTO;
import com.tpe.service.StudentService;

@Controller  //-->RestController
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
		//Student->StudentDTO
		studentService.saveStudent(student);
		return "redirect:/students";
	}
	
	@GetMapping("/update")
	//?id=1
	public String showFormForUpdate(@RequestParam("id") Long id, Model model) {
		Student student= studentService.findStudentById(id);
	    model.addAttribute("student",student);
	    return "studentForm";
	
	}
	
//	@GetMapping("/delete")
//	//delete?id=1
//	public String deleteStudent(@RequestParam("id") Long id) {
//		studentService.deleteStudent(id);
//		return "redirect:/students";
//	}
	
	@GetMapping("/delete/{id}")
	//delete/1
	public String deleteStudentWithPath(@PathVariable Long id) {
		studentService.deleteStudent(id);
		return "redirect:/students";
	}
	
	
	@GetMapping
	public ModelAndView getStudents() {
		List<Student> list= studentService.getAllStudent();
		//Student->StudentDTO
		ModelAndView mav=new ModelAndView();
		mav.addObject("students",list);
		mav.setViewName("students");
		return mav;
	}
	
	
	@GetMapping("/rest-service")
	@ResponseBody
	public List<Student> getStudentsWithService() {
		List<Student> list= studentService.getAllStudent();
		//serialize to json
		return list;
	}
	
	@GetMapping("/rest-service/student/{id}")
	@ResponseBody
	public StudentDTO getStudentsWithService(@PathVariable Long id) {
		Student student=studentService.findStudentById(id);
		StudentDTO studentDTO=new StudentDTO(student.getFirstName(),student.getLastName());
		return studentDTO;
	}
	
	@PostMapping("/rest-service/student")
	@ResponseBody
	public Map<String,String> saveStudent(@RequestBody Student student) {
		  studentService.saveStudent(student);
		  Map<String,String> map=new HashMap<>();
		  map.put("message","Student saved successfuuly");
		  map.put("success", "true");
		  return map;
	}
	
}
