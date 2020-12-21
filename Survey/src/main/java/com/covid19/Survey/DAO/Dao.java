package com.covid19.Survey.DAO;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Repository;

import com.covid19.Survey.Model.Login;
import com.covid19.Survey.Model.Survey;
import com.covid19.Survey.Model.User;

@Repository
@Configuration
@Transactional
public class Dao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Transactional
	public boolean saveCandidateSurvey(Survey survey, String requestId) {
		Session currentSession=(Session) sessionFactory.getCurrentSession();
		User user=currentSession.get(User.class, Integer.parseInt(requestId));
		user.setSurvey(survey);
		currentSession.save(user);
		return true;
	}
	public boolean emplogin( Login user) {
		System.out.println(user.getEmail()+user.getPassword());

		 try {
			 Session currentSession = sessionFactory.getCurrentSession();
		Query query = currentSession.createQuery("from User where username=:username AND password=:password AND userRole=:userrole");
       query.setParameter("username", user.getEmail());  
       query.setParameter("password", user.getPassword());  
       query.setParameter("userrole", "employee");
       List<User> list = (List<User>) query.list();
       if(list.isEmpty())
			return false;
       else 
       	return true;
	        
		 } catch (Exception e) {  
	            e.printStackTrace();  
	        }  
		 
	        return false; 
	 }
	public boolean adminlogin(  Login user) {
		System.out.println(user.getEmail()+user.getPassword());
		
		try {
			Session currentSession = sessionFactory.getCurrentSession();
			Query query = currentSession.createQuery("from User where username=:username AND password=:password AND userRole=:userrole");
	       query.setParameter("username", user.getEmail());  
	       query.setParameter("password", user.getPassword());  
	       query.setParameter("userrole", "admin");
	       List<User> list = (List<User>) query.list();
	       if(list.isEmpty())
				return false;
	       else 
	       	return true;
		        
			 } catch (Exception e) {  
		            e.printStackTrace();  
		        }  
			 
		        return false; 
	 }
}
