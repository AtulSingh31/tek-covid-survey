package com.covid19.Survey.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covid19.Survey.DAO.Dao;
import com.covid19.Survey.Model.Survey;

@Service
public class service {
	@Autowired
	Dao dao;

	public boolean saveCandidateSurvey(Survey survey, String requestId) {
		
		
		return dao.saveCandidateSurvey(survey,requestId);
	}
}
