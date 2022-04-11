import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form-alumno-curso',
  templateUrl: './form-alumno-curso.component.html',
  styleUrls: ['./form-alumno-curso.component.scss']
})
export class FormAlumnoCursoComponent implements OnInit {
  
  @Input() public alumno_curso: any;
  form!: FormGroup;

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder) { }

  cursos?: any[];

  alumnos?: any[];
  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      alumno_id: [this.alumno_curso ? this.alumno_curso.alumno_id : "", Validators.compose([])],
      curso_id: [this.alumno_curso ? this.alumno_curso.curso_id : "", Validators.compose([])]
    });
    this.list();
    this.listAlumno();
    console.log(this.form);
  }

  save() {
    if (this.form.invalid) {
      alert("Ingrese todos los campos");
    } else {
      if (this.alumno_curso)
        this.apiService.Update("alumno_curso",
          {
            alumno_id: this.form.controls['alumno_id'].value,
            curso_id: this.form.controls['curso_id'].value
          },
          this.alumno_curso.id
        ).then(x => {
          alert("El curso se actualizo")
        }).catch(x => {
          alert("El curso NO se actualizo")
        });
      else
        this.apiService.Post("alumno_curso",
          {
            alumno_id: this.form.controls['alumno_id'].value,
            curso_id: this.form.controls['curso_id'].value
          }
        ).then(x => {
          alert("La referencia se creo")
        }).catch(x => {
          alert("El referencia NO se creo")
        });
    }
  }

  list(){
    this.apiService.Get("curso").then(x => {
      this.cursos = x;
    }).catch(x=>{
      alert("No se pueden obtener los datos");
    });
  }

  listAlumno(){
    this.apiService.Get("alumno").then(x => {
      this.alumnos = x;
    }).catch(x=>{
      alert("No se pueden obtener los datos");
    });
  }

}
