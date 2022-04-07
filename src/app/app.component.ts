import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}
  title = '';

  cursos = [];
  curso = {
    nombre: "",
    fecha_inicio_curso: "",
    fecha_final_curso: "",
    id: ""
  };
  

  ngOnInit() {
    this.GetCurso();
  }

  GetCurso(){
    this.cursos = [];
    this.http.get<any>("http://localhost:8000/api/curso").subscribe(data => {
      this.cursos = data;
    })
  }
}
