import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  url: string = environment.URL + 'explab/';
/*
  URL = environment.URL + 'explab/';
*/

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
