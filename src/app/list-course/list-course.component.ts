import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  constructor(private apiService: ApiServiceService) { }

  cursos?: any[];

  ngOnInit() {
    this.apiService.Get("cursos").then(x => {
      this.cursos = x;
    });
  }
}
