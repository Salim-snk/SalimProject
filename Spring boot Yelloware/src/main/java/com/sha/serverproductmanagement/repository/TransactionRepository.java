package com.sha.serverapplicantmanagement.repository;

import com.sha.serverapplicantmanagement.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
