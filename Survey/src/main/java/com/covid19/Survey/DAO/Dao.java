package com.covid19.Survey.DAO;

import java.util.ArrayList;
import java.util.HashMap;
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
	@Transactional
    public List<String> getEmployeeDetails(){
        Session session = sessionFactory.getCurrentSession();
       
        HashMap<String, HashMap<Integer, String>> surveyDetails = new HashMap<>();
       
        surveyDetails.put("q1", new HashMap() {{
            put(1, "Public Transport");
            put(4, "Private Transport");
            put(2, "Taxi");
        }});
        surveyDetails.put("q2", new HashMap() {{
            put(1, "Restaurant or Some Other External Place");
            put(2, "Office Canteen");
            put(4, "bring your own food");
        }});
        surveyDetails.put("q3", new HashMap() {{
            put(4, "Less than 5");
            put(3, "Between 5 - 10");
            put(2, "Between 10 - 20");
            put(1, "More than 20");
        }});
        surveyDetails.put("q4", new HashMap() {{
            put(4, "Yes");
            put(1, "No");
        }});
        surveyDetails.put("q5", new HashMap() {{
            put(4, "Less than 5");
            put(3, "Between 5 - 10");
            put(2, "Between 10 - 20");
            put(1, "More than 20");
        }});
        surveyDetails.put("q6", new HashMap() {{
            put(4, "Between 18 - 30");
            put(3, "Between 31 - 40");
            put(2, "Between 41 - 50");
            put(1, "Greater than 50");
        }});
        surveyDetails.put("q7", new HashMap() {{
            put(4, "Between 18 - 30");
            put(3, "Between 31 - 40");
            put(2, "Between 41 - 50");
            put(1, "Greater than 50");
        }});
       
       
        Query query = session.createQuery("from User");
        List<User> list = (List<User>) query.list();
       
        List<String> l1 = new ArrayList<String>();
        List<String> guidelines = new ArrayList<String>();
        for(User user: list) {
        	if(user.getUserRole().equals("employee")) {
            System.out.println(user.getUsername());
           // System.out.println(user.getSurvey().getQ2());
            l1.add(user.getUsername());
           
            System.out.println("Inside loop");
           
        if(user.getSurvey().getQ1().equals("1")) {
            l1.add(surveyDetails.get("q1").get(1));
            guidelines.add("Reduce the use of public transport.");
        }else if(user.getSurvey().getQ1().equals("4")) {
            l1.add(surveyDetails.get("q1").get(4));
        }else{
            l1.add(surveyDetails.get("q1").get(2));
            guidelines.add("Keep the use of shared cabs to minimum.");
        }
       
        if(user.getSurvey().getQ2().equals("1")) {
            l1.add(surveyDetails.get("q2").get(1));
            guidelines.add("Avoid eating in external places.");
        }else if(user.getSurvey().getQ2().equals("2")) {
            l1.add(surveyDetails.get("q2").get(2));
            guidelines.add("Follow social distancing norms while in office canteen.");
        }else{
            l1.add(surveyDetails.get("q2").get(4));
        }
       
        if(user.getSurvey().getQ3().equals("4")) {
            l1.add(surveyDetails.get("q3").get(4));
        }else if(user.getSurvey().getQ3().equals("3")) {
            l1.add(surveyDetails.get("q3").get(3));
        }else if(user.getSurvey().getQ3().equals("2")){
            l1.add(surveyDetails.get("q3").get(2));
            guidelines.add("Avoid going to walks in parks near your house.");
        }else {
            l1.add(surveyDetails.get("q3").get(1));
            guidelines.add("Avoid interacting with people in your neighborhood.");
        }
       
        if(user.getSurvey().getQ4().equals("4")) {
            l1.add(surveyDetails.get("q4").get(4));
        }else {
            l1.add(surveyDetails.get("q4").get(1));
        }
       
        if(user.getSurvey().getQ5().equals("4")) {
            l1.add(surveyDetails.get("q5").get(4));
        }else if(user.getSurvey().getQ5().equals("3")) {
            l1.add(surveyDetails.get("q5").get(3));
        }else if(user.getSurvey().getQ5().equals("2")){
            l1.add(surveyDetails.get("q5").get(2));
            guidelines.add("Avoid shaking hands with people, avoid hugging and kissing people.");
        }else {
            l1.add(surveyDetails.get("q5").get(1));
            guidelines.add("Maintain at least 1 metre (3 feet) distance with everyone.");
        }
       
        if(user.getSurvey().getQ6().equals("4")) {
            l1.add(surveyDetails.get("q6").get(4));
            guidelines.add("Please be responsible and wear masks while going out.");
        }else if(user.getSurvey().getQ6().equals("3")) {
            l1.add(surveyDetails.get("q6").get(3));
        }else if(user.getSurvey().getQ6().equals("2")){
            l1.add(surveyDetails.get("q6").get(2));
            guidelines.add("Do not go for gatherings with friends and family and stay away from large gatherings.");
        }else {
            l1.add(surveyDetails.get("q6").get(1));
            guidelines.add("Do not come in close contact with those who are sick/ not well.");
        }
       
       
        if(user.getSurvey().getQ7().isAsthma() && user.getSurvey().getQ7().isBloodPressure() && user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Asthma, Blood Pressure, Diabetes");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(user.getSurvey().getQ7().isAsthma() && user.getSurvey().getQ7().isBloodPressure() && !user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Asthma, Blood Pressure");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(user.getSurvey().getQ7().isAsthma() && !user.getSurvey().getQ7().isBloodPressure() && user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Asthma, Diabetes");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(!user.getSurvey().getQ7().isAsthma() && user.getSurvey().getQ7().isBloodPressure() && user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Blood Pressure, Diabetes");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(user.getSurvey().getQ7().isAsthma() && !user.getSurvey().getQ7().isBloodPressure() && !user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Asthma, Diabetes");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(!user.getSurvey().getQ7().isAsthma() && !user.getSurvey().getQ7().isBloodPressure() && user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Diabetes");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(!user.getSurvey().getQ7().isAsthma() && user.getSurvey().getQ7().isBloodPressure() && !user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Blood Pressure");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(user.getSurvey().getQ7().isAsthma() && !user.getSurvey().getQ7().isBloodPressure() && !user.getSurvey().getQ7().isDiabetes()) {
            l1.add("Asthma");
            guidelines.add("Please come to office only when it is necessary");
        }
        else if(!user.getSurvey().getQ7().isAsthma() && !user.getSurvey().getQ7().isBloodPressure() && !user.getSurvey().getQ7().isDiabetes()) {
            l1.add("None");
        }
        setGuidelines(user.getId(), guidelines);
        	 }
        }
        System.out.println(l1);
       
        return l1;
    }
	@Transactional
    public List<String> getGuidelines(int id){
        Session currentSession=sessionFactory.getCurrentSession();
        User user= currentSession.get(User.class, id);
        for(String s:user.getGuidelines()) {
        	System.out.print(s);
        }
        return user.getGuidelines();
    }
	@Transactional
    public boolean setGuidelines(int userId,List<String>userSetGuidelines) {
        /** Business Logic **/
        Session currentSession=sessionFactory.getCurrentSession();
        User user=currentSession.get(User.class, userId);
        user.setGuidelines(userSetGuidelines);
        try {
        currentSession.save(user);
        }
        catch(Exception e) {
            return false;
        }
        return true;
    }
	
}
