package com.covid19.Survey.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DiseaseType {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
 	private int id;
	private boolean diabetes;
	private boolean asthma;
	private boolean bloodPressure;
	private boolean None;

	public boolean isDiabetes() {
		return diabetes;
	}
	public void setDiabetes(boolean diabetes) {
		this.diabetes = diabetes;
	}
	public boolean isAsthma() {
		return asthma;
	}
	public void setAsthma(boolean asthma) {
		this.asthma = asthma;
	}
	public boolean isBloodPressure() {
		return bloodPressure;
	}
	public void setBloodPressure(boolean bloodPressure) {
		this.bloodPressure = bloodPressure;
	}
	public boolean isNone() {
		return None;
	}
	public void setNone(boolean none) {
		None = none;
	}
	
}
