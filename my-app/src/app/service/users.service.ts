
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL: String = "http://localhost:8080/usuarios/";

  constructor(private http: HttpClient) { }

  public getUser(): Observable<Users> {
    return this.http.get<Users>(this.URL+ 'registrados/perfil');
  }
} 
