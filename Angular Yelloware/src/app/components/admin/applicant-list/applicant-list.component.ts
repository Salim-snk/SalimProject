import { Component, OnInit, ViewChild } from '@angular/core';
import{ AdminService} from '../../../services/admin.service';
import {applicant} from '../../../model/applicant';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class applicantListComponent implements OnInit {
  applicantList: Array<applicant>;
  dataSource: MatTableDataSource<applicant> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  selectedapplicant: applicant = new applicant();
  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.findAllapplicants();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllapplicants(){
    this.adminService.findAllapplicants().subscribe(data => {
      this.applicantList = data;
      this.dataSource.data = data;
    });
  }

  createNewapplicantRequest(){
    this.selectedapplicant = new applicant();
    $('#applicantModal').modal('show');
  }

  editapplicantRequest(applicant: applicant){
    this.selectedapplicant = applicant;
    $('#applicantModal').modal('show');
  }

  saveapplicant(){
    if(!this.selectedapplicant.id){
      this.createapplicant();
    }else{
      this.updateapplicant();
    }
  }

  createapplicant(){
    this.adminService.createapplicant(this.selectedapplicant).subscribe(data => {
      this.applicantList.push(data);
      this.dataSource = new MatTableDataSource(this.applicantList);
      this.infoMessage = "Mission is completed";
      $('#applicantModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  updateapplicant(){
    this.adminService.updateapplicant(this.selectedapplicant).subscribe(data => {
      let itemIndex = this.applicantList.findIndex(item => item.id == this.selectedapplicant.id);
      this.applicantList[itemIndex] = this.selectedapplicant;
      this.dataSource = new MatTableDataSource(this.applicantList);
      this.infoMessage = "Mission is completed";
      $('#applicantModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  deleteapplicantRequest(applicant: applicant){
    this.selectedapplicant = applicant;
    $('#deleteModal').modal('show');
  }

  deleteapplicant(){
    this.adminService.deleteapplicant(this.selectedapplicant).subscribe(data => {
      let itemIndex = this.applicantList.findIndex(item => item.id == this.selectedapplicant.id);
      if(itemIndex !== -1){
        this.applicantList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.applicantList);
      this.infoMessage = "Mission is completed";
      $('#deleteModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }
}