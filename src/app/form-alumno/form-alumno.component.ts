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


  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder, private modalService:NgbModal, private toastr: ToastrService) { }

  @Input() public alumno: any;
  @Input() public modal: NgbModal | undefined;
  form!: FormGroup;

  paises? :any[];
  departamento? :any[];
  ciudades? :any[];
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [this.alumno ? this.alumno.nombre : "", Validators.compose([Validators.required])],
      identificacion: [this.alumno ? this.alumno.identificacion : "", Validators.compose([Validators.required])],
      correo: [this.alumno ? this.alumno.correo : "", Validators.compose([Validators.required])]
    });
    this.listCountry();
    this.listCity();
  }

  save() {
    if (this.form.invalid) {
      this.toastr.warning("Ingrese todos los campos");
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
          this.toastr.success("El alumno se actualizo")
        }).catch(x => {
          this.toastr.error("El alumno NO se actualizo")
        });
      else
        this.apiService.Post("alumno",
          {
            nombre: this.form.controls['nombre'].value,
            identificacion: this.form.controls['identificacion'].value,
            correo: this.form.controls['correo'].value,
          }
        ).then(x => {
          this.toastr.success("El alumno se creo")
        }).catch(x => {
          this.toastr.error("El alumno NO se creo")
        });
    }
  }

  EditAlumnoCurso(alumno:any){
    const modalRef = this.modalService.open(FormAlumnoCursoComponent, { size: 'lg', backdrop: 'static',  });
    modalRef.componentInstance.alumno = alumno;
  }

  closeModal(){
    this.modal?.dismissAll();
  }

  listCountry(){
    this.apiService.Get("pais").then(x => {
      this.paises = x;
    }).catch(x=>{
      this.toastr.error("No se pueden obtener los datos");
    });
  }

  Departament(id : any) {
    this.apiService.Option("pais", id.value).then(x => {
      this.departamento = x;
      console.log(this.departamento);
    }).catch(x=>{
      this.toastr.error("No se pueden obtener los datos");
    });
  }
  
  listCity(){
    this.apiService.Get("ciudad").then(x => {
      this.ciudades = x;
    }).catch(x=>{
      this.toastr.error("No se pueden obtener los datos");
    });
  }
  
  
}
