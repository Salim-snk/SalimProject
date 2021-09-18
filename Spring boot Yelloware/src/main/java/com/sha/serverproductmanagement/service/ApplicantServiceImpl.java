package com.sha.serverapplicantmanagement.service;

import com.sha.serverapplicantmanagement.model.applicant;
import com.sha.serverapplicantmanagement.repository.applicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional //It is not necessary. You can use it, if you have multiple database operation in a single service method.
public class applicantServiceImpl implements applicantService {

    @Autowired
    private applicantRepository applicantRepository;

    @Override
    public applicant saveapplicant(final applicant applicant){
        applicantRepository.save(applicant);
        return applicant;
    }

    @Override
    public applicant updateapplicant(final applicant applicant){
        return applicantRepository.save(applicant);
    }

    @Override
    public void deleteapplicant(final Long applicantId){
        applicantRepository.deleteById(applicantId);
    }

    @Override
    public Long numberOfapplicants(){
        return applicantRepository.count();
    }

    @Override
    public List<applicant> findAllapplicants(){
        return applicantRepository.findAll();
    }
}
