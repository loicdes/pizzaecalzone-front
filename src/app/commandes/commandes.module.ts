import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandesRoutingModule } from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [CommandesComponent],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CommandesModule { }
