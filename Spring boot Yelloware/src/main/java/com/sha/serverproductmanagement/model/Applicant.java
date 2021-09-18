package com.sha.serverapplicantmanagement.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="applicant")
public class applicant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private Double price;

    @Column(name="explanation")
    private String explanation;
}


