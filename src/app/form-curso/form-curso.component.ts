import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  @Input() public curso: any;
  form!: FormGroup;

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [this.curso ? this.curso.nombre : "", Validators.compose([Validators.required])],
      fecha_inicio_curso: [this.curso ? this.curso.fecha_inicio_curso : "", Validators.compose([Validators.required])],
      fecha_final_curso: [this.curso ? this.curso.fecha_final_curso : "", Validators.compose([Validators.required])]
    });
    console.log(this.form);
  }

  save() {
    if (this.form.invalid) {
      this.toastr.warning("Ingrese todos los campos");
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
          this.toastr.success("El curso se actualizo")
        }).catch(x => {
          this.toastr.error("El curso NO se actualizo")
        });
      else
        this.apiService.Post("curso",
          {
            nombre: this.form.controls['nombre'].value,
            fecha_inicio_curso: this.form.controls['fecha_inicio_curso'].value,
            fecha_final_curso: this.form.controls['fecha_final_curso'].value
          }
        ).then(x => {
          this.toastr.success("El curso se creo")
        }).catch(x => {
          this.toastr.error("El curso NO se creo")
        });
    }
  }

}
