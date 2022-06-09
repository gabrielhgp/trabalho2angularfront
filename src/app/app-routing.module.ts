import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstVeiculosComponent } from './lst-veiculos/lst-veiculos.component';
import { FrmVeiculoComponent } from './frm-veiculo/frm-veiculo.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"veiculos", component: LstVeiculosComponent },
  {path:"veiculo/:id", component: FrmVeiculoComponent },
  {path:"veiculo", component: FrmVeiculoComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
