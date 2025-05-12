import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PembelianKueRoutingModule } from './pembelian-kue-routing.module'; // Sesuaikan nama routing module
import { PembelianKuePage } from './pembelian-kue.page'; // Ubah dari DaftarPage ke PembelianKuePage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PembelianKueRoutingModule
  ],
  declarations: [PembelianKuePage]
})
export class PembelianKueModule {} // Ubah nama module jika diperlukan
