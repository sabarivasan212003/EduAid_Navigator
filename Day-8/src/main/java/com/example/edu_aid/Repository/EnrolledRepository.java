package com.example.edu_aid.Repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.edu_aid.Model.EnrolledcourseModel;

//Remove @RepositoryRestResource below to disable auto REST api:
@Repository
public interface EnrolledRepository extends CrudRepository<EnrolledcourseModel, Long>{}