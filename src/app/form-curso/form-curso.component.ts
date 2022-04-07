import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  nombreCurso = new FormControl;
  fecha_inicio_cursoCurso = new FormControl;
  fecha_final_cursoCurso = new FormControl;

  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
  }

  save(){
    
    // this.apiService.Post("cursos",
    // {
    //   id:6,
    //   nombre:this.nombreCurso.value(),
    //   fecha_inicio_curso:"asdas",
    //   fecha_final_curso:"asdsa"
    // }
    // ).then(x => {
    //   alert("El curso se creo")
    // });

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
