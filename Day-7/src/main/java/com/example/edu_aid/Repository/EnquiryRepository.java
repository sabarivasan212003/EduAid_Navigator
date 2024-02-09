package com.example.edu_aid.Repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.edu_aid.Model.EnquiryModel;

//Remove @RepositoryRestResource below to disable auto REST api:
@Repository
public interface EnquiryRepository extends CrudRepository<EnquiryModel, Long>{}
