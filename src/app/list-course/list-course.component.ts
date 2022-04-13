import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCursoComponent } from '../form-curso/form-curso.component';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  constructor(private apiService: ApiServiceService, private modalService:NgbModal, private toastr: ToastrService) { }

  cursos?: any[];

  ngOnInit() {
    this.list();
  }

  delete(id:any){
    this.apiService.Delete("curso",id).then(x => {
      this.toastr.success("Eliminado");
      this.list();
    }).catch(x=>{
      this.toastr.error("No se puede Eliminar");
    });
  }

  list(){
    this.apiService.Get("curso").then(x => {
      this.cursos = x;
      this.toastr.success("Cursos refrescados");
    }).catch(x=>{
      this.toastr.error("No se pueden obtener los datos");
    });
  }

  EditCurso(curso:any){
    const modalRef = this.modalService.open(FormCursoComponent, { size: 'lg', backdrop: 'static',  });
    modalRef.componentInstance.curso = curso;
    modalRef.componentInstance.modal = this.modalService;
  }
}
