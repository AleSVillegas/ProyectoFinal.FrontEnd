
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users.model';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = environment.apiURL + 'usuarios/';

  constructor(private http: HttpClient) { }

  public getUser(): Observable<Users> {
    return this.http.get<Users>(this.url+ 'registrados/perfil');
  }
} 
