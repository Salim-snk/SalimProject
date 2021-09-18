import {Role} from './role';
export class User {
  id: number;
  username: string="Admin";
  password: string="admin";
  name: string="Kenan Pamuk";
  role: Role;
  token: string="";
}
