package com.midhun.studentdetails.api.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.midhun.studentdetails.api.model.Student;
import com.midhun.studentdetails.api.repository.StudentRepository;


@Service
public class StudentService {
	
	@Autowired
	
	private StudentRepository studentRepository;
	
	
	//post student details to mongodb

	public Student save(Student student) {
		return studentRepository.save(student);
	}
	
	
	//get all data
	public List<Student> getAll() {
		return studentRepository.findAll();
	
	}


}