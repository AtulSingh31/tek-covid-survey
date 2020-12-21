package com.covid19.Survey.Controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.sql.rowset.serial.SerialException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.covid19.Survey.Model.Login;
import com.covid19.Survey.Model.Survey;



@RestController
@RequestMapping(value="/api")  
@CrossOrigin(origins="http://localhost:3000")
public class Controller {
	
	@PostMapping(value="saveCandidateDetails/{empId}")
	public boolean saveCandidates(@RequestBody  Survey survey,@PathVariable("empId") String requestId) throws SerialException, SQLException, IOException {
		
		
		return true;
		
	}
	@PostMapping()
	@RequestMapping({ "/emplogin" })
    public boolean emplogin( @RequestBody Login user) {
		
    	if(user.getEmail().equals("abcd")&&user.getPassword().equals("abcd"))
    		return true;
    	return false;
    }
	@PostMapping()
	@RequestMapping({ "/adminlogin" })
    public boolean adminlogin( @RequestBody Login user) {
		
    	if(user.getEmail().equals("xyz")&&user.getPassword().equals("xyz"))
    		return true;
    	return false;
    }
	
}