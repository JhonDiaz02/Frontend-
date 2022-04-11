import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FormAlumnoCursoComponent } from './form-alumno-curso/form-alumno-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCursoComponent,
    ListCourseComponent,
    FormAlumnoComponent,
    ListAlumnoComponent,
    FormAlumnoCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
