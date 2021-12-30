import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoints = {
    user: `${environment.apiUrl}/user/{0}`,
    updateUser: `${environment.apiUrl}/user`
  };

  constructor(private httpClient: HttpClient) { }

  getUser(userId: number): Observable<User> {
    console.log(userId);
    return this.httpClient.get<User>(this.endpoints.user.format((String(userId))));
  }

  updateUser(user: User): Observable<User> {
    console.log(user);
   return this.httpClient.put<User>(this.endpoints.updateUser, user);
  }
}
