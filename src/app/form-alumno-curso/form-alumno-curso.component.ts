import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-alumno-curso',
  templateUrl: './form-alumno-curso.component.html',
  styleUrls: ['./form-alumno-curso.component.scss']
})
export class FormAlumnoCursoComponent implements OnInit {

  @Input() public alumno: any;
  @Input() public modal: NgbModal | undefined;
  form!: FormGroup;

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  cursos?: any[];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      alumno_id: [this.alumno ? this.alumno.id : "", Validators.compose([Validators.required])],
      curso_id: ["", Validators.compose([Validators.required])]
    });
    this.list();
  }

  save() {
    if (this.form.invalid) {
      this.toastr.warning("Ingrese todos los campos");
    } else {
      this.apiService.Post("alumno_curso",
        {
          alumno_id: this.alumno.id,
          curso_id: this.form.controls['curso_id'].value
        }
      ).then(x => {
        this.toastr.success("La referencia se creo")
      }).catch(x => {
        this.toastr.error(x.error.message)
      });
    }
  }

  list() {
    this.apiService.Get("curso").then(x => {
      this.cursos = x;
    }).catch(x => {
      this.toastr.warning("No se pueden obtener los datos");
    });
  }

  delete(id: any) {
    this.apiService.Delete("alumno", id).then(x => {
      this.toastr.success("Eliminado");
      this.list();
    }).catch(x => {
      this.toastr.error("No se puede Eliminar");
    });
  }

  closeModal(){
    this.modal?.dismissAll();
  }

}
