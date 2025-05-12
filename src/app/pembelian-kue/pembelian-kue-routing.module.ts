import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PembelianKuePage } from './pembelian-kue.page'; // Ubah dari DaftarPage ke PembelianKuePage

const routes: Routes = [
  {
    path: '',
    component: PembelianKuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PembelianKueRoutingModule {} // Ubah nama module jika diperlukan
