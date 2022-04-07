import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  @Input() public curso: any;
  form!: FormGroup;

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [this.curso ? this.curso.nombre : "", Validators.compose([Validators.required])],
      fecha_inicio_curso: [this.curso ? this.curso.fecha_inicio_curso : "", Validators.compose([Validators.required])],
      fecha_final_curso: [this.curso ? this.curso.final_curso : "", Validators.compose([Validators.required])]
    });
  }

  save() {
    if (this.form.invalid) {
      alert("Ingrese todos los campos");
    } else {
      if (this.curso)
        this.apiService.Update("curso",
          {
            nombre: this.form.controls['nombre'].value,
            fecha_inicio_curso: this.form.controls['fecha_inicio_curso'].value,
            fecha_final_curso: this.form.controls['fecha_final_curso'].value
          },
          this.curso.id
        ).then(x => {
          alert("El curso se actualizo")
        }).catch(x => {
          alert("El curso NO se actualizo")
        });
      else
        this.apiService.Post("curso",
          {
            nombre: this.form.controls['nombre'].value,
            fecha_inicio_curso: this.form.controls['fecha_inicio_curso'].value,
            fecha_final_curso: this.form.controls['fecha_final_curso'].value
          }
        ).then(x => {
          alert("El curso se creo")
        }).catch(x => {
          alert("El curso NO se creo")
        });
    }

    // this.apiService.Update("cursos",
    // {
    //   id:6,
    //   nombre:this.nombreCurso.value(),
    //   fecha_inicio_curso:"asdas",
    //   fecha_final_curso:"asdsa"
    // },
    // "1"
    // ).then(x => {
    //   alert("El curso se actualizo")
    // });

    // this.apiService.Delete("cursos","1")
    // .then(x => {
    //   alert("El curso se actualizo")
    // });
  }

}
