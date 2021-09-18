package com.sha.serverapplicantmanagement.repository;

import com.sha.serverapplicantmanagement.model.applicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface applicantRepository extends JpaRepository<applicant, Long> {
}
