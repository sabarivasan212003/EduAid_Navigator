package com.example.edu_aid.Controller;
import org.springframework.web.bind.annotation.RestController;

import com.example.edu_aid.Model.UserModel;
import com.example.edu_aid.Service.UserService;

// import firstsample.demo.Service.UserService;
// import firstsample.demo.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin("*")
// @RequestMapping("")
public class UserController{
	@Autowired
	private UserService ServiceImp;
	@PostMapping("/postuser")
	public UserModel saveSignInDetails(@RequestBody UserModel sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveSignInDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public UserModel findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/getuser")
	public List<UserModel >findAllSignDetails(){
		return ServiceImp.findAllSignInDetails();
	}
	@PutMapping("/updateuser")
	public UserModel updateSignInDetails(@RequestBody UserModel sign) {
		return ServiceImp.updateSignInDetails(sign);
	}
	@DeleteMapping("/deleteuser")
	public String deleteSignInDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteSignInDetails(id);
		return "Signin Details Deleted !";
	} 
	
}