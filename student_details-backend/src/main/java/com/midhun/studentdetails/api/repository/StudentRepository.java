package com.midhun.studentdetails.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.midhun.studentdetails.api.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

}
