package com.user.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.user.model.AdharCard;
import com.user.model.Duplicate;
import com.user.model.Users;
import com.user.repository.UserRepository;
import com.user.repository.adharRepository;
import com.user.repository.duplicateRepository;
import com.user.service.*;

@Component
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

	@Autowired
	Servie service;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	adharRepository adharRepo;
	
	@Autowired
	duplicateRepository dupliRepo;
	
	
	@RequestMapping(value = "/participants/signup", method = RequestMethod.POST)
	public Users storeParticipants(@RequestBody Users user) { 
		return service.storeParticipants(user);
	}
	
	
	@GetMapping(value = "/participants/login")
	public List<Users> Login() {
		return userRepo.findAll();
	}

	@RequestMapping(value = "/participants/apply", method = RequestMethod.POST)
	public AdharCard applyAdhar(@RequestBody AdharCard adhar) {
		
		return  service.apply(adhar);
	}
	
	
	@RequestMapping(value = "/participants/duplicate", method = RequestMethod.POST)
	public AdharCard duplicate(@RequestBody Duplicate duplicate) {
		return service.duplicate(duplicate);
	}
	
	
	@GetMapping(value = "/participants/checkingduplicate")
	public List<AdharCard> checkDupicate() {
		return adharRepo.findAll();
	}
	
	
	@PutMapping("/user/update/{id}")
	public ResponseEntity<AdharCard> updateEmployee(@PathVariable(value = "id") int AdharCardId,
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
	

}
