import {applicant} from './applicant';
import {User} from './user';
export class Transaction {
  id:number;
  applicant: applicant;
  user: User;
  purchaseDate: any;
}