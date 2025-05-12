import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  pesananData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Berlangganan ke BehaviorSubject untuk mendapatkan data terbaru
    this.apiService.pesanan$.subscribe(data => {
      // Mengurutkan data berdasarkan id, data terbaru berada di atas
      this.pesananData = data ? data.sort((a, b) => b.id - a.id) : [];
    });

    // Ambil data pertama kali dari API
    this.apiService.getOrders().subscribe();
  }
}
