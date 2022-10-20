package com.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.user.model.Duplicate;

@Component
public interface duplicateRepository extends JpaRepository<Duplicate, Integer>{

}
