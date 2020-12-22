package com.covid19.Survey.Model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class User {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id")
	 	private int id;
	 	private String username;
	 	private String password;
	 	private String userRole;
	 	@ElementCollection
	 	private List<String> guidelines;
        
	       
        public List<String> getGuidelines() {
            return guidelines;
        }
        public void setGuidelines(List<String> guidelines) {
            this.guidelines = guidelines;
        }
		public String getUserRole() {
			return userRole;
		}
		public void setUserRole(String userRole) {
			this.userRole = userRole;
		}
		@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	 	private Survey survey;
	 	
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Survey getSurvey() {
			return survey;
		}
		public void setSurvey(Survey survey) {
			this.survey = survey;
		}
		
	 	
}
