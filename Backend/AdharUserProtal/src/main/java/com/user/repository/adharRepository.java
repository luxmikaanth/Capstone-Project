package com.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.user.model.*;


@Repository
public interface adharRepository extends JpaRepository<AdharCard, Integer>{

	
}