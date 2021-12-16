import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../../shared/models/user.model';
import { environment } from '../../../../../environments/environment';
import { Register } from '../../domain/interfaces/register.interface';
import { Login } from '../../domain/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly endpoints = {
    register: `${environment.apiUrl}/user`,
    login: `${environment.apiUrl}/user/login`,
  };

  constructor(private httpClient: HttpClient) { }

  register(register: Register): Observable<any> {
    return this.httpClient.post(this.endpoints.register, register);
  }

  login(data: Login): Observable<User> {
    return this.httpClient.post<User>(this.endpoints.login, data);
  }
}
