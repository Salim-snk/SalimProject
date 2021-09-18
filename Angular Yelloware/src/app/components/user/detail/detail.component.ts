import { Component, OnInit } from '@angular/core';
import { applicant} from "../../../model/applicant";
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Detail } from 'src/app/detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  applicantId: string;
  currentapplicant: applicant;

  

  constructor(private route: ActivatedRoute) {
    this.currentapplicant = JSON.parse(localStorage.getItem("currentapplicant"));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.applicantId = params.get('id');
      }
    });
  }

}
