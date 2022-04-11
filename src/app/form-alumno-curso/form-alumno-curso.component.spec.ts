import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnoCursoComponent } from './form-alumno-curso.component';

describe('FormAlumnoCursoComponent', () => {
  let component: FormAlumnoCursoComponent;
  let fixture: ComponentFixture<FormAlumnoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlumnoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
