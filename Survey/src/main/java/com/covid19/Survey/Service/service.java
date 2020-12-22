package com.covid19.Survey.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.covid19.Survey.DAO.Dao;
import com.covid19.Survey.Model.Login;
import com.covid19.Survey.Model.Survey;

@Service
public class service {
	@Autowired
	Dao dao;

	public boolean saveCandidateSurvey(Survey survey, String requestId) {
		
		
		return dao.saveCandidateSurvey(survey,requestId);
	}
	 public boolean emplogin( Login user) {
		 return dao.emplogin(user);
	 }
	 public boolean adminlogin(  Login user) {
		 return dao.adminlogin(user);
	 }
	 public List<String> getEmploee(){
	        return dao.getEmployeeDetails();
	    }
	 public List<String> getGuidelines(int id){
	        return dao.getGuidelines(id);
	    }
}
