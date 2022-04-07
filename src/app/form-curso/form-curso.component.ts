import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  nombreCurso = new FormControl;
  fecha_inicio_cursoCurso = new FormControl;
  fecha_final_cursoCurso = new FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
