import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnoCursoComponent } from '../form-alumno-curso/form-alumno-curso.component';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent implements OnInit {


  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder, private modalService:NgbModal) { }

  @Input() public alumno: any;
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [this.alumno ? this.alumno.nombre : "", Validators.compose([Validators.required])],
      identificacion: [this.alumno ? this.alumno.identificacion : "", Validators.compose([Validators.required])],
      correo: [this.alumno ? this.alumno.correo : "", Validators.compose([Validators.required])]
    });
  }

  save() {
    if (this.form.invalid) {
      alert("Ingrese todos los campos");
    } else {
      if (this.alumno)
        this.apiService.Update("alumno",
          {
            nombre: this.form.controls['nombre'].value,
            identificacion: this.form.controls['identificacion'].value,
            correo: this.form.controls['correo'].value
          },
          this.alumno.id
        ).then(x => {
          alert("El alumno se actualizo")
        }).catch(x => {
          alert("El alumno NO se actualizo")
        });
      else
        this.apiService.Post("alumno",
          {
            nombre: this.form.controls['nombre'].value,
            identificacion: this.form.controls['identificacion'].value,
            correo: this.form.controls['correo'].value,
          }
        ).then(x => {
          alert("El alumno se creo")
        }).catch(x => {
          alert("El alumno NO se creo")
        });
    }
  }

  EditAlumnoCurso(alumno:any){
    const modalRef = this.modalService.open(FormAlumnoCursoComponent, { size: 'lg', backdrop: 'static',  });
    modalRef.componentInstance.alumno = alumno;
  }


}
