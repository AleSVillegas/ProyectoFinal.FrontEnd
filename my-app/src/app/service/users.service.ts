
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users.model';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url: string = environment.URL + 'usuarios/';

constructor(private httpClient: HttpClient) { }

public lista(): Observable<Users[]>{
  return this.httpClient.get<Users[]>(this.url + 'lista');
}

public detail(id: number): Observable<Users>{
  return this.httpClient.get<Users>(this.url + `detail/${id}`);
}

/*public save(educacion: Users): Observable<any>{
  return this.httpClient.post<any>(this.url + 'create', educacion);
}*/

public update(id: number, user: Users): Observable<any>{
  return this.httpClient.put<any>(this.url + `update/${id}`, user);
}

/*public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `delete/${id}`);
}*/
}





/*export class UsersService {

  url: string = environment.URL + 'usuarios/';

  constructor(private http: HttpClient) { }

  public getUser(): Observable<Users> {
    return this.http.get<Users>(this.url+ 'registrados/perfil');
  }
} */
