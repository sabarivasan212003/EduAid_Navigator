package com.example.edu_aid.Service;
import org.springframework.stereotype.Service;

import com.example.edu_aid.Model.CoursesModel;
// import com.example.edu_aid.Model.UserModel;
import com.example.edu_aid.Repository.CourseRepository;
// import com.example.edu_aid.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

// import firstsample.demo.Model.UserModel;
// import firstsample.demo.Repository.UserRepository;
import java.util.List;

@Service
public class CoursesService{
    @Autowired
    private CourseRepository signRepo;
	public CoursesModel saveSignInDetails(CoursesModel student) {
		// TODO Auto-generated method stub
		return signRepo.save(student) ;
	}
	public CoursesModel updateSignInDetails(CoursesModel student) {
		// TODO Auto-generated method stub
		return signRepo.save(student);
	}

	public List<CoursesModel> findAllSignInDetails() {
		// TODO Auto-generated method stub
		return (List<CoursesModel>)signRepo.findAll();
	}

	// public User findSignInDetails(int roll) {
	// 	// TODO Auto-generated method stub
	// 	return signRepo.findById(roll);
	// }

	public void deleteSignInDetails(int roll) {
		// TODO Auto-generated method stub
		signRepo.deleteById((long)roll);
		
	}
//	public List<Student> getStudentSorted(String field){
//		return studentRepo.findAll(Sort.by(Sort.Direction.DESC,field));
//	}
//
//	//pagination
//	public List<Student> getStudentWithPagination( int offset,int pageSize){
//		Page<Student> page=studentRepo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
////	//sorting and paging
//	public List<Student> getStudentWithPagingAndSorting(int offset,int pageSize,String field){
//		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
//		Page<Student> page = studentRepo.findAll(paging);
//		return page.getContent();
//	}

}