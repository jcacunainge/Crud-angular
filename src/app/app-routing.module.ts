import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos nuestros componentes

import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SwowComponent } from './components/swow/swow.component';


//Agregamos los path de las rutas
const routes: Routes = [
  {path: '', component:SwowComponent},
  {path: 'create', component:CreateComponent},
  {path: 'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
