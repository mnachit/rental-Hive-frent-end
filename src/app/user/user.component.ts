// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';
import { User } from '../user';
import { User1 } from './model';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users?: User[];
  success: Boolean = true;
  userSubscription?: Subscription;
  id?: Number;
  DataUser: User1[] = [];
  idd?: number;
  TestDataisExist: Boolean = false;
  constructor(private userService: UsersService) { }
  ngOnInit(): void {
    this.retrieveUser();

    this.userSubscription = interval(1000).subscribe(() => {
      this.retrieveUser();
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  retrieveUser(): void {
    this.userService.getUsers()
      .subscribe({
        next: (data: User[]) => {
          this.users = data;
          console.log(data);
          
        },
        error: (e) => console.error(e)
      });
  }
  user: User1 = new User1('', '', '', '', [], { name: '', since: 0, industry: '', size: 0 });
  
  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully', response);
        this.success = true;
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }

  deleteUser(id: number):void{
    this.userService.deleteUser(id).subscribe(
      (response)=>{
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    )
  }

  showUserWithId(id: number)
  {
    DataUser: [];
    TestDataisExist: false;
    this.userService.showUserWithId(id).subscribe(
      (response)=>{
        console.log(response);
        TestDataisExist: true;
        this.DataUser = [response];
      },
      (error) =>
      {
        console.log('Error deleting user', error);
      }
    )
  }
}