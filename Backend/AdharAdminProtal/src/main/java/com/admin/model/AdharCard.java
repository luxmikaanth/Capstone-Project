package com.admin.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AdharCardDetails")
public class AdharCard {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int AdharCardId;
	
	private String name;
	
	private String Dob;
	
	private String Address;
	
	private String email;
	
	private String mobileNumber;
	
	private String gender;
		
	private String IssueDate;
	
	private String status;

	public int getAdharCardId() {
		return AdharCardId;
	}

	public void setAdharCardId(int adharCardId) {
		AdharCardId = adharCardId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return Dob;
	}

	public void setDob(String dob) {
		Dob = dob;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getIssueDate() {
		return IssueDate;
	}

	public void setIssueDate(String issueDate) {
		IssueDate = issueDate;
	}
	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "AdharCard [AdharCardId=" + AdharCardId + ", name=" + name + ", Dob=" + Dob + ", Address=" + Address
				+ ", email=" + email + ", mobileNumber=" + mobileNumber + ", gender=" + gender + ", IssueDate="
				+ IssueDate + ", status=" + status + "]";
	}

	
	
	
	
}
