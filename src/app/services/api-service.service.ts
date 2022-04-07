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
}
