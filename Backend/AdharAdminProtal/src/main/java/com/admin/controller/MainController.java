package com.admin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.admin.Repository.adharRepository;
import com.admin.Repository.adminRepository;
import com.admin.Repository.duplicateRepository;
import com.admin.model.AdharCard;
import com.admin.model.*;
import com.admin.service.service;

@Component
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

	@Autowired
	adminRepository adminRepo;

	@Autowired
	adharRepository adharRepo;
	
	@Autowired
	duplicateRepository dupliRepo;

	@Autowired
	service servic;

	@GetMapping(value = "/admin/login")
	public List<admin> AdminLogin() {
		return adminRepo.findAll();
	}

	@RequestMapping(value = "/admin/signup", method = RequestMethod.POST)
	public admin storeParticipants(@RequestBody admin user) { 
		return servic.storeParticipants(user);
	}

	@GetMapping(value = "/admin/alladhardetails")
	public List<AdharCard> AllAdharCard() {
		return adharRepo.findAll();
	}

	@PutMapping(value = "/admin/updateadhar")
	public AdharCard AdharCard(@RequestBody AdharCard user) {

		return adharRepo.save(user);
	}

	@PutMapping("/admin/update/{id}")
	public ResponseEntity<AdharCard> updateAdhar(@PathVariable(value = "id") int AdharCardId,
			@RequestBody AdharCard user) {
		Optional<AdharCard> op = adharRepo.findById(user.getAdharCardId());
		if (op.isPresent()) {
			AdharCard ad = op.get();
			ad.setAddress(user.getAddress());
			ad.setDob(user.getDob());
			ad.setEmail(user.getEmail());
			ad.setGender(user.getGender());
			ad.setIssueDate(user.getIssueDate());
			ad.setMobileNumber(user.getMobileNumber());
			ad.setName(user.getName());

			final AdharCard updatedadhar = adharRepo.save(user);
			return ResponseEntity.ok(updatedadhar);
		}
		return null;
	}

	@DeleteMapping("/admin/delete/{id}")
	public List<AdharCard> DeleteEmployee(@PathVariable(value = "id") int AdharCardId) {
		Optional<AdharCard> op = adharRepo.findById(AdharCardId);
		if (op.isPresent()) {
			AdharCard ad = op.get();
			adharRepo.delete(ad);			
		}
		return adharRepo.findAll();

	}
	
	
	@GetMapping(value = "/admin/duplicatelist")
	public List<Duplicate> DuplicateList() {
		return dupliRepo.findAll();
	}
	
	
}
