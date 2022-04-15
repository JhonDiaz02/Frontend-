import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  data?: any[];

  constructor(private http: HttpClient) { }

  Get(entity: string): Promise<any> {
    return this.http.get(`${environment.end_point}${entity}`)
      .toPromise()
      .then(x => {
        return Promise.resolve(<any>x);
      });
  }

  Post(entity: string, data:any): Promise<any> {
    return this.http.post(`${environment.end_point}${entity}`, data)
      .toPromise()
      .then(x => {
        return Promise.resolve(<any>x);
      });
  }

  Update(entity: string, data:any, id:string): Promise<any> {
    return this.http.put(`${environment.end_point}${entity}/${id}`, data)
      .toPromise()
      .then(x => {
        return Promise.resolve(<any>x);
      });
  }

  Delete(entity: string, id:string): Promise<any> {
    return this.http.delete(`${environment.end_point}${entity}/${id}`)
      .toPromise()
      .then(x => {
        return Promise.resolve(<any>x);
      });
  }

  Departament(entity: string, id:string): Promise<any> {
    return this.http.get(`${environment.end_point}${entity}/${id}`)
      .toPromise()
      .then(x => {
        console.log(x);
        return Promise.resolve(<any>x);
      });
  }  

  City(entity: string, id:string): Promise<any> {
    return this.http.get(`${environment.end_point}${entity}/${id}`)
      .toPromise()
      .then(x => {
        console.log(x);
        return Promise.resolve(<any>x);
      });
  }  

}
