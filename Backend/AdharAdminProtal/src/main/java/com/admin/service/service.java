package com.admin.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.Repository.adharRepository;
import com.admin.Repository.adminRepository;
import com.admin.model.AdharCard;
import com.admin.model.admin;

@Service
public class service {

	@Autowired
	adminRepository adminRepo;

	@Autowired
	adharRepository adharRepo;

	public admin storeParticipants(admin user) {

		Optional<admin> op = adminRepo.findById(user.getId());
		if (op.isEmpty()) {
			return adminRepo.save(user);
		}
		return null;
	}

//	public void UpdateAdhar(AdharCard user) {
//		Optional<AdharCard> op = adharRepo.findById(user.getAdharCardId());
//		if (op.isPresent()) {
//			AdharCard e = op.get();
//			e.setAddress(user.getAddress());
//			e.setName(user.getName());
//			e.setDob(user.getDob());
//			e.setEmail(user.getEmail());
//			e.setGender(user.getGender());
//			e.setIssueDate(user.getIssueDate());
//			e.setMobileNumber(user.getMobileNumber());
//			adharRepo.save(e);
//			
//		}
//	}
}
