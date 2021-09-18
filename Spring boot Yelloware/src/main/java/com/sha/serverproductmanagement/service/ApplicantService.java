package com.sha.serverapplicantmanagement.service;

import com.sha.serverapplicantmanagement.model.applicant;

import java.util.List;

public interface applicantService {
    applicant saveapplicant(applicant applicant);

    applicant updateapplicant(applicant applicant);

    void deleteapplicant(Long applicantId);

    Long numberOfapplicants();

    List<applicant> findAllapplicants();
}
