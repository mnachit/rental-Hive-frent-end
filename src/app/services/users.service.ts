// users.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { User1 } from '../user/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "http://localhost:8081/api/v1/user";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  addUser(user: User1): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  showUserWithId(id: number): Observable<User1>
  {
    return this.http.get<User1>(`${this.baseUrl}/${id}`);
  }
}
