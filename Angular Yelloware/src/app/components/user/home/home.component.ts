import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/user";
import {applicant} from "../../../model/applicant";
import {Transaction} from "../../../model/transaction";
import {MatPaginator, MatTableDataSource, MatSort} from "@angular/material";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applicantList: Array<applicant>;
  dataSource: MatTableDataSource<applicant> = new MatTableDataSource();
  obs: Observable<any>;
  errorMessage: string;
  infoMessage: string;
  currentUser: User;

  constructor(private userService: UserService, private router: Router,
  private cdr: ChangeDetectorRef) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.findAllapplicants();
    this.obs = this.dataSource.connect();
  }
  findAllapplicants() {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if(this.dataSource){
      this.dataSource.disconnect();
    }
  }

  

  purchaseapplicant(applicant: applicant){
    if(!this.currentUser){
      this.errorMessage = "You should sign in to purchase a applicant";
      return;
    }
    var transaction = new Transaction();
    transaction.applicant =  applicant;
    transaction.user = this.currentUser;
    this.userService.purchaseapplicant(transaction).subscribe(data => {
      this.infoMessage = "Mission is completed.";
    },err => {
      this.errorMessage = "Unexpected error occurred";
    });
  }

  detail(applicant: applicant){
    localStorage.setItem("currentapplicant", JSON.stringify(applicant));
    this.router.navigate(['/detail', applicant.id]);
  }

}
