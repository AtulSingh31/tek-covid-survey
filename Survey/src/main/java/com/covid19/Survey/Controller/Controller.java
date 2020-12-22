package com.covid19.Survey.Controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.covid19.Survey.Model.Login;
import com.covid19.Survey.Model.Survey;
import com.covid19.Survey.Service.service;



@RestController
@RequestMapping(value="/api")  
@CrossOrigin(origins="http://localhost:3000")
public class Controller {
	@Autowired
	private service serv;
	@PostMapping(value="addSurvey/{empId}")
	public boolean saveCandidateSurvey(@RequestBody  Survey survey,@PathVariable("empId") String requestId) throws SerialException, SQLException, IOException {
		
		return serv.saveCandidateSurvey(survey,requestId);
		
		
	}
	/* @GetMapping(value="getGuidelines/{id}")
	    public List<String> getGuidelines(@PathVariable("id") String Id){
	        List<String> tlist= new ArrayList<String>();
	        tlist.add("Stay inside house");
	        tlist.add("Do not interact with outsiders or unknown people");
	        return tlist;
	       
	    }*/
	 @GetMapping(value="getGuidelines/{id}")
	    public List<String> getGuidelines(@PathVariable("id") String Id){
	        return serv.getGuidelines(Integer.parseInt(Id));
	       
	    }
	@PostMapping()
	@RequestMapping({ "/emplogin" })
    public boolean emplogin( @RequestBody Login user) {
		
		return serv.emplogin(user);
    }
	@PostMapping()
	@RequestMapping({ "/adminlogin" })
    public boolean adminlogin( @RequestBody Login user) {
		
    	return serv.adminlogin(user);
    }
	@GetMapping("/user")
    public List<String> getJobData(){
        return serv.getEmploee();
    }
}
