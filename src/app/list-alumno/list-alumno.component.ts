import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnoCursoComponent } from '../form-alumno-curso/form-alumno-curso.component';
import { FormAlumnoComponent } from '../form-alumno/form-alumno.component';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.scss']
})
export class ListAlumnoComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private modalService:NgbModal, private toastr: ToastrService) { }

  alumnos? : any[];

  ngOnInit(){
    this.list();
  }

  list(){
    this.apiService.Get("alumno").then(x => {
      this.alumnos = x;
      this.toastr.success("Alumnos refrescados");
    }).catch(x=>{
      this.toastr.error("No se pueden obtener los datos");
    });
  }
  

  delete(id:any){
    this.apiService.Delete("alumno",id).then(x => {
      this.toastr.success("Eliminado");
      this.list();
    }).catch(x=>{
      this.toastr.error("No se puede Eliminar");
    });
  }

  EditAlumno(alumno:any){
    const modalRef = this.modalService.open(FormAlumnoComponent, { size: 'lg', backdrop: 'static',  });
    modalRef.componentInstance.alumno = alumno;
  }

  EditAlumnoCurso(alumno:any){
    const modalRef = this.modalService.open(FormAlumnoCursoComponent, { size: 'lg', backdrop: 'static',  });
    modalRef.componentInstance.alumno = alumno;
    console.log(alumno);
  }

}
