import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatieresComponent } from './components/matieres/matieres.component';
import {AddMatiereComponent} from './components/add-matiere/add-matiere.component';

const routes: Routes = [
 { path: "", component:   MatieresComponent},
 { path: "", component: AddMatiereComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
