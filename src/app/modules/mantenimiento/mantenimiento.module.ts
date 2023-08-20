import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaproductoComponent } from './categoriaproducto/categoriaproducto.component';
import { MantenimientoRoutingModule } from './mantenimiento.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriaproductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MantenimientoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MantenimientoModule { }
