import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { ListAlumnoComponent } from './list-alumno/list-alumno.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'alumno', component: ListAlumnoComponent },
  { path: 'curso', component: ListCourseComponent },
  { path: 'add-curso', component: FormCursoComponent },
  { path: 'add-alumno', component: FormAlumnoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
