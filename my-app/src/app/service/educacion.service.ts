import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  url: string = environment.URL + 'educacion/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
