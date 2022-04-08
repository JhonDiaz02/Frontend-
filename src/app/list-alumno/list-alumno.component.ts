import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnoComponent } from '../form-alumno/form-alumno.component';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.scss']
})
export class ListAlumnoComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private modalService:NgbModal) { }

  alumnos? : any[];

  ngOnInit(){
    this.list();
  }

  list(){
    this.apiService.Get("alumno").then(x => {
      this.alumnos = x;
    }).catch(x=>{
      alert("No se pueden obtener los datos");
    });
  }

  delete(id:any){
    this.apiService.Delete("alumno",id).then(x => {
      alert("Eliminado");
      this.list();
    }).catch(x=>{
      alert("No se puede Eliminar");
    });
  }

  EditAlumno(alumno:any){
    const modalRef = this.modalService.open(FormAlumnoComponent, { size: 'lg', backdrop: 'static',  });
    modalRef.componentInstance.alumno = alumno;
  }

}
