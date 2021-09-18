import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userCount:any = "";
  applicantCount:any = "";
  transactionCount:any = "";

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.numberOfUsers();
    this.numberOfapplicants();
    this.numberOfTransactions();
  }

  numberOfUsers(){
    this.adminService.numberOfUsers().subscribe(data => {
      this.userCount = data.response;
    });
  }

  numberOfapplicants(){
    this.adminService.numberOfapplicants().subscribe(data => {
      this.applicantCount = data.response;
    });
  }

  numberOfTransactions(){
    this.adminService.numberOfTransactions().subscribe(data => {
      this.transactionCount = data.response;
    })
  }

}