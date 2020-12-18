package com.covid19.Survey.Model;

public class DiseaseType {
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
