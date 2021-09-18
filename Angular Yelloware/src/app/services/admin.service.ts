import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';
import {applicant} from '../model/applicant';
import {Transaction} from '../model/transaction';

let API_URL = "http://localhost:8080/api/admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(API_URL + "user-update", JSON.stringify(user),
  {headers: this.headers});
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post(API_URL + "user-delete", JSON.stringify(user),
  {headers: this.headers});
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "user-all",
  {headers: this.headers});
  }

  numberOfUsers(): Observable<any> {
    return this.http.get(API_URL + "user-number",
  {headers: this.headers});
  }

  //applicants
  createapplicant(applicant: applicant): Observable<any> {
    return this.http.post(API_URL + "applicant-create", JSON.stringify(applicant),
  {headers: this.headers});
  }

  updateapplicant(applicant: applicant): Observable<any> {
    return this.http.put(API_URL + "applicant-update", JSON.stringify(applicant),
  {headers: this.headers});
  }

  deleteapplicant(applicant: applicant): Observable<any> {
    return this.http.post(API_URL + "applicant-delete", JSON.stringify(applicant),
  {headers: this.headers});
  }

  findAllapplicants(): Observable<any> {
    return this.http.get(API_URL + "applicant-all",
  {headers: this.headers});
  }

  numberOfapplicants(): Observable<any> {
    return this.http.get(API_URL + "applicant-number",
  {headers: this.headers});
  }

  //transactions
  findAllTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-all",
   {headers: this.headers});
  }

  numberOfTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-number",
  {headers: this.headers});
  }
}