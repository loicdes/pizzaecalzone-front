import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes.component';


const routes: Routes = [
  {
    path: '',
    component: CommandesComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
