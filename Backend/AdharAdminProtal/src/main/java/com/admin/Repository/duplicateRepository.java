package com.admin.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.admin.model.Duplicate;

@Component
public interface duplicateRepository extends JpaRepository<Duplicate, Integer>{

}
