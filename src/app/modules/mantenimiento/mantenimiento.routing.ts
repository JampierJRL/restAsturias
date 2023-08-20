import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaproductoComponent } from './categoriaproducto/categoriaproducto.component';
import { titleApp } from 'src/app/data/settings/AppBlobal';

const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaproductoComponent,
    title:  `${titleApp} Categoria`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
