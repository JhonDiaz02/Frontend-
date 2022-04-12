import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-alumno-curso',
  templateUrl: './form-alumno-curso.component.html',
  styleUrls: ['./form-alumno-curso.component.scss']
})
export class FormAlumnoCursoComponent implements OnInit {
  
  @Input() public alumno_curso: any;
  form!: FormGroup;

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  cursos?: any[];

  alumnos?: any[];
  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      alumno_id: [this.alumno_curso ? this.alumno_curso.alumno_id : "", Validators.compose([Validators.required])],
      curso_id: [this.alumno_curso ? this.alumno_curso.curso_id : "", Validators.compose([Validators.required])]
    });
    this.list();
    this.listAlumno();
  }

  save() {
    if (this.form.invalid) {
      this.toastr.warning("Ingrese todos los campos");
    } else {
      if (this.alumno_curso)
        this.apiService.Update("alumno_curso",
          {
            alumno_id: this.form.controls['alumno_id'].value,
            curso_id: this.form.controls['curso_id'].value
          },
          this.alumno_curso.id
        ).then(x => {
          this.toastr.success("El curso se actualizo")
        }).catch(x => {
          this.toastr.error("El curso NO se actualizo")
        });
      else
        this.apiService.Post("alumno_curso",
          {
            alumno_id: this.form.controls['alumno_id'].value,
            curso_id: this.form.controls['curso_id'].value
          }
        ).then(x => {
          this.toastr.success("La referencia se creo")
        }).catch(x => {
          this.toastr.error("El referencia NO se creo")
        });
    }
  }

  list(){
    this.apiService.Get("curso").then(x => {
      this.cursos = x;
    }).catch(x=>{
      this.toastr.warning("No se pueden obtener los datos");
    });
  }

  listAlumno(){
    this.apiService.Get("alumno").then(x => {
      this.alumnos = x;
    }).catch(x=>{
      this.toastr.warning("No se pueden obtener los datos");
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

}
