package com.sha.serverapplicantmanagement.controller;

import com.sha.serverapplicantmanagement.model.applicant;
import com.sha.serverapplicantmanagement.model.StringResponse;
import com.sha.serverapplicantmanagement.model.User;
import com.sha.serverapplicantmanagement.service.applicantService;
import com.sha.serverapplicantmanagement.service.TransactionService;
import com.sha.serverapplicantmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private applicantService applicantService;

    @Autowired
    private TransactionService transactionService;

    @PutMapping("/api/admin/user-update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        User existUser = userService.findByUsername(user.getUsername());
        if (existUser != null && !existUser.getId().equals(user.getId())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.CREATED);
    }

    //This can be also @DeleteMapping.
    @PostMapping("/api/admin/user-delete")
    public ResponseEntity<?> deleteUser(@RequestBody User user){
        userService.deleteUser(user.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/admin/user-all")
    public ResponseEntity<?> findAllUsers(){
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/api/admin/user-number")
    public ResponseEntity<?> numberOfUsers(){
        Long number = userService.numberOfUsers();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        //to return it, we will use String Response because long is not a suitable response for rest api
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PostMapping("/api/admin/applicant-create")
    public ResponseEntity<?> createapplicant(@RequestBody applicant applicant){
        return new ResponseEntity<>(applicantService.saveapplicant(applicant), HttpStatus.CREATED);
    }

    @PutMapping("/api/admin/applicant-update")
    public ResponseEntity<?> updateapplicant(@RequestBody applicant applicant){
        return new ResponseEntity<>(applicantService.updateapplicant(applicant), HttpStatus.CREATED);
    }

    //This can be also @DeleteMapping.
    @PostMapping("/api/admin/applicant-delete")
    public ResponseEntity<?> deleteapplicant(@RequestBody applicant applicant){
        applicantService.deleteapplicant(applicant.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/admin/applicant-all")
    public ResponseEntity<?> findAllapplicants(){
        return new ResponseEntity<>(applicantService.findAllapplicants(), HttpStatus.OK);
    }

    @GetMapping("/api/admin/applicant-number")
    public ResponseEntity<?> numberOfapplicants(){
        Long number = applicantService.numberOfapplicants();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/api/admin/transaction-all")
    public ResponseEntity<?> findAllTransactions(){
        return new ResponseEntity<>(transactionService.findAllTransactions(), HttpStatus.OK);
    }

    @GetMapping("api/admin/transaction-number")
    public ResponseEntity<?> numberOfTransactions(){
        Long number = transactionService.numberOfTransactions();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
