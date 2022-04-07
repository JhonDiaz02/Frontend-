import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  data?: any[];

  constructor(private http: HttpClient) { }

  Get(entity: string) {
    this.http.get<any>(environment.end_point + entity).subscribe(data => {
      this.data = data;
    });
    return this.data;
  }
}
