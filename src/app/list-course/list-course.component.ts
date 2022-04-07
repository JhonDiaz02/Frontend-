import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  constructor(private http: HttpClient){}

  cursos = [];

  ngOnInit() {
    this.GetCurso();
  }

  GetCurso(){
    this.cursos = [];
    this.http.get<any>("http://localhost:8000/api/curso").subscribe(data => {
      console.log(data);
      this.cursos = data;
    })
  }
}
