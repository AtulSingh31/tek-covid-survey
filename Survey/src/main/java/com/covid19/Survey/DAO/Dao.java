package com.covid19.Survey.DAO;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.covid19.Survey.Model.Survey;
import com.covid19.Survey.Model.User;

@Repository
public class Dao {
	
	@Autowired
	private SessionFactory sessionfactory;
	
	@Transactional
	public boolean saveCandidateSurvey(Survey survey, String requestId) {
		Session currentSession=(Session) sessionfactory.getCurrentSession();
		User user=currentSession.get(User.class, Integer.parseInt(requestId));
		user.setSurvey(survey);
		currentSession.save(user);
		return true;
	}
}
