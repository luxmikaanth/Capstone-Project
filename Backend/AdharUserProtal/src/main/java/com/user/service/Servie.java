package com.user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.model.AdharCard;
import com.user.model.Duplicate;
import com.user.model.Users;
import com.user.repository.UserRepository;
import com.user.repository.adharRepository;
import com.user.repository.duplicateRepository;

@Service
public class Servie {
	
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	duplicateRepository dupliRepo;
	
	@Autowired
	adharRepository adharRepo;
	
	public Users storeParticipants(Users user) {

		Optional<Users> op = userRepo.findById(user.getId());
		if (op.isEmpty()) {
		return  userRepo.save(user);	
	}
		return null;
}
	
	public AdharCard apply(AdharCard adhar) {
		Optional<Users> op = userRepo.findById(adhar.getAdharCardId());
		if (op.isEmpty()) {
		return adharRepo.save(adhar);
		}
	
		return null;
	}
	
	public AdharCard duplicate(Duplicate duplicate) {
		Optional<AdharCard> op = adharRepo.findById(duplicate.getAdharCardId());
		if(op.isPresent()) {
			AdharCard adhar = op.get();
			dupliRepo.save(duplicate);
			
			return adhar;
		}
		return null;
	}
	

		
	}
	

