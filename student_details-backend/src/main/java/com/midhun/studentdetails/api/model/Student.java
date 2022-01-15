package com.midhun.studentdetails.api.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.expression.spel.ast.Indexer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection="student")       //Identifies a domain object to be persisted to MongoDB.
public class Student {
	
	@Id                               //is identifier to mongo document
	private String id;
	private String studentName;
	private String dob;
	private String standard;
	private String division;
	private String gender;
	private Integer admissionNumber;
	
	

	public  Student(String studentName,String dob,String standard,String division,String gender,Integer admissionNumber) {
		this.studentName=studentName;
		this.dob=dob;
		this.standard=standard;
		this.division=division;
		this.gender=gender;
		this.admissionNumber=admissionNumber;
	}
	


	public Integer getAdmissionNumber() {
		return admissionNumber;
	}

	public void setAdmissionNumber(Integer admissionNumber) {
		this.admissionNumber = admissionNumber;
	}


	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getStandard() {
		return standard;
	}
	public void setStandard(String standard) {
		this.standard = standard;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
}