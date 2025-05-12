import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pembelian-kue',
  templateUrl: './pembelian-kue.page.html', // Pastikan file ini ada
  styleUrls: ['./pembelian-kue.page.scss'],
})
export class PembelianKuePage {
  namaPembeli: string = '';
  pilihanKue: string = '';
  jumlah: number = 1;
  nomorLilin: number = 0;
  alamatPengiriman: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  isFormValid(): boolean {
    return (
      this.namaPembeli !== '' &&
      this.pilihanKue !== '' &&
      this.jumlah > 0 &&
      this.alamatPengiriman !== ''
    );
  }

  pesanKue() {
    if (this.isFormValid()) {
      const data = {
        namaPembeli: this.namaPembeli,
        pilihanKue: this.pilihanKue,
        jumlah: this.jumlah,
        nomorLilin: this.nomorLilin,
        alamatPengiriman: this.alamatPengiriman
      };

      this.apiService.pesanKue(data).subscribe(response => {
        console.log('Pesanan berhasil dibuat:', response);
        this.resetForm();
        this.router.navigate(['/data']);
      });
    } else {
      console.log('Form tidak valid');
    }
  }

  resetForm() {
    this.namaPembeli = '';
    this.pilihanKue = '';
    this.jumlah = 1;
    this.nomorLilin = 0;
    this.alamatPengiriman = '';
  }
}
