package com.midhun.studentdetails.api.controller;

import java.util.List;

import org.apache.tomcat.jni.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.midhun.studentdetails.api.model.Student;
import com.midhun.studentdetails.api.service.StudentService;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@RestController
public class Studentcontoller {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/set")
	public Student postMethodNameStudent(@RequestBody Student student) {
		if(student.getStudentName()==""||student.getDob()==""
		||student.getStandard()==""||student.getDivision()==""||
		student.getGender()=="") {
			return null;
		}
		else 
		{
			return studentService.save(student);
		}
	}
	
	
	@GetMapping("/getall")
	public List<Student> getAll(){
		return studentService.getAll();
	}
	
}
