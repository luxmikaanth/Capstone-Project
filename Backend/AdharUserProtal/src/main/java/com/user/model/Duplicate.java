package com.user.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="DuplicateAdhar")
public class Duplicate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	private int AdharCardId;

	private String name;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

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

	@Override
	public String toString() {
		return "Duplicate [Id=" + Id + ", AdharCardId=" + AdharCardId + ", name=" + name + "]";
	}


}
