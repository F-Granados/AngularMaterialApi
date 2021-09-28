import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [

  {
    path: '',
    component:PersonalFormComponent 
  },
  {
    path: 'listar',
    component:ListaComponent 
  },
  {
    path: 'edit/:id',
    component: PersonalFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
